import React from 'react'
import Navbar from '../components/SecNavbar'
import Footer from '../components/Footer'

const CreateProject = () => {
  return (
        <div className="flex flex-col min-h-screen">
        <Navbar
        customClass={'w-full z-50 absolute '}
        />

<div className="mt-10 w-full">
        <Footer />
      </div>
        </div>

  )
}

export default CreateProject
