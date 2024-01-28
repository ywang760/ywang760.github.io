import React from "react";
import Image from "next/image";
import Link from "next/link";

interface project {
  name: string;
  description: string;
  image: string;
  detailsLink?: string;
  skills?: string[];
  github?: string;
}

const PROJECTS: project[] = [
  {
    name: "Music Generation with WaveNet",
    description:
      "A project that uses WaveNet to generate music. The model is trained on the MAESTRO dataset.",
    image: "/projectImages/music-generation.png",
    detailsLink: "/projects/music-generation",
  },
  {
    name: "Animal Research Compliance Inspection Project",
    description:
      "A project that uses WaveNet to generate music. The model is trained on the MAESTRO dataset.",
    image: "/projectImages/music-generation.png",
    detailsLink: "/projects/music-generation",
  },
];

const Projects = () => {
  return (
    <main className="flex flex-col md:mx-40 mx-8 py-8">
      <h1 className="text-4xl text-primary-600">Projects</h1>
      <div className="flex flex-col md:space-y-6 md:mt-6">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="flex md:space-x-8">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={300}
              className="w-40 h-40 object-cover rounded-lg shadow-md"
            />
            <div className="flex flex-col">
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
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
