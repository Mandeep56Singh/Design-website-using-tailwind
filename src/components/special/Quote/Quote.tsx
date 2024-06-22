import React from 'react'

const Quote : React.FC = () => {
  return (
    <div className="md:[520px] mx-auto mt-6 flex w-[320px] sm:mt-10 sm:w-[484px] md:mt-12 xl:mt-16">
      <div className="mx-2 h-24 border-l border-black-light" />
      <div>
        <p className="text-center font-DM-serif-text tracking-[0.5px] text-black-dark sm:tracking-[1.5px]">
          I like an interior that defies labeling. I don't really want someone
          to walk into a room and know that I did it
        </p>
        <h1 className="mt-2 text-center font-Jost text-black-light">
          BUNNY WILLIAMS
        </h1>
      </div>
      <div className="mx-2 h-24 border-l border-black-light sm:mx-2" />
    </div>
  );
}

export default Quote