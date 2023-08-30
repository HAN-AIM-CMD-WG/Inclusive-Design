/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import Navbar from '../components/SecNavbar'
import { FaGithub } from 'react-icons/fa'

const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle the login logic here
  }

  const handleGithubLogin = () => {
    window.location.href = 'http://localhost:4000/auth/github'
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Your Navbar component here */}
      <Navbar customClass=" " />

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="w-96 p-6 rounded-lg bg-white shadow-xl">
          <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Login
          </h1>
          <button
            className="w-full p-2 bg-gray-800 text-white rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 mb-4 flex justify-center items-center"
            onClick={handleGithubLogin}
          >
            <FaGithub className="mr-2" /> Login with GitHub
          </button>
          <div className="mb-4 text-center">
            <span className="text-gray-900">Or continue with email</span>
          </div>
          {/* <h1 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Login
          </h1> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm mb-2 text-gray-900"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
                value={credentials.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm mb-2 text-gray-900"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                value={credentials.password}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full p-2 bg-pink-600 text-white rounded hover:bg-pink-700 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <span className="text-gray-900">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-500 underline">
                Sign up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
