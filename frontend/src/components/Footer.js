import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center px-4 py-8 text-center bg-gray-800 text-gray-400">
      <p>© {new Date().getFullYear()} Next Generation Internet. All rights reserved.</p>
    </footer>
  )
}

export default Footer
