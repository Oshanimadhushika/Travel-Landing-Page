import React from 'react'

const Hero = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center'>
      <h1 className='text-pink-500 text-4xl font-bold mb-6'>Hero Section</h1>
      <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-pink-500/50 transition-all duration-300'>
        Get Started
      </button>
    </div>
  )
}

export default Hero
