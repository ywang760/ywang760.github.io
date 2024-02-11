import Image from "next/image";
import Link from "next/link";

const LANGUAGES: string[] = [
  "Python",
  "Java",
  "C/C++",
  "SQL",
  "TypeScript/JavaScript",
  "HTML/CSS",
  "Solidity",
  "Go",
  "MATLAB",
];

const FRAMEWORKS: string[] = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Flask",
  "MySQL",
  "Firebase",
  "MongoDB",
  "Tensorflow",
  "PyTorch",
  "OpenCV",
];

const OTHER: string[] = [
  "Git",
  "Linux",
  "CI/CD",
  "Jenkins",
  "Figma",
  "Robot Operating System (ROS)",
  "Gurobi",
  "Adobe Premiere Pro",
];

export default function Home() {
  return (
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-center lg:mt-8 lg:flex-row lg:space-x-20 lg:text-left space-y-6 lg:space-y-0">
        <div className="flex lg:w-1/3 flex-col lg:space-y-10 items-center px-20 lg:px-0">
          <Image
            src="/headshot3.jpg"
            alt="Hero Image"
            className="rounded-full shadow-2xl"
            width={300}
            height={300}
          />

          <p className="font-mono text-primary-600 text-center hidden lg:flex">
            yutong_wang(number_five)(at)brown.edu
          </p>
        </div>

        <div className="flex flex-col lg:w-2/3 space-y-4">
          <h1 className="text-5xl text-primary-600 font-semibold text-center lg:text-left">
            Yutong Wang
          </h1>
          <div className="lg:text-lg text-gray-600 space-y-4">
            <p>
              I am a junior undergraduate student at Brown University studying
              computer science and international affairs and public affairs,
              expected to graduate in May 2025. I am passionate about robotics,
              machine learning, and software engineering.
            </p>
            <p>
              I am currently working as a research assistant at the{" "}
              <Link
                className="text-primary-600 hover:underline"
                href="https://act.usc.edu/"
              >
                Brown Automatic Coodination of Teams (ACT) Lab
              </Link>{" "}
              supervised by Prof.{" "}
              <span className="text-primary-600">Nora Ayanian</span>, focusing
              on multi-robot coordination. My research interests include
              multi-agent path finding (MAPF) problems under controlled
              environments with optimization-based methods, and I&apos;m also
              interested in cooperative and competitive multi-robot systems with
              reinforcement learning. Besides research, I&apos;m also involved
              in Full Stack@Brown, Brown Motion Pictures, and Brown Journal of
              World Affairs.
            </p>
            <p>
              I enjoy flying drones, photography, traveling, hiking, swimming
              and playing badminton. Feel free to reach out to me if you want to
              chat about anything!
            </p>
          </div>
        </div>
      </div>

      {/* TODO: skills section for recruiting, pubs for research */}
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl text-primary-600 font-semibold">Skills</h1>
        <div className="flex-col md:flex-row w-full flex gap-x-6 gap-y-6 lg:px-6">
          <div className="md:w-1/3 rounded-lg space-y-2">
            <h2 className="text-center font-semibold text-lg text-gray-600">
              Languages
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
              {LANGUAGES.map((item, idx) => (
                <p
                  key={idx}
                  className="text-sm px-2 py-1 border border-primary-500 text-primary-500 rounded-md"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 rounded-lg space-y-2 flex-center">
            <h2 className="text-center font-semibold text-lg text-gray-600">
              Frameworks and Tools
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
              {FRAMEWORKS.map((item, idx) => (
                <p
                  key={idx}
                  className="text-sm px-2 py-1 border border-primary-500 text-primary-500 rounded-md"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 rounded-lg space-y-2">
            <h2 className="text-center font-semibold text-lg text-gray-600">
              Others
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
              {OTHER.map((item, idx) => (
                <p
                  key={idx}
                  className="text-sm px-2 py-1 border border-primary-500 text-primary-500 rounded-md"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
