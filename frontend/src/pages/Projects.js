import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
import { BsFillPersonFill } from 'react-icons/bs'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Navbar from '../components/SecNavbar'
import Footer from '../components/Footer'
import '../css/home.css'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [allProjects, setAllProjects] = useState([])
  const [displayedProjects, setDisplayedProjects] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchProjects = () => {
      const projects = [
        {
          id: '1',
          title: 'Project 1',
          description: 'A brief description about Project 1.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'John Doe',
          completion: 60
        },
        {
          id: '2',
          title: 'Project 2',
          description: 'This is the second project.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'Jane Doe',
          completion: 45
        },
        {
          id: '3',
          title: 'Project 3',
          description: 'Details about Project 3.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'Steve Smith',
          completion: 85
        },
        {
          id: '4',
          title: 'Project 4',
          description: 'Information about Project 4.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'Emma Johnson',
          completion: 20
        },
        {
          id: '5',
          title: 'Project 5',
          description: 'Some information about Project 5.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'Daniel Williams',
          completion: 75
        },
        {
          id: '6',
          title: 'Project 6',
          description: 'Project 6 details here.',
          imageUrl: 'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png',
          author: 'Sophia Brown',
          completion: 100
        }
      ]
      setAllProjects(projects)
      setDisplayedProjects(projects)
    }

    fetchProjects()
  }, [])

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    if (event.target.value === '') {
      setDisplayedProjects(allProjects)
    } else {
      const filteredProjects = allProjects.filter(project =>
        project.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
      setDisplayedProjects(filteredProjects)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
      customClass={'w-full z-50 absolute '}
      />
      <div
        className="w-full flex flex-col justify-center text-left p-8 relative"
        style={{
          height: isDesktopOrLaptop ? '55vh' : '50vh'
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-top darken-gradient"
          style={{
            backgroundImage: 'url(\'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png\')'
          }}
        />

        <div className="flex flex-col items-start z-10 text-white font-bold text-4xl md:text-7xl lg:pl-36" data-aos="fade-up">
          <span>
            All Projects
          </span>
        </div>
      </div>

      <div className="p-8 space-y-8 rounded-lg  relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pink-600">
          Our Projects
        </h2>
        <input
          type="text"
          placeholder="Filter by title..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="p-2 border rounded w-full md:w-1/2 lg:w-1/3"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
          {displayedProjects.map((project, index) => (
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
                <Link to={`/projects/${project.id}`}>
                  <button className="mt-4 w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors duration-200">
                    Explore
                  </button>
                </Link>
              </div>
            </div>))}
        </div>
      </div>

      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default ProjectsPage
