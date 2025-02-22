import { useState } from "react";
import {Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          {/* <img src={myImage} alt="Logo" className="h-10 w-10 mr-2 rounded-full" /> */}
          <span className="text-xl font-bold">Code with Shubham</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/notes" className="hover:text-gray-400">Notes</Link>
          <Link to="/courses" className="hover:text-gray-400">Courses</Link>
          <Link to="about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact Me</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <span className="text-xl">✖</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center mt-4 space-y-2">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/notes" className="hover:text-gray-400">Notes</Link>
          <Link to="/courses" className="hover:text-gray-400">Courses</Link>
          <Link to="about" className="hover:text-gray-400">About</Link>
          <Link to="contact" className="hover:text-gray-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}
