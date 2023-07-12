import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description about Project 1.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
      author: 'John Doe',
      completion: 60
    },
    {
      title: 'Project 2',
      description: 'A brief description about Project 2.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
      author: 'Jane Smith',
      completion: 40
    },
    {
      title: 'Project 3',
      description: 'A brief description about Project 3.',
      imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
      author: 'Joe Bloggs',
      completion: 85
    }
  ]

  return (
    <div className="p-8 space-y-8 w-full bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-semibold text-center text-white">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover"/>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex items-center space-x-2">
                <BsFillPersonFill />
                <p className="text-gray-500">{project.author}</p>
              </div>
              <div style={{ width: 70, height: 70 }}>
                <CircularProgressbar
                  value={project.completion}
                  text={`${project.completion}%`}
                  styles={buildStyles({
                    strokeLinecap: 'butt',
                    pathColor: `rgba(62, 152, 199, ${project.completion / 100})`,
                    textColor: '#3e98c7',
                    trailColor: '#d6d6d6'
                  })}
                />
              </div>
              <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors duration-200">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProjects
