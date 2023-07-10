import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import { useMediaQuery } from 'react-responsive'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NGIProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  return (
  <div className = "flex flex-col bg-HANGRIJS text-white min-h-screen" >
        <Navbar/>

        <div className='flex'>
        <div className='w-1/6 h-full'>bar</div>
        <div className='w-5/6 h-full'>content</div>
        </div>
        <Footer/>
        </div>
  )
}

export default NGIProjects
