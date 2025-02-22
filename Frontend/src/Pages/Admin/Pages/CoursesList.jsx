import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { MyContext } from '../../../Contexts/Main_Context'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import { url } from '../../../App'


const CoursesList = () => {
  const [data, setData] = useState([]);
  const { getCourses, course } = useContext(MyContext);
  
    useEffect(() => {
      getCourses()
    }, []);

  const delteCourses = async(id)=>{
    try {
      const response = await axios.delete(`${url}/api/admin/delete_course/${id}`)

      if (response){
        getCourses()
        toast.success("Delete Sucessfully.")
        console.log("Done")
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <p >All Courses List</p>
      <br/>
      <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
        <b>Image</b>
        <b>Name</b>
        <b>Desc</b>
        <b>URL</b>
        <b>Delete</b>
      </div>
      <div className="">
        {course.map((item, index)=>{
          return(
            <div className="grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5" key={index}>
              <img src={item.img} className='w-12' alt="" />
              <p>{item.title}</p>
              <p>{item.desc.slice(0, 60)}</p>
              <a className='text-blue-700 underline' href={item.courseUrl}>Visit Course</a>
              <p className='cursor-pointer' onClick={()=>delteCourses(item._id)}>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CoursesList