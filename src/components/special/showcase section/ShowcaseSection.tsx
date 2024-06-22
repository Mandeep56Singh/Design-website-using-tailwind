import React from 'react'

const ShowcaseSection : React.FC = () => {
  return (
    <section className="   grid  grid-cols-1 gap-16 sm:w-3/4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-24  lg:w-11/12 lg:grid-cols-4 lg:grid-rows-1 lg:gap-0">
      <div className="text-center">
        <h1 className="text-nowrap font-DM-serif-Display text-7xlp text-orange-light">
          12
        </h1>
        <p className="xlwhitespace-nowrap mt-4 text-center font-Jost text-xlp text-black-light">
          Years Of Experiance
        </p>
      </div>
      <div className="text-center">
        <h1 className="textcenter text-nowrap font-DM-serif-Display text-7xlp text-orange-light">
          1074
        </h1>
        <p className="mt-4 font-Jost text-xlp text-black-light">
          Success Project
        </p>
      </div>
      <div className="text-center">
        <h1 className="textcenter text-nowrap font-DM-serif-Display text-7xlp text-orange-light">
          98
        </h1>
        <p className="mt-4 font-Jost text-xlp text-black-light">
          Active Project
        </p>
      </div>
      <div className="text-center">
        <h1 className="textcenter text-nowrap font-DM-serif-Display text-7xlp text-orange-light">
          583
        </h1>
        <p className="mt-4 font-Jost text-xlp text-black-light xl:whitespace-nowrap">
          Happy CUstomers
        </p>
      </div>
    </section>
  );
}

export default ShowcaseSection