/**
 * All site content lives here. Components read from this file, so updating the
 * site should never require touching JSX.
 *
 * Fields marked DEFERRED are intentionally empty. Fill in the value and the
 * corresponding UI (a link button, a thumbnail, a section) appears automatically.
 */

export const profile = {
  name: "Yutong Wang",
  nameZh: "汪禹同",
  role: "MSR student, Robotics Institute",
  affiliation: "Carnegie Mellon University",
  photo: "/headshot.jpg",
  /** One-line thesis of the research. Refine as the narrative sharpens. */
  tagline:
    "I work on making aerial robots reliable when they physically interact with the world.",
  /** Supports inline link, bold and italic markup; see src/components/RichText.tsx. */
  bio: [
    "I am a Master of Science in Robotics student at the [CMU Robotics Institute](https://www.ri.cmu.edu/), co-advised by [Guanya Shi](https://www.gshi.me/) and [Sebastian Scherer](https://theairlab.org/team/sebastian/) across the [LeCAR Lab](https://lecar-lab.github.io/) and the [AirLab](https://theairlab.org/). My research runs from multi-robot motion planning under connectivity and safety constraints to learning-based control for aerial manipulation.",
    "Before CMU I was at [Brown University](https://www.brown.edu/), where I earned an Sc.B. in Computer Science (Honors, *magna cum laude*) and an A.B. in International and Public Affairs, and worked with [Nora Ayanian](https://vivo.brown.edu/display/nayanian) on trajectory planning for large robot swarms. Earlier I built autonomous-driving perception data infrastructure at [Horizon Robotics](https://en.horizon.auto/).",
  ],
  /** Short, present-tense. What is actually on the bench right now. */
  now: "Cross-embodiment mobile manipulation.",
};

export const links = {
  email: "yutongw3@andrew.cmu.edu",
  github: "https://github.com/ywang760",
  x: "https://x.com/w13659760",
  linkedin: "https://www.linkedin.com/in/yutong-w-957636201/",
  scholar: "https://scholar.google.com/citations?user=mFEAxA8AAAAJ&hl=en",
  /** DEFERRED: drop an updated CV at public/cv.pdf, then set this to "/cv.pdf". */
  cv: "",
};

export type NewsItem = { date: string; body: string };

/**
 * Reverse-chronological. Keep entries to one line. Supports bold and italic
 * markup, per src/components/RichText.tsx.
 */
export const news: NewsItem[] = [
  { date: "Sep 2026", body: "**AM-Bench** accepted to CoRL 2026." },
  {
    date: "Jun 2026",
    body: "**Connectivity Maintenance and Recovery** accepted to IROS 2026.",
  },
  { date: "Aug 2025", body: "Started the MSR program at the CMU Robotics Institute." },
  { date: "May 2025", body: "Graduated from Brown University." },
];

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: string;
  tldr: string;
  /** DEFERRED: put a looping clip at public/media/<id>.gif (or .mp4) and set this. */
  media?: string;
  mediaAlt?: string;
  arxiv?: string;
  code?: string;
  site?: string;
  video?: string;
  xThread?: string;
  linkedinPost?: string;
  bibtex: string;
};

/** The author string that gets bolded in every author list. */
export const SELF = "Yutong Wang";

