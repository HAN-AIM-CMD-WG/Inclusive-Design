import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Navbar from '../components/SecNavbar'
import Footer from '../components/Footer'

const ProjectDetailPage = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const fetchProject = async () => {
      const project = {
        id: '1',
        title: 'Project 1',
        fullDescription: 'Detailed information about Project 1...',
        imageUrl: 'https://placeimg.com/640/480/tech',
        author: 'John Doe',
        teamMembers: ['Alice', 'Bob', 'Charlie'],
        completion: 60,
        createdAt: '2023-06-01',
        updates: [
          {
            date: '2023-06-15',
            content: 'This is the first progress update...'
          },
          {
            date: '2023-07-01',
            content: 'This is the second progress update...'
          }
        ]
      }
      setProject(project)
    }
    fetchProject()
  }, [id])

  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar customClass={'w-full z-50 absolute '} />

      <div className="p-8 space-y-8 rounded-lg relative max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-pink-600">
          {project.title}
        </h2>
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover"/>
        <p>{project.fullDescription}</p>
        <div className="space-y-4">
          <div>Author: {project.author}</div>
          <div>Team members: {project.teamMembers.join(', ')}</div>
          <div>Created at: {project.createdAt}</div>
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
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Project Updates</h3>
          {project.updates.map((update, index) => (
            <div key={index}>
              <h4>{update.date}</h4>
              <p>{update.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetailPage
