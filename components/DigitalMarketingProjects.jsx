import Link from "next/link";
import projects from "@/lib/DigitalMarketingProjects";
import Image from "next/image";

const DigitalMarketingProjects = () => {
  return (
    <div className="mx-auto p-4">
      <h1 className="text-lg text-center md:text-left my-24">
        Digital Marketing Projects
      </h1>
      <div className="grid grid-cols-1">
        {projects.map((project) => (
          <Link
            href={`/digital-marketing-project/${project.id}`}
            passHref
            target="_blank"
          >
            <div
              key={project.id}
              className="shadow-md rounded-lg overflow-hidden cursor-pointer mb-28"
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                className="w-full h-64 object-cover mb-4"
                layout="responsive"
                width={700}
                height={400}
              />
              <div className="p-4">
                <h2 className="text-[#cdd7ee] mb-2">{project.title}</h2>
                <p className="text-sm mb-4">{project.description}</p>
                <Link className="text-sm" href="#" passHref target="_blank">
                  Read More
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DigitalMarketingProjects;
