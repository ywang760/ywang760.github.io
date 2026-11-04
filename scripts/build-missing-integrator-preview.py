"""Build the website loop from the camera-ready PDF using Poppler and FFmpeg.

Run from any directory: python3 scripts/build-missing-integrator-preview.py
All intermediate frames stay in the gitignored media-masters directory.
Crop coordinates refer to paper pages rendered with a 1800-pixel long edge.
"""

from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
WORK = ROOT / "media-masters/missing-integrator"
WORK.mkdir(parents=True, exist_ok=True)
PDF = ROOT / "public/papers/the-missing-integrator.pdf"
OUTPUT = ROOT / "public/media/missing-integrator-web.mp4"


def run(*args):
    subprocess.run([str(arg) for arg in args], check=True)


run("pdftoppm", "-f", "2", "-l", "4", "-scale-to", "3600", "-png", PDF, WORK / "page")

# Preserve plot axes and labels. Fig. 2's shared legend is included below each panel.
panels = [
    (4, (310, 190, 350, 200), False),
    (2, (250, 155, 880, 230), False),
    (3, (260, 184, 360, 306), True),
    (3, (780, 185, 350, 305), True),
    (4, (660, 190, 450, 200), False),
]

for index, (page, (x, y, width, height), legend) in enumerate(panels):
    crop = f"crop={width * 2}:{height * 2}:{x * 2}:{y * 2}"
    if legend:
        filters = (
            "[0:v]split[chart][key];"
            f"[chart]{crop},scale=1140:520:force_original_aspect_ratio=decrease,"
            "pad=1280:720:(ow-iw)/2:45:white[base];"
            "[key]crop=1300:90:760:1020,scale=1140:-1[legend];"
            "[base][legend]overlay=(W-w)/2:610[out]"
        )
    else:
        filters = (
            f"[0:v]{crop},scale=1160:600:force_original_aspect_ratio=decrease,"
            "pad=1280:720:(ow-iw)/2:(oh-ih)/2:white[out]"
        )
    run(
        "ffmpeg", "-hide_banner", "-loglevel", "error", "-y",
        "-i", WORK / f"page-{page:02}.png", "-filter_complex", filters,
        "-map", "[out]", "-frames:v", "1", WORK / f"slide-{index}.png",
    )

# Five four-second scenes, half-second dissolves, including a return to Fig. 3(a).
# The final frame matches the opening so the browser loop has no hard cut.
command = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y"]
for index in [0, 1, 2, 3, 4, 0]:
    command += ["-loop", "1", "-framerate", "24", "-t", "4.5", "-i", WORK / f"slide-{index}.png"]
filters = []
for index in range(6):
    filters.append(f"[{index}:v]format=yuv420p,settb=AVTB,setpts=PTS-STARTPTS[v{index}]")
previous = "v0"
for index in range(1, 6):
    result = f"fade{index}"
    filters.append(
        f"[{previous}][v{index}]xfade=transition=fade:duration=0.5:"
        f"offset={index * 4}[{result}]"
    )
    previous = result
run(
    *command, "-filter_complex_threads", "1", "-filter_complex", ";".join(filters),
    "-map", f"[{previous}]", "-t", "20.5", "-an", "-c:v", "libx264",
    "-crf", "20", "-preset", "slow", "-pix_fmt", "yuv420p",
    "-movflags", "+faststart", OUTPUT,
)
print(OUTPUT)
