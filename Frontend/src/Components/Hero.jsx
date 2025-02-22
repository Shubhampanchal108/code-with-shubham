import React from 'react'
import myImage from '../assets/Images/Shubham.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 text-white">
      {/* Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Welcome to <span className="text-yellow-300">Code with Shubham</span>
        </h1>
        <p className="mb-8 mt-5 text-lg opacity-90">
          Build amazing things with our cutting-edge solutions. Let's make your vision a reality.
        </p>
        <Link
          to="/notes"
          className="mt-10 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Download Notes
        </Link>
      </div>
  
      {/* Image */}
      <div className="w-full md:w-1/3 md:h-[350px] flex justify-center">
        <img
          src={myImage}
          alt="Hero"
          className="shadow-2xl rounded-full border-4 border-white hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </section>
  );
  
}

export default Hero