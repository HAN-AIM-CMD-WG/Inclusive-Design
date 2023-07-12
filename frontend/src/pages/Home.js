import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
import CountUp from 'react-countup' // Import the React CountUp library
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FeaturedProjects from '../components/FeaturedProjects'
import '../css/home.css'

const NGIPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })

  const [projectCount, setProjectCount] = useState(0) // State for project count
  const [studentCount, setStudentCount] = useState(0) // State for student count

  // Simulated API fetch to get the actual counts
  useEffect(() => {
    // Simulated API fetch or calculation
    const fetchStats = () => {
      // Replace with your actual API call or calculation logic
      setTimeout(() => {
        setProjectCount(150) // Set the project count
        setStudentCount(500) // Set the student count
      }, 2000)
    }

    fetchStats()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div
        className="w-full flex flex-col justify-center text-left p-8 relative"
        style={{
          height: isDesktopOrLaptop ? '55vh' : '50vh',
          minHeight: '300px' // Set a minimum height for smaller screens
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
            &gt;NEXT
          </span>
          <span>
            GENERATION
          </span>
          <span>
            INTERNET
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:pl-36 text-white" data-aos="fade-up">
          Accessible, inclusive &amp; future proof projects
        </h2>
      </div>

      <div
        className="flex flex-col items-center justify-center flex-grow p-8 space-y-8 bg-gray-900 w-full text-white"
        style={{
          minHeight: '300px' // Set a minimum height for smaller screens
        }}
      >
        <div className="text-center max-w-xl" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Welcome to the Next Generation Internet
          </h2>
          <p className="text-lg md:text-xl">
            A futuristic hub for innovative projects. Students are encouraged to explore, request, and contribute to NGI-backed projects here. Get ready to immerse yourself in the new era of the internet!
          </p>
        </div>
        <button
          className="px-8 py-3 text-lg md:text-xl font-semibold bg-pink-700 hover:bg-pink-600 transition-all duration-200 transform hover:scale-105"
          data-aos="fade-up"
        >
          Explore Projects
        </button>

        {/* Stats Counter */}
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">
              <CountUp end={projectCount} duration={2} separator="," />
            </h3>
            <p className="text-lg">Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold">
              <CountUp end={studentCount} duration={2} separator="," />
            </h3>
            <p className="text-lg">Students</p>
          </div>
        </div>
        {/* End of Stats Counter */}
      </div>

      <FeaturedProjects />
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default NGIPage
