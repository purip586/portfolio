const ProjectDetails = ({ project }) => {
    return (
      <div className="p-4">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover mb-4" />
        <div className="mb-4">
          <h3 className="text-xl font-bold">Goals & Challenges</h3>
          <p className="text-gray-700">{project.goals}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Solutions</h3>
          <p className="text-gray-700">{project.solutions}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-bold">Results</h3>
          <p className="text-gray-700">{project.results}</p>
        </div>
      </div>
    )
  }
  
  export default ProjectDetails
  