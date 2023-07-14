// Navbar.js
import React from 'react'

const Navbar = () => {
  return (
        <nav className="flex items-center justify-between p-6 bg-indigo-700 text-white">
            <div>
                <a href="/" className="text-xl font-bold">LOGO</a>
            </div>
            <div className="space-x-4">
                <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300 transition duration-200">Start een project</button>
                <a href="/projects" className="hover:text-green-400 transition duration-200">Projects</a>
            </div>
            <div className="space-x-4">
                <a href="/register" className="hover:text-green-400 transition duration-200">Registreren</a>
                <a href="/login" className="hover:text-green-400 transition duration-200">Inloggen</a>
            </div>
        </nav>
  )
}

export default Navbar
