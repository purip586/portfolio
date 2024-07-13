import Image from "next/image";

const ProjectDetails = ({ project }) => {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-16">{project.title}</h2>
      <Image
        src={project.imageSrc}
        alt={project.title}
        className="w-full h-64 object-cover mb-16"
        layout="responsive"
        width={700}
        height={400}
      />
      <div className="mb-16">
        <h3 className="text-xl font-bold">Goals & Challenges</h3>
        <p className="text-gray-700">{project.goals}</p>
      </div>
      <div className="mb-16">
        <h3 className="text-xl font-bold">Solutions</h3>
        <p className="text-gray-700">{project.solutions}</p>
      </div>
      <div className="mb-16">
        <h3 className="text-xl font-bold">Results</h3>
        <p className="text-gray-700">{project.results}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;