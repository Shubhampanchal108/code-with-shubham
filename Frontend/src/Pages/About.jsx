import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="overflow-hidden bg-gradient-to-br from-gray-100 to-gray-300 dark:from-dark dark:to-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            {/* Image Grid */}
            <div className="px-5 w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                      alt=""
                      className="w-full rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
  
            {/* Text Content */}
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="p-5 mt-10 lg:mt-0">
                <span className="block mb-4 text-5xl font-semibold text-purple-600">
                  About Me
                </span>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                Hi there! My name is Shubham Panchal, a Computer Engineering student from the batch of "2021-2024" with the ID 210090823013. I'm the developer behind this website. As a passionate web developer with experience in the MERN stack and other web development technologies, I created this website to showcase my skills and provide a platform for students to learn and upskill their abilities.

Throughout my journey, I've worked on various projects that involve front-end and back-end development, ensuring a seamless user experience and efficient performance. I am always eager to explore new technologies and incorporate them into my projects to keep up with the ever-evolving web development landscape.

This website is a testament to my dedication to continuous learning and improvement. It includes tutorials, resources, and tools that can help fellow students and developers enhance their knowledge and skills in web development.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center py-3 text-lg font-medium text-white rounded-md px-7 bg-purple-600 hover:bg-purple-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default About;
