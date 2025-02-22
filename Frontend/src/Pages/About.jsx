import React from "react";

const About = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-gradient-to-br from-gray-100 to-gray-300 dark:from-dark dark:to-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            {/* Image Grid */}
            <div className="w-full px-4 lg:w-6/12">
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
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-5xl font-semibold text-purple-600">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-gray-900 dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by providing top-notch services.
                </h2>
                <p className="mb-5 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  A well-structured service not only improves user satisfaction but also enhances your brand value. 
                  We provide solutions that ensure smooth customer experiences.
                </p>
                <p className="mb-8 text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                  Secure a strong online presence with a reliable domain name that aligns perfectly with your business goals.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center py-3 text-lg font-medium text-white rounded-md px-7 bg-purple-600 hover:bg-purple-700 shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
  
};

export default About;
