import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faHome, faHistory, faImage, faBroadcastTower, faCog, faBars } from '@fortawesome/free-solid-svg-icons'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  const [navBackground, setNavBackground] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

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

  const handleMobileMenuToggle = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <nav
      className={`flex justify-between items-center py-3 px-8 fixed w-full z-50 transition-all duration-500 ${
        navBackground ? 'bg-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center w-full md:w-auto">
        <h1 className="text-3xl text-white mr-4">NGI</h1>
        <a
          href="#"
          className="flex-shrink-0 transition duration-300 px-3 py-2 rounded-full ease-in-out hover:bg-gray-700"
        >
          <FontAwesomeIcon icon={faRobot} className="text-4xl text-gray-300" />
        </a>
      </div>
      <div className={`hidden md:flex items-center justify-center rounded-full bg-gray-800 px-3 py-2 shadow-md ${showMobileMenu ? 'hidden' : 'flex'}`}>
        <div className="flex rounded-full bg-gray-900 divide-x divide-gray-700">
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faHome} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Home</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faHistory} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Projects</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faImage} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Students</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow">
            <FontAwesomeIcon icon={faBroadcastTower} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">About Us</span>
          </button>

        </div>
      </div>
      <div className="md:flex items-center mt-3 md:mt-0 hidden md:block">
        <button className="rounded-full px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow">
          <FontAwesomeIcon icon={faCog} className="text-2xl text-gray-300" />
        </button>
        <button className="rounded-full px-3 py-2 ml-3 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow">
          <FontAwesomeIcon icon={faDiscord} className="text-2xl text-gray-300" />
        </button>
      </div>
      <div className="md:hidden flex items-center mt-3 md:mt-0">
        <button className="rounded-full px-3 py-2 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow" onClick={handleMobileMenuToggle}>
          <FontAwesomeIcon icon={faBars} className="text-2xl text-gray-300" />
        </button>
      </div>
      {showMobileMenu && (
      <div className="md:hidden fixed top-0 right-0 mt-20  bg-gray-800 py-2 z-50 overflow-auto">
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow w-full">
            <FontAwesomeIcon icon={faHome} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Home</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow w-full">
            <FontAwesomeIcon icon={faHistory} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Projects</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow w-full">
            <FontAwesomeIcon icon={faImage} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Students</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-pink-700 hover:shadow w-full">
            <FontAwesomeIcon icon={faBroadcastTower} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">About Us</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow w-full mt-4">
            <FontAwesomeIcon icon={faCog} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Settings</span>
          </button>
          <button className="flex items-center justify-center rounded-full px-6 py-3 transition duration-300 ease-in-out hover:bg-gray-700 hover:shadow w-full mt-4">
            <FontAwesomeIcon icon={faDiscord} className="text-2xl text-gray-300" />
            <span className="ml-3 font-medium text-base text-gray-300">Discord</span>
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
