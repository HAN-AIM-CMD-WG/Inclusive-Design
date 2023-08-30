/* eslint-disable react/prop-types */
import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-opacity-50 bg-black">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl w-full relative">
            <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-500">
              &times;
            </button>
            {children}
          </div>
        </div>
      </div>
  )
}

export default Modal
