import React from 'react'
import { testimonial as props} from '../../../types/testimonial';
const Testimonial : React.FC <props>= ({name,image,reviews,location,className}) => {
  return (
    <div  className={`mt-4 flex justify-center gap-5 `}>
      <div className=  {`h-[200px] w-[260px] rounded-[30px] bg-white px-4 pt-4 sm:h-[260px] sm:w-[320px] md:h-[220px] xl:m-0 xl:h-[300px] xl:w-[370px] xl:pl-9 ${className}`} >
        <div className="flex items-center xl:mt-6">
          <img
            src={image}
            alt="testsimonial1"
            className="size-16 rounded-full sm:size-20"
          />
          <div className="ml-3">
            <h1 className="font-DM-serif-Display text-xlp text-black-dark sm:text-2xlp">
             {name}
            </h1>
            <p className="-mt-1 font-Jost text-black-light sm:text-lg">
              {location.city},{location.country}
            </p>
          </div>
        </div> 
        <p className="text-sm mt-4 text-wrap text-black-light sm:text-base xl:mt-6  xl:text-lg xl:block font-semibold ">
         {reviews}
        </p>
      </div>
    </div>
  );
}

export default Testimonial