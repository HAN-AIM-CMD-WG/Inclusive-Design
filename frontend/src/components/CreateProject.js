import React, { useState } from 'react'
import Navbar from '../components/SecNavbar'
import Footer from '../components/Footer'
import '../css/home.css'

const CreateProjectPage = () => {
  const [projectDetails, setProjectDetails] = useState({
    title: '',
    description: '',
    category: '',
    image: null,
    membersNeeded: 1,
    expertise: ''
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const handleSubmit = () => {
    // Your submit logic here
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
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Navbar customClass=' ' />

            <div className="flex flex-col items-center justify-center p-8 space-y-8 w-full mt-10">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl mt-4 space-y-6">
                    <h2 className="text-2xl font-semibold mb-6">Create a New Project</h2>

                    {/* Progress Bar */}
                    <div className="h-4 rounded bg-gray-200 mb-6">
                        <div style={{ width: `${(currentStep / totalSteps) * 100}%` }} className="h-full bg-pink-700 rounded"></div>
                    </div>

                    <form onSubmit={(e) => {
                      e.preventDefault()
                      if (currentStep < totalSteps) {
                        setCurrentStep(currentStep + 1)
                      }
                    }}>

                        {currentStep === 1 && (
                            <>
                                {/* Project Title */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="title">Project Title:</label>
                                    <input
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        id="title"
                                        type="text"
                                        placeholder="Project Title"
                                        value={projectDetails.title}
                                        onChange={(e) => setProjectDetails((prev) => ({ ...prev, title: e.target.value }))}
                                    />
                                </div>

                                {/* Project Description */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="description">Description:</label>
                                    <textarea
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        id="description"
                                        rows="4"
                                        placeholder="Describe the project"
                                        value={projectDetails.description}
                                        onChange={(e) => setProjectDetails((prev) => ({ ...prev, description: e.target.value }))}
                                    />
                                </div>

                                {/* Project Category */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="category">Category:</label>
                                    <select
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                        id="category"
                                        value={projectDetails.category}
                                        onChange={(e) => setProjectDetails((prev) => ({ ...prev, category: e.target.value }))}
                                    >
                                        <option value="Tech">Tech</option>
                                        <option value="Health">Health</option>
                                        <option value="Education">Education</option>
                                    </select>
                                </div>
                            </>
                        )}

                        {currentStep === 2 && (
                            <>
                                {/* Image Upload */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="imageUpload">Upload Image:</label>
                                    <input
                                        type="file"
                                        id="imageUpload"
                                        onChange={handleImageChange}
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {projectDetails.image && (
                                    <div className="mb-6">
                                        <img src={projectDetails.image} alt="Uploaded Preview" className="w-full rounded-md shadow" />
                                    </div>
                                )}
                            </>
                        )}

                        {currentStep === 3 && (
                            <>
                                {/* Members Needed */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="members">Members Needed:</label>
                                    <input
                                        type="number"
                                        min="1"
                                        id="members"
                                        value={projectDetails.membersNeeded}
                                        onChange={(e) => setProjectDetails((prev) => ({ ...prev, membersNeeded: parseInt(e.target.value) }))}
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Expertise */}
                                <div className="mb-6">
                                    <label className="block text-lg mb-2" htmlFor="expertise">Expertise Needed:</label>
                                    <input
                                        type="text"
                                        id="expertise"
                                        value={projectDetails.expertise}
                                        onChange={(e) => setProjectDetails((prev) => ({ ...prev, expertise: e.target.value }))}
                                        className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    />
                                </div>
                            </>
                        )}

                        {/* Navigation buttons */}
                        <div className="flex justify-between">
                            {currentStep > 1 && (
                                <button
                                    type="button"
                                    onClick={() => setCurrentStep(currentStep - 1)}
                                    className="w-1/3 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < totalSteps
                              ? (
                                <button
                                    type="submit"
                                    className="w-1/3 bg-pink-700 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Next
                                </button>
                                )
                              : (
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="w-1/3 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                                )}
                        </div>
                    </form>
                </div>
            </div>

            <Footer className="mt-auto" />
        </div>
  )
}

export default CreateProjectPage
