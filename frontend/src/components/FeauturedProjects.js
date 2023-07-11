import React from 'react'

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description about Project 1.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png'
    },
    {
      title: 'Project 2',
      description: 'A brief description about Project 2.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png'
    },
    {
      title: 'Project 3',
      description: 'A brief description about Project 3.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png'
    }
  ]

  return (
    <div className="p-8 space-y-8">
      <h2 className="text-3xl font-semibold text-center text-black">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-white text-gray-900 rounded shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover"/>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
