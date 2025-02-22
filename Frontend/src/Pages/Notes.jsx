import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import {MyContext} from '../Contexts/Main_Context'

const Notes = () => {
  const {getNotes, notes} = useContext(MyContext);

  useEffect(()=>{
    getNotes()
  }, [])

  return (
    <>
      <div className="bg-purple-600 text-white text-center p-6 m-4 sm:m-6 rounded-xl shadow-lg">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Download Notes by Shubham
        </p>
      </div>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {notes.map((item, index) => (
          <Card
            key={index}
            image={item.img}
            CardDescription={item.desc}
            CardTitle={item.title}
            btnHref={item.notesUrl}
            Button="Download"
          />
        ))}
      </div>
    </>
  );
  
}

export default Notes