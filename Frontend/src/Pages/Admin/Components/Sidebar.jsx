import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../../assets/admin-assets/assets'
import adminImg from '../../../assets/Images/Shubham.jpg'
const Sidebar = () => {
  return (
    
    <div className='bg-[#044918] min-h-screen pl-[4vw] w-64'>
        <img src={adminImg} className='border-2 shadow-2xl mt-5 ml-8 h-24 w-24 rounded-full hover:border-gray-500' alt="" />   
        <p className='text-3xl mt-3 ml-10 text-white' alt="">Admin</p>
        
        <div className="flex flex-col gap-5 mt-10">
            <NavLink to='/admin' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.add_song} alt="" className='w-5' />
                <p className='hidden sm:block'>Dashboard</p>
            </NavLink>

            <NavLink to='/admin/addnote' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.song_icon} alt="" className='w-5' />
                <p className='hidden sm:block'>Add Notes</p>
            </NavLink>

            <NavLink to='/admin/addcourse' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.add_album} alt="" className='w-5' />
                <p className='hidden sm:block'>Add Courses</p>
            </NavLink>

            <NavLink to='/admin/notes-list' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.add_album} alt="" className='w-5' />
                <p className='hidden sm:block'>Notes List</p>
            </NavLink>

            <NavLink to='/admin/list-course' className="flex items-center gap-2.5 text-gray-800 bg-white border border-black p-2 pr-[max(8vw, 10px)] drop-shadow-[-4px_4px_#00FF5B] text-sm font-medium">
                <img src={assets.album_icon} alt="" className='w-5' />
                <p className='hidden sm:block'>Courses List</p>
            </NavLink>
           
        </div>
    </div>
  )
}

export default Sidebar