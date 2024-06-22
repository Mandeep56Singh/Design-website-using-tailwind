import React from 'react'
type banner = {
    children : string,
    image : string
}
const Banner : React.FC<banner> = ({children,image}) => {
  return (
    <div className="banner mt-6 sm:mt-10 md:mt-12 xl:mt-16">
      <div className={`relative h-36 w-screen ${image} bg-center sm:h-44 md:h-56 xl:h-64 2xl:h-[356px]`}>
        <div className="absolute inset-0 h-full w-full bg-black-default bg-opacity-40 pt-16 sm:pt-20 md:pt-28 xl:pt-36 2xl:pt-44">
          <h1 className="text-center font-DM-serif-Display text-3xlp text-white sm:text-6xl md:text-6xlp xl:text-7xl">
            {children}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Banner