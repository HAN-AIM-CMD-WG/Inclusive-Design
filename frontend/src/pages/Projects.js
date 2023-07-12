import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import ProjectData from '../data/ProjectData'

const NGIProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  // eslint-disable-next-line no-unused-vars
  const [allProjects, setAllProjects] = useState(ProjectData)
  const themes = Array.from(new Set(allProjects.map(project => project.theme)))
  const participants = Array.from(new Set(allProjects.map(project => project.participants)))
  const expertises = Array.from(new Set(allProjects.map(project => project.expertises))) /* <- dit werkt nog niet goed */
  const [theme, setTheme] = useState()

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  // const onFilterChange = () => {
  // }

  return (
    <div className="flex flex-col bg-HANGRIJS text-white min-h-screen" >
      <Navbar />

      <div className='flex'>
        <div className='w-1/6'>

          <div className="px-5 grid content-center border border-gray-700 rounded-lg">
            {/* filter for title */}
            <form className="pt-5">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search..." required></input>
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>

            {/* select for theme */}
            <label className="font-medium text-center block mb-2">thema</label>
            <select className="bg-HANGRIJS font-medium text-center border-2 border-gray-600 rounded-e-full" onChange={e => setTheme(e.target.value)}>
              <option value="" disabled default selected>selecteer thema</option>
              {themes.map(theme => {
                return <option key={theme}>{theme}</option>
              })}
            </select>
            {/* filter voor hoeveelheid deelnemers */}

            <label className="font-medium text-center block mb-2">aantal deelnemers</label>
            <select multiple id="participants_multi" className="bg-HANGRIJS font-medium text-center border-2 border-gray-600 rounded-e-full overflow-hidden" size={participants.length + 1} onChange={e => setTheme(e.target.value)}>
              <option value="" disabled default selected>aantal deelnemers nodig</option>
              {participants.map(participant => {
                return <option key={participant}>{participant}</option>
              })}
            </select>
            {/* filter voor gezochte expertises */}
            <label className="font-medium text-center block mb-2">expertises</label>
            <select className="bg-HANGRIJS font-medium text-center border-2 border-gray-600 rounded-e-full">
              <option value="" disabled default selected>filter op gewenste expertise</option>
              {expertises.map(expertise => {
                return <option key={expertise}>{expertise}</option>
              })}
            </select>
          </div>
        </div>

        <div className='w-5/6 h-full'>
          <Projects
            theme={theme}
            projects={allProjects} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default NGIProjects