export const publications: Publication[] = [
  {
    id: "am-bench",
    title:
      "AM-Bench: A Modular Simulation Suite and Benchmark for Aerial Manipulation Policy Learning",
    authors: [
      "Yutong Wang",
      "Dongjae Lee",
      "Xiaofeng Guo",
      "Yuanzhu Zhan",
      "Yufei Jiang",
      "Bavin Saravanan",
      "Muqing Cao",
      "Jia Xie",
      "Chenyang Mao",
      "Sebastian Scherer",
      "Junyi Geng",
      "Guanya Shi",
    ],
    venue: "Conference on Robot Learning (CoRL)",
    year: "2026",
    tldr: "12 aerial manipulation tasks across underactuated, fully actuated, and overactuated robots — so you can tell whether the embodiment, the controller, or the policy is what failed.",
    media: "/media/ambench-v13-web.mp4",
    mediaAlt:
      "AM-Bench overview cut showing outdoor aerial peg insertion, the paper's system architecture, twelve simulated tasks, four robot embodiments, and a wind comparison.",
    arxiv: "https://arxiv.org/abs/2609.00641",
    site: "https://ambench.github.io/",
    code: "https://github.com/ambench/ambench",
    xThread: "https://x.com/w13659760/status/2100969708388315150",
    linkedinPost: "https://lnkd.in/p/evEtpR3T",
    // DEFERRED: full-length video link
    bibtex: `@inproceedings{wang2026ambench,
  title     = {AM-Bench: A Modular Simulation Suite and Benchmark for
               Aerial Manipulation Policy Learning},
  author    = {Wang, Yutong and Lee, Dongjae and Guo, Xiaofeng and
               Zhan, Yuanzhu and Jiang, Yufei and Saravanan, Bavin and
               Cao, Muqing and Xie, Jia and Mao, Chenyang and
               Scherer, Sebastian and Geng, Junyi and Shi, Guanya},
  booktitle = {Conference on Robot Learning (CoRL)},
  year      = {2026}
}`,
  },
  {
    id: "connectivity",
    title: "Connectivity Maintenance and Recovery for Multi-Robot Motion Planning",
    authors: [
      "Yutong Wang",
      "Lishuo Pan",
      "Yichun Qu",
      "Tengxiang Wang",
      "Nora Ayanian",
    ],
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: "2026",
    tldr: "A real-time MPC–CLF–CBF planner that keeps a fleet radio-connected in cluttered space, and pulls it back together when connectivity breaks. Flown on 8 nano-quadrotors.",
    arxiv: "https://arxiv.org/abs/2510.03504",
    code: "https://github.com/ywang760/mpc-clf-cbf",
    media: "/media/connectivity-web.mp4",
    mediaAlt:
      "Long-exposure composite of eight nano-quadrotors traversing an obstacle field.",
    // DEFERRED: site, video
    bibtex: `@inproceedings{wang2026connectivity,
  title     = {Connectivity Maintenance and Recovery for
               Multi-Robot Motion Planning},
  author    = {Wang, Yutong and Pan, Lishuo and Qu, Yichun and
               Wang, Tengxiang and Ayanian, Nora},
  booktitle = {IEEE/RSJ International Conference on Intelligent
               Robots and Systems (IROS)},
  year      = {2026}
}`,
  },
  {
    id: "hierarchical-swarm",
    title: "Hierarchical Trajectory (Re)Planning for a Large Scale Swarm",
    authors: ["Lishuo Pan", "Yutong Wang", "Nora Ayanian"],
    venue: "arXiv preprint",
    year: "2025",
    tldr: "Splitting the workspace and replanning robots in parallel scales deadlock-free trajectory generation to 142 simulated robots and 24 Crazyflies.",
    arxiv: "https://arxiv.org/abs/2501.16743",
    media: "/media/hierarchical-swarm-web.mp4",
    mediaAlt:
      "Long-exposure composite of 24 Crazyflies replanning through a shared workspace.",
    // DEFERRED: code, site, video
    bibtex: `@article{pan2025hierarchical,
  title   = {Hierarchical Trajectory (Re)Planning for a Large Scale Swarm},
  author  = {Pan, Lishuo and Wang, Yutong and Ayanian, Nora},
  journal = {arXiv preprint arXiv:2501.16743},
  year    = {2025}
}`,
  },
];

/*
 * ---------------------------------------------------------------------------
 * INTENTIONALLY DISABLED — do not delete.
 *
 * Reviewing service is real and public, but is held back from the rendered page
 * by request. To publish it, uncomment `service` below and render it from
 * src/components/Hero.tsx (or a new section in src/app/page.tsx).
 *
 * export const service = {
 *   reviewing: ["IEEE Robotics and Automation Letters (RA-L)", "ACM Multimedia"],
 * };
 *
 * Also held back: the MBZUAI summer 2025 fellowship, pending the program's
 * rename. Restore once the current name is confirmed.
 *
 * export const fellowship = {
 *   name: "MBZUAI ASPIRE PhD Fellowship (summer 2025)",
 *   href: "https://mbzuai.ac.ae/aspire-phd-fellowship-program/",
 *   feature: "https://www.youtube.com/watch?v=EsndxeB5YW8",
 * };
 * ---------------------------------------------------------------------------
 */
