/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from '../components/Footer'
import { FaStar, FaRegLightbulb, FaHeart } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'

const ProfilePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate developer interested in next generation internet technologies.',
    profileImage: 'https://i.imgur.com/x6flZbo.jpeg',
    projects: ['Project 1', 'Project 2', 'Project 3'],
    expertises: ['JavaScript', 'React', 'Node.js']
  })

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">

      <div className="w-full flex flex-col items-center justify-center text-center p-8 relative pt-16 bg-gradient-to-r from-purple-600 to-blue-500">
        <img
          src={userData.profileImage}
          alt="Profile"
          className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-gray-800"
        />

        <h1 className="text-white font-bold text-5xl" data-aos="fade-up">
          {userData.name}
        </h1>

        <p className="text-white font-semibold text-lg mt-2" data-aos="fade-up">
          {userData.email}
        </p>

        <p className="text-white mt-4 max-w-xl text-center mx-auto" data-aos="fade-up">
          {userData.bio}
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <FaStar className="text-yellow-400 text-2xl"/>
          <FaRegLightbulb className="text-blue-400 text-2xl"/>
          <FaHeart className="text-red-400 text-2xl"/>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow p-8 space-y-8 w-full text-black bg-gray-200 shadow-xl rounded-lg mx-8 my-8">
        <div className="text-center max-w-xl" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            My Expertise
          </h2>
          <div className="flex flex-wrap justify-center">
            {userData.expertises.map((expertise, index) => (
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-purple-200 text-purple-800 m-1" key={index}>
                {expertise}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center max-w-xl" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            My Projects
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl">
            {userData.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProfilePage
