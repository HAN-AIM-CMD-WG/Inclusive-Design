import React from 'react'
import { FaTrophy, FaGithub } from 'react-icons/fa'
import Navbar from '../components/SecNavbar'

const Profile = () => {
  const profile = {
    name: 'John Doe',
    image: 'https://randomuser.me/api/portraits/men/75.jpg',
    intro: 'A dedicated web developer with a passion for JavaScript...',
    github: 'https://github.com/johndoe'
  }
  const badges = ['Gold', 'Silver', 'Bronze']
  const skills = ['JavaScript', 'React', 'Tailwind CSS']
  const contributions = [
    { img: 'https://via.placeholder.com/150', title: 'Contribution 1', desc: 'Contribution description...' },
    { img: 'https://via.placeholder.com/150', title: 'Contribution 2', desc: 'Contribution description...' },
    { img: 'https://via.placeholder.com/150', title: 'Contribution 3', desc: 'Contribution description...' }
  ]
  const portfolio = [
    { img: 'https://via.placeholder.com/150', title: 'Item 1' },
    { img: 'https://via.placeholder.com/150', title: 'Item 2' },
    { img: 'https://via.placeholder.com/150', title: 'Item 3' }
  ]

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-start min-h-screen bg-gray-200">

        <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-8">
            <div className="flex items-start space-x-6">
                <img className="w-32 h-32 object-cover rounded-full border-4 border-indigo-500 shadow" src={profile.image} alt={profile.name} />
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-gray-700">{profile.name}</h1>
                    <p className="text-gray-500 mt-2">{profile.intro}</p>
                    <a className="mt-2 text-indigo-500 hover:text-indigo-700 flex items-center space-x-2" href={profile.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span>GitHub</span>
                        </a>
                        </div>
                        </div>
                        <hr className="my-6" />
            <h2 className="text-gray-700 font-semibold text-xl">Badges</h2>
            <div className="mt-4 flex justify-center space-x-2">
                {badges.map((badge, index) => (
                    <div key={index} className="inline-flex items-center bg-indigo-500 text-white rounded-full p-2 shadow-lg">
                        <FaTrophy className="mr-1"/>
                        <span>{badge}</span>
                    </div>
                ))}
            </div>
            <hr className="my-6" />
            <h2 className="text-gray-700 font-semibold text-xl">Skills</h2>
            <div className="mt-4 flex flex-wrap justify-center">
                {skills.map((skill, index) => (
                    <span key={index} className="m-1 bg-indigo-500 text-white rounded px-3 py-1 hover:bg-indigo-700 transition duration-200 cursor-pointer">{skill}</span>
                ))}
            </div>
            <hr className="my-6" />
            <h2 className="text-gray-700 font-semibold text-xl">Contributions to Projects</h2>
            <div className="mt-4 space-y-4">
                {contributions.map((contribution, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <img className="w-16 h-16 object-cover rounded-lg" src={contribution.img} alt={contribution.title} />
                        <div>
                            <h3 className="font-medium text-gray-700">{contribution.title}</h3>
                            <p className="text-sm text-gray-500">{contribution.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-6" />
            <h2 className="text-gray-700 font-semibold text-xl">Portfolio</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolio.map((item, index) => (
                    <div key={index} className="overflow-hidden border-2 border-indigo-200 rounded-lg hover:shadow-2xl transition duration-200 cursor-pointer relative group">
                        <img className="object-cover h-full w-full transition duration-200 transform group-hover:scale-105" src={item.img} alt={item.title} />
                        <div className="bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200 text-white text-lg">
                            {item.title}
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-6" />
            <div className="mt-6 flex justify-center">
                <button className="bg-indigo-500 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-200">Hire Me</button>
            </div>
        </div>
        </div>
    </>

  )
}

export default Profile
