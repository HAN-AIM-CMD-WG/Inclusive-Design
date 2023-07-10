import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

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
      <div
        className="w-full h-1/2 bg-cover bg-top"
        style={{
          backgroundImage: 'url(\'https://ngi.aimsites.nl/wp-content/uploads/2022/10/headerimage_ngi0_v4_8bit.png\')',
          height: isDesktopOrLaptop ? '50vh' : '30vh'
        }}
      />
      <div className="flex flex-col items-center justify-center flex-grow p-8 space-y-8">
        <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500" data-aos="fade-up">
          Next Generation Internet
        </h1>
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
      <footer className="p-4 text-center bg-gray-800 text-gray-400">
        © {new Date().getFullYear()} Next Generation Internet
      </footer>
    </div>
  )
}

export default NGIPage
