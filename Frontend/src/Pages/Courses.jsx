import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { MyContext } from "../Contexts/Main_Context";

const Courses = () => {
  const { getCourses, course } = useContext(MyContext);

  useEffect(() => {
    getCourses()
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-center p-8 m-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105">
  <p className="text-4xl font-semibold tracking-wide">Recommended Courses</p>
</div>


      <div className="grid grid-cols-3 gap-4 p-4">
        {(
          course.map((item, index) => (
            <Card
              key={index}
              image={item.img}
              CardDescription={item.desc}
              CardTitle={item.title}
              btnHref={item.courseUrl}
              Button="Watch Now"
            />
          ))
        )}
      </div>
    </>
  );
};

export default Courses;
