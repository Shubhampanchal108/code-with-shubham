import React, { useEffect, useState } from 'react'
import { assets } from '../../../assets/admin-assets/assets'
import axios from 'axios';
import {url} from '../../../App'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';

const AddNotes = ({token}) => {
 
  const [title , setTitle] = useState('');
  const [img, setImg] = useState(false);
  const [desc, setDesc] = useState('');
  const [notesUrl, setNotesUrl] = useState('');
  const [loading, setLoading] = useState(false)

  const onSubmitHandler = async (e)=>{
    e.preventDefault();

    try {

      setLoading(true);

      const formData = new FormData();
      formData.append('title', title)
      formData.append('img', img);
      formData.append('desc', desc);
      formData.append('notesUrl', notesUrl);
      
      const response = await axios.post(`${url}/api/admin/add_notes`, formData)
      
      if (response){
        toast.success("Notes Added Sucessfully")
        console.log(response)
      }

      setTitle("")
      setDesc("")
      setImg(false)
      setNotesUrl("")
      
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return loading ? (
    <>
    <div className="grid place-items-center min-h-[80vh]">
      <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-600 rounded-full animate-spin"></div>
    </div>
    <ToastContainer/>
    </>
  ) : (
    <>
    <ToastContainer/>
    <form onSubmit={onSubmitHandler} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className="flex gap-8">

        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input onChange={(e)=>setImg(e.target.files[0])} type="file" id='image' accept='image/*' hidden />
          <label htmlFor="image">
            <img src={img ? URL.createObjectURL(img) : assets.upload_area} className='w-24 cursor-pointer' alt="" />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Title</p>
        <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Notes Description</p>
        <input onChange={(e)=>setDesc(e.target.value)} value={desc} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
      </div>

      <div className="flex flex-col gap-2.5">
        <p>Notes Url</p>
        <input onChange={(e)=>setNotesUrl(e.target.value)} value={notesUrl} type="text" className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]' placeholder='Type Here' required />
      </div>


      <button type='submit' className='text-base font-semibold text-black py-2.5 px-8 cursor-pointer bg-green-600 rounded'>ADD NOTES</button>
    </form>
    </>
  )
}

export default AddNotes