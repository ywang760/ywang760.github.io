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
      "Develop a course that teaches students how to use drones to create art. The course includes a series of lectures, labs, and a final project.",
    image: "/projectImages/drone-art.png",
    skills: ["Python", "Blockly", "React", "Robot Operating System (ROS)"],
    github: "https://github.com/USC-ACTLab/MultiRobotArt",
  },
  {
    name: "Spinder - Alien Dating Simulator",
    description: "Hack@Brown",
    image: "/projectImages/spinder.png",
    skills: ["React", "Next.js", "Typescript", "Figma", "MongoDB"],
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
      "A project that uses iterative design to create a mockup for Pyrls, a platform for students to find research opportunities.",
    image: "/projectImages/pyrls.png",
    skills: ["Figma", "User Research", "Iterative Design"],
    github: "https://github.com/andrew7li/cs1300-iterative-design",
    deploymentLink: "https://cs1300-iterative-design.pages.dev/",
  },
  {
    name: "Music Generation with WaveNet",
    description:
      "A project that uses WaveNet to generate music. The model is trained on the MAESTRO dataset.",
    image: "/projectImages/music-generation.png",
    skills: ["Python", "Tensorflow"],
    github: "https://github.com/ywang760/DeepLearningFinal-WaveNet",
  },
];

const Projects = () => {
  return (
    <>
      <h1 className="text-4xl text-primary-600">Projects</h1>
      <div className="flex flex-col space-y-6 mt-6">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="flex">
            {/* TODO: add images */}
            {/* <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            /> */}
            <div className="flex flex-col space-y-2">
              {project.detailsLink ? (
                <Link
                  href={project.detailsLink as string}
                  className="text-2xl text-primary-600"
                >
                  {project.name}
                </Link>
              ) : (
                <h2 className="text-2xl text-primary-600">{project.name}</h2>
              )}
              <p className="text-gray-600">{project.description}</p>
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
        ))}
      </div>
    </>
  );
};

export default Projects;
