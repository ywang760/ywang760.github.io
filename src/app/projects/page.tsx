import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
interface project {
  name: string;
  description: string;
  image: string;
  detailsLink?: string;
  deploymentLink?: string;
  skills?: string[];
  github?: string;
}

const PROJECTS: project[] = [
  {
    name: "Animal Research Compliance Inspection Project",
    description:
      "Enhance animal research inspection process with planning, scheduling, real-time information logging and report generating features.",
    image: "/projectImages/arci.png",
    // detailsLink: "/projects/arci",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Google Firebase",
      "Figma",
      "Material UI",
    ],
    github: "https://github.com/lukas90275/ARCi",
  },
  // TODO: placeholder for new projects
  // { name: "Reintegrating AI project" },
  // { name: "Computer Vision project" },
  {
    name: "Drone and Art Course Development Project",
    description:
      "Contributed to the development a college-level course on using drones to create art, with an emphasis on creating a user-friendly interface for drone control on a web application.",
    image: "/projectImages/drone-art.png",
    skills: ["Python", "Blockly", "React", "Robot Operating System (ROS)"],
    github: "https://github.com/USC-ACTLab/MultiRobotArt",
  },
  {
    name: "Spinder - Alien Dating Simulator Game",
    description:
      "A hackathon project for users to chat with AI-generated alien characters and find their perfect match.",
    image: "/projectImages/spinder.png",
    skills: ["React", "Next.js", "Typescript", "Figma", "MongoDB"],
    github: "https://github.com/ywang760/hatb2024-spinder",
  },
  {
    name: "TaskMaster - Task Management App",
    description:
      "A task management app with Google Calendar integration and optimized time management recommendations.",
    image: "/projectImages/taskmaster.png",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "Spark Java",
      "Google Calendar API",
      "Google Firebase",
    ],
    github: "https://github.com/cs0320-s2023/taskmaster",
  },
  {
    name: "Iterative Mockup Design for Pyrls",
    description:
      "Create a user-friendly interface for Pyrls, a drug information app for healthcare providers, conducting user research and iterative design.",
    image: "/projectImages/pyrls.png",
    skills: ["Figma", "User Research", "Iterative Design"],
    github: "https://github.com/andrew7li/cs1300-iterative-design",
    deploymentLink: "https://cs1300-iterative-design.pages.dev/",
  },
  {
    name: "Music Generation with WaveNet",
    description:
      "Fine tune WaveNet, a deep learning model for raw audio, to generate piano music with a specific style and genre.",
    image: "/projectImages/music-generation.png",
    skills: ["Python", "Tensorflow"],
    github: "https://github.com/ywang760/DeepLearningFinal-WaveNet",
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-600 font-semibold">Projects</h1>
      <div className="flex flex-col space-y-6 mt-6 w-full">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="flex w-full">
            {/* TODO: add images */}
            {/* <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            /> */}
            <div className="flex flex-col space-y-2">
              {/* TODO: change to details link */}
              {project.github ? (
                <Link
                  href={project.github as string}
                  target="_blank"
                  className="text-2xl text-primary-600 hover:underline"
                >
                  {project.name}
                </Link>
              ) : (
                <h2 className="text-2xl text-primary-600">{project.name}</h2>
              )}
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-row justify-between">
                <div className="flex flex-wrap gap-x-2 gap-y-2 items-center">
                  {project.skills?.map((skill, idx) => (
                    <p
                      key={idx}
                      className="text-sm px-2 py-1 border border-primary-600 text-primary-600 rounded-md"
                    >
                      {skill}
                    </p>
                  ))}
                </div>
                {/* {project.github && (
                  <Link href={project.github} className="flex items-center">
                    <FaGithub size={24} />
                  </Link>
                )} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
