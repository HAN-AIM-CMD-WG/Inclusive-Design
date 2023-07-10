import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProjects from '../components/FeauturedProjects'

const NGIPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  return (
    <div className="flex flex-col items-center bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div
        className="w-full bg-cover bg-top flex flex-col items-center justify-center text-center p-8"
        style={{
          backgroundImage: 'url(\'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png\')',
          height: isDesktopOrLaptop ? '55vh' : '30vh'
        }}
      >
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mb-4" data-aos="fade-up">
          Next Generation Internet
        </h1>
        <h2 className="text-2xl font-semibold text-gray-200" data-aos="fade-up">
          Accessible, inclusive & future proof projects
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center flex-grow p-8 space-y-8"
        style={{
          height: isDesktopOrLaptop ? '55vh' : '70vh'
        }}
      >
        <p className="text-xl text-center max-w-xl" data-aos="fade-up">
          Welcome to the Next Generation Internet platform, a futuristic hub for innovative projects. Students are encouraged to explore, request, and contribute to NGI-backed projects here. Get ready to immerse yourself in the new era of the internet!
        </p>
        <button
          className="px-8 py-3 text-xl font-semibold bg-pink-700 hover:bg-pink-600 transition-colors duration-200"
          data-aos="fade-up"
        >
          Explore Projects
        </button>
      </div>
      <div className="w-full bg-gray-800">
        <FeaturedProjects />
        <Footer />

      </div>
    </div>
  )
}

export default NGIPage
