import React from 'react'
import Button from '../../common/Button';
const CallUsSection : React.FC = () => {
  return (
    <section className=" margin-section  mx-auto  flex w-screen lg:w-[1210px]  xl:flex-row  ">
      {/* Left image */}
      <div className="relative z-30 h-[590px] w-screen bg-workFrame1 bg-left-bottom bg-no-repeat sm:w-[550px] sm:bg-contain sm:bg-left-top md:w-[653px] md:bg-auto xl:h-[700px]">
        <div className="absolute inset-0 h-full w-screen bg-black-default bg-opacity-40 pl-8 pt-20 sm:w-[550px] sm:rounded-tr-[340px] sm:pt-16 md:w-[653px] md:rounded-tr-[400px] xl:rounded-tr-[400px]">
          <h1 className="w-[280px] font-DM-serif-Display text-3xlp text-white sm:w-8/12 sm:text-5xl sm:leading-[3.625rem] md:w-7/12 md:text-5xlp">
            We create art for Modern life
          </h1>
          <p className="mt-5 w-[300px] text-left font-Jost text-xlp font-medium text-white sm:mt-4 sm:w-8/12 sm:text-2xl xsm:mt-4 xsm:text-lg">
            Home transformation starts here. Schedule a consultation.
          </p>
          {/* call icon */}
          <div className="mt-10 flex items-center sm:mt-12">
            <div className="grid size-20 place-content-center rounded-full bg-white xl:size-[93px]">
              <img src="src/assets/images/icons/Call.svg" alt="call" />
            </div>
            <div className="ml-4">
              <h1 className="font-Jost text-2xl font-bold text-white sm:text-2xlp">
                012345678
              </h1>
              <h1 className="font-Jost text-xlp font-medium text-white">
                Call Us Anytime
              </h1>
            </div>
          </div>
          {/* button */}
          <Button className="mt-8">
            Get Free estimate <i className="fa-solid fa-arrow-right ml-3" />
          </Button>
        </div>
      </div>
      {/* right image */}
      
      
    </section>
  );
}

export default CallUsSection