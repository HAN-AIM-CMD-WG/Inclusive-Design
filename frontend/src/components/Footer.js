import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10 pt-10">
      <div className="m-auto text-gray-400 flex flex-wrap justify-center">
        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Links
          </div>

          {/* Links */}
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Home
          </a>
          <a href="/services" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Services
          </a>
          <a href="/about" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About Us
          </a>
          <a href="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact Us
          </a>
          {/* End Links */}
        </div>

        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact
          </div>

          {/* Contact */}
          <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            123 Street, City
          </p>
          <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            email@example.com
          </p>
          <p className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            +1 (123) 456-7890
          </p>
          {/* End Contact */}
        </div>

        <div className="p-5 w-48 ">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Social Media
          </div>

          {/* Social Links */}
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Facebook
          </a>
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Twitter
          </a>
          <a href="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Instagram
          </a>
          {/* End Social Links */}
        </div>
      </div>

      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © {new Date().getFullYear()} Next Generation Internet. All rights reserved.
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
