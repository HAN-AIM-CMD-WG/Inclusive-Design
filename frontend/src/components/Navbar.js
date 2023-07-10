import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faHome, faHistory, faImage, faBroadcastTower, faCog } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false)

  const navRef = React.useRef()
  navRef.current = navBackground

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`flex justify-between items-center py-3 px-8 fixed w-full z-50 transition-all duration-500 ${navBackground ? 'bg-gray-900' : 'bg-transparent'}`}>
      <div className="flex items-center">
        <h1 className="text-3xl text-white mr-4">
          NGI
        </h1>
        <a href="#" className="flex-shrink-0 transition duration-300 px-3 py-2 rounded-full ease-in-out hover:bg-gray-700">
          <FontAwesomeIcon icon={faRobot} className="text-4xl text-gray-300" />
        </a>
      </div>
      <div className="flex items-center justify-center rounded-full bg-gray-800 px-3 py-2 shadow-md">
        <div className="flex rounded-full bg-gray-900 divide-x divide-gray-700">
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faHome} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Home</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faHistory} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">History</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faImage} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Gallery</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faBroadcastTower} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Live</span>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex items-center justify-center rounded-full px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow">
          <FontAwesomeIcon icon={faCog} className="text-2xl text-gray-300" />
        </button>
        <button className="flex items-center justify-center rounded-full px-3 py-2 ml-3 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow">
          <FontAwesomeIcon icon={faDiscord} className="text-2xl text-gray-300" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
