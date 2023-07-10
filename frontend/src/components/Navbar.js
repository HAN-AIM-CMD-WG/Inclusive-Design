import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState('transparent')

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setNavbarStyle('bg-gray-900')
      } else {
        setNavbarStyle('transparent')
      }
    }

    window.addEventListener('scroll', changeNavbarColor)

    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])

  return (
    <nav className={`flex items-center justify-between px-8 py-6 w-full transition-all duration-500 ease-in-out ${navbarStyle} text-white `}>
      <div>
        <Link to="/" className="text-2xl font-bold">NGI</Link>
      </div>
      <div className="space-x-4">
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
