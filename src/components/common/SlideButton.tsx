import React from 'react'
type props = {
    direction : 'left' | 'right';
}
const SlideButton : React.FC <props> = ({direction}) => {
  return (
    <>
      {direction === "left" ? (
        <button
          id="prev-slide"
          className="slide-button absolute -left-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center border-none text-3xl text-white outline-none hover:opacity-50 sm:size-12 sm:rounded-full sm:text-5xl md:hidden xsm:text-2xlp"
        >
          <i className="fa-solid fa-chevron-left"></i>
        </button>
      ) : (
        <button
          id="next-slide"
          className="slide-button absolute -right-4 top-1/2 z-10 flex -translate-y-1/2 cursor-pointer items-center justify-center border-none text-3xl text-white outline-none hover:opacity-50 sm:size-12 sm:rounded-full sm:text-5xl md:hidden xsm:text-2xlp"
        >
          <i className ="fa-solid fa-chevron-right"></i>
        </button>
      )}
    </>
  );
}

export default SlideButton