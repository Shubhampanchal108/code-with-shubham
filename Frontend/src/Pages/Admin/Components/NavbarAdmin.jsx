import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";

const NavbarAdmin = () => {
  const Navigate = useNavigate()

  const Logout = async()=>{
    try {
      toast.success("Admin logout sucessfully.")
      localStorage.removeItem("token")

      setTimeout(()=>{
        Navigate('/')
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='navbar w-full border-b-2 border-gray-800 px-5 sm:px-12 py-4 text-lg flex justify-end items-center'>
      <p className="font-semibold mr-96">Admin Panel</p>
      <button onClick={Logout} className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300 ml-96">
        Logout
      </button>
      <ToastContainer/>
    </div>
  );
}

export default NavbarAdmin;
