import React from 'react'
import Logo from './Logo'
const PreNav = () => {
  return (
    <>
      <nav className="bg-white shadow-md py-4">
      <div className="container flex items-center">
        {/* Logo */}
        <div className="text-gray-800 text-2xl font-bold mr-4">
          <Logo />
        </div>
        {/* GST Number */}
        <div className="text-gray-600 ml-auto -mr-52">
          GST Number: 1234567890
        </div>
      </div>
    </nav>
    </>
  )
}

export default PreNav