import React, { useState } from 'react'
import Navbar from '../components/SecNavbar'
import Footer from '../components/Footer'
// import { useMediaQuery } from 'react-responsive'
import '../css/home.css'

const CreateProjectPage = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)'
  // })

  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    category: '',
    image: null
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleSubmit = () => {
    // Logic to send project details to the server
    // Here, you can integrate your API endpoint
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProjectDetails((prev) => ({
          ...prev,
          image: reader.result
        }))
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar customClass='w-full z-50 absolute ' />

      {/* Form Section */}
      <div className="flex flex-col items-center justify-center p-8 space-y-8 w-full text-black mt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">

          {currentStep === 1 && (
            <form onSubmit={(e) => {
              e.preventDefault()
              setCurrentStep(2)
            }}>
              {/* Project Title */}
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="title">
                  Project Title:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  placeholder="Project Title"
                  value={projectDetails.title}
                  onChange={(e) => setProjectDetails((prev) => ({ ...prev, title: e.target.value }))}
                />
              </div>
              {/* Project Description */}
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="description">
                  Description:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="description"
                  placeholder="Describe the project"
                  value={projectDetails.description}
                  onChange={(e) => setProjectDetails((prev) => ({ ...prev, description: e.target.value }))}
                ></textarea>
              </div>
              {/* Project Category */}
              <div className="mb-4">
                <label className="block text-xl mb-2" htmlFor="category">
                  Category:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                  value={projectDetails.category}
                  onChange={(e) => setProjectDetails((prev) => ({ ...prev, category: e.target.value }))}
                >
                  <option value="Tech">Tech</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Next
              </button>
            </form>
          )}

          {currentStep === 2 && (
            <div className="flex flex-col items-center">
              <label className="block text-xl mb-2" htmlFor="imageUpload">
              </label>
              <input
                type="file"
                id="imageUpload"
                onChange={handleImageChange}
              />
              {projectDetails.image && (
                <img src={projectDetails.image} alt="Uploaded Preview" className="mt-4 rounded-md" />
              )}
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              >
                Submit Project
              </button>
            </div>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Previous
              </button>
            )}
          </div>

        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  )
}

export default CreateProjectPage
