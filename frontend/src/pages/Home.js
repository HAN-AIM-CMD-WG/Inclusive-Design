import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'
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

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
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

  <div className="flex flex-col items-start z-10 text-white font-bold text-7xl lg:pl-36" data-aos="fade-up">
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
  <h2 className="text-3xl font-semibold text-white z-10 lg:pl-36" data-aos="fade-up">
    Accessible, inclusive & future proof projects
  </h2>
</div>

      <div
  className="flex flex-col items-center justify-center flex-grow p-8 space-y-8 bg-gray-900 w-full text-white"
  style={{
    height: isDesktopOrLaptop ? '45vh' : '50vh'

  }}
>
  <div className="text-center max-w-xl" data-aos="fade-up">
    <h2 className="text-3xl font-bold mb-4">
      Welcome to the Next Generation Internet
    </h2>
    <p className="text-xl">
      A futuristic hub for innovative projects. Students are encouraged to explore, request, and contribute to NGI-backed projects here. Get ready to immerse yourself in the new era of the internet!
    </p>
  </div>
  <button
    className="px-8 py-3 text-xl font-semibold bg-pink-700 hover:bg-pink-600 transition-all duration-200 transform hover:scale-105"
    data-aos="fade-up"
  >
    Explore Projects
  </button>
</div>

        <FeaturedProjects />
        <div className='mt-10 w-full'>
        <Footer />
        </div>
    </div>
  )
}

export default NGIPage
