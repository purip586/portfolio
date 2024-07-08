const projects = [
  {
    id: 1,
    title: 'SEO Optimization for E-commerce Site',
    description: 'Improved organic search rankings and increased traffic.',
    imageUrl: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/project1.jpg`,
    category: 'SEO',
    goals: 'Increase organic traffic and search rankings.',
    solutions: 'Implemented on-page SEO, link building, and content strategy.',
    results: 'Achieved a 50% increase in organic traffic.',
  },
  // Add more projects as needed
]

const DigitalMarketingProjects = () => {
  return (
      <div className="mx-auto p-4">
        <h1 className="text-lg text-center md:text-left my-24">Digital Marketing Projects</h1>
        <div className="grid grid-cols-1">
          {projects.map((project) => (
            <div key={project.id} className="shadow-md rounded-lg overflow-hidden cursor-pointer">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg text-[#cdd7ee] mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <button
                  className="bg-transparent/10 px-4 py-2 rounded"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default DigitalMarketingProjects;
