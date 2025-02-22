import React from "react";

const Card = ({image, CardDescription, CardTitle, btnHref, Button }) => {
  return (
    <>
    <div className="mx-8">
      <section className="bg-gray-2 dark:bg-dark">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <SingleCard
              image={image}
              CardTitle={CardTitle}
              titleHref="/#"
              btnHref={btnHref}
              CardDescription={CardDescription}
              Button={Button}
            />
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      <div className="shadow-2xl min-w-96 border bg-purple-50 overflow-hidden rounded-lg dark:bg-dark-2 dark:shadow-card transition-all duration-300 ease-in-out hover:shadow-3 hover:scale-105">
        {/* Image */}
        <img src={image} alt="Card Image" className="w-full max-h-60 object-cover rounded-t-lg" />
  
        {/* Content */}
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref || "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-purple-600 dark:text-white sm:text-[22px] transition-colors duration-300"
            >
              {CardTitle}
            </a>
          </h3>
          <p className="mb-7 text-base leading-relaxed text-gray-700 dark:text-gray-400">
            {CardDescription}
          </p>
  
          {Button && (
            <a
              href={btnHref || "#"}
              className="bg-gradient-to-r from-purple-600 to-blue-500 border inline-block rounded-3xl px-7 py-2 text-base font-medium text-white transition-all duration-300 ease-in-out hover:from-blue-500 hover:to-purple-600 hover:scale-105"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
    </>
  );
  
};
