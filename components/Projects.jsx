"use client";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { useInView } from "react-intersection-observer";
import projects from "@/lib/Projects";

const ProjectCard = ({ project }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <Link href={project.href} passHref target="_blank">
      <div
        ref={ref}
        className={`relative overlay p-8 md:px-5 py-10 mt-16 flex flex-col md:flex-row gap-3 cursor-pointer transition-transform hover:scale-105 duration-300 transform fade-up ${
          inView ? "fade-up-active" : ""
        }`}
      >
        <div>
          <Image src={project.imageSrc} width={200} height={150} alt={project.alt} />
        </div>
        <div>
          <div className="flex gap-2">
            <p className="text-[#cdd7ee]">{project.title}</p>
            <GoArrowUpRight color="#5ce4cf" />
          </div>
          <p className="pt-2 text-sm">{project.description}</p>
          <div className="flex gap-3 pt-3 text-xs">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#5ce4cf] bg-opacity-20 text-[#5ce4cf] p-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="pt-28">
      <h2 className="text-lg">My Featured Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
