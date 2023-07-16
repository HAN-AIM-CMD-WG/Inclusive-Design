import React from 'react'
import { FaTrophy } from 'react-icons/fa'
import Navbar from '../components/SecNavbar'

const Profile = () => {
  const profile = {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    intro: 'A dedicated web developer with a passion for JavaScript...'
  }
  const badges = ['Gold', 'Silver', 'Bronze']
  const skills = ['JavaScript', 'React', 'Tailwind CSS']
  const contributions = [
    { img: 'https://via.placeholder.com/150', title: 'Contribution 1', desc: 'Contribution description...' },
    { img: 'https://via.placeholder.com/150', title: 'Contribution 2', desc: 'Contribution description...' },
    { img: 'https://via.placeholder.com/150', title: 'Contribution 3', desc: 'Contribution description...' }
  ]
  const portfolio = ['Item 1', 'Item 2', 'Item 3']

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-gray-200 p-4">
        <div className="w-full md:w-1/3 p-8 bg-white rounded shadow-lg mt-0">
          <div className="flex justify-center">
            <img className="w-24 h-24 object-cover rounded-full border-2 border-gray-300" src={profile.image} alt={profile.name} />
          </div>
          <h1 className="mt-4 text-center text-xl font-semibold">{profile.name}</h1>
          <p className="mt-2 text-center text-sm text-gray-600">{profile.intro}</p>
          <h2 className="mt-6 text-lg font-semibold">Badges</h2>
          <div className="mt-4 flex justify-center space-x-4">
            {badges.map((badge, index) => (
              <div key={index} className="p-2 bg-pink-700 text-white rounded-full flex items-center">
                <FaTrophy />
                <span className="ml-1">{badge}</span>
              </div>
            ))}
          </div>
          <h2 className="mt-6 text-lg font-semibold">Skills</h2>
          <div className="mt-2 flex flex-wrap justify-center space-x-4">
            {skills.map((skill, index) => (
              <span key={index} className="m-1 bg-pink-700 text-white rounded px-2 py-1 hover:bg-pink-600 transition duration-200 cursor-pointer">{skill}</span>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/3 p-8 ml-0 md:ml-4 bg-white rounded shadow-lg mt-4 md:mt-0">
          <h2 className="text-lg font-semibold">Contributions</h2>
          <div className="mt-2 space-y-4">
            {contributions.map((contribution, index) => (
              <div key={index} className="flex items-start">
                <img className="w-16 h-16 object-cover mr-4" src={contribution.img} alt={contribution.title} />
                <div>
                  <h3 className="font-medium">{contribution.title}</h3>
                  <p className="text-sm text-gray-600">{contribution.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mt-6 text-lg font-semibold">Portfolio</h2>
          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.map((item, index) => (
              <div key={index} className="p-4 border border-gray-300 rounded shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
