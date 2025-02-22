import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/admin-assets/assets'
import axios from 'axios';
import {url} from '../../../App'
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const AddCourses = ({token}) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('');
  const [courseUrl, setCourseUrl] = useState('')
  const [loading, setLoading] = useState(false);
  const [img , setImg] = useState(false)
  

  // Submit Form
  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    
    try {

      setLoading(true);

      const formData = new FormData();
      formData.append('title', title)
      formData.append('img', img);
      formData.append('desc', desc);
      formData.append('courseUrl', courseUrl);
      
      const response = await axios.post(`${url}/api/admin/add_course`, formData)
      
      if (response){
        toast.success("Course added sucessfully")
      }

      setTitle("")
      setImg(false)
      setDesc("")
      setCourseUrl("")
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return loading ? (
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
    </div>
  ) : (
    <>
    <ToastContainer/>
   <form onSubmit={onSubmitHandler} className="flex flex-col items-start gap-6 text-gray-700">
  {/* Image Upload Section */}
  <div className="flex flex-col gap-4">
    <label className="font-medium">Upload Image</label>
    <input onChange={(e) => setImg(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
    <label htmlFor="image" className="cursor-pointer">
      <img
        src={img ? URL.createObjectURL(img) : assets.upload_area}
        className="w-24 h-24 object-cover rounded-lg border border-gray-300 hover:opacity-80 transition duration-200"
        alt="Uploaded Preview"
      />
    </label>
  </div>

  {/* Title Input */}
  <div className="flex flex-col gap-2">
    <label className="font-medium" htmlFor="title">Title</label>
    <input
      id="title"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      type="text"
      className="bg-white outline-none border-2 border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-300 p-2.5 rounded-lg w-[max(40vw,250px)] transition duration-200"
      placeholder="Enter title"
      required
    />
  </div>

  {/* Course Description */}
  <div className="flex flex-col gap-2">
    <label className="font-medium" htmlFor="description">Course Description</label>
    <textarea
      id="description"
      onChange={(e) => setDesc(e.target.value)}
      value={desc}
      className="bg-white outline-none border-2 border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-300 p-2.5 rounded-lg w-[max(40vw,250px)] h-24 resize-none transition duration-200"
      placeholder="Enter course description"
      required
    />
  </div>

  {/* Course URL */}
  <div className="flex flex-col gap-2">
    <label className="font-medium" htmlFor="courseUrl">Course URL</label>
    <input
      id="courseUrl"
      onChange={(e) => setCourseUrl(e.target.value)}
      value={courseUrl}
      type="url"
      className="bg-white outline-none border-2 border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-300 p-2.5 rounded-lg w-[max(40vw,250px)] transition duration-200"
      placeholder="Enter course URL"
      required
    />
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    className="text-base font-semibold text-white py-3 px-8 bg-green-600 rounded-lg hover:bg-green-700 active:scale-95 transition duration-200"
  >
    ADD COURSE
  </button>
</form>

    
    </>
  )
}

export default AddCourses