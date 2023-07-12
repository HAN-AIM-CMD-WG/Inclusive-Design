/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

const Projects = ({ theme, projects }) => {
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    setFilteredProjects(
      projects.filter(project => {
        return ((!theme || theme === project.theme))
      })
    )
  }, [theme])

  return (
    <div className="p-8 space-y-8 bg-gray-800">
    <h2 className="text-3xl font-semibold text-center text-white" data-aos="fade-up">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
      {filteredProjects.map((project, index) => (
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

export default Projects
