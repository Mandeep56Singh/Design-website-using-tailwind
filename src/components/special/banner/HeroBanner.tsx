import React from "react";
import Button from "../../common/Button";

const HeroBanner: React.FC = () => {
  return (
    <section className="relative mt-4 h-[600px] max-w-[1210px] w-screen bg-hero-image bg-top bg-no-repeat sm:mt-8 sm:h-[580px] md:mt-24 md:h-[758px] md:bg-top lg:mx-auto   lg:bg-left-top  xl:mt-40">
      {/* Overlay */}
      <div className="sm:pt-30 absolute inset-0 flex h-full w-screen max-w-[1210px] flex-col items-center justify-center rounded-none bg-black-default bg-opacity-40 pt-24 sm:items-start sm:rounded-none md:h-[470px] md:items-center md:rounded-none md:pl-12 md:pt-4 lg:rounded-tl-[100px] xsm:pt-10">
        {/* Content */}
        <h1 className="sm:w-12/12 mx-auto w-11/12 text-center font-DM-serif-Display text-3xlp leading-[3.125rem] text-white sm:text-5xlp md:ml-0 md:mt-6 md:w-9/12 md:text-start lg:text-6xlp xsm:text-4xl">
          Let's make your home beautiful together
        </h1>
        <p className="mx-auto mt-4 w-9/12 text-center font-Inter font-medium text-white sm:mt-6 sm:w-8/12 sm:text-xlp md:ml-0 md:w-9/12 md:text-start md:text-xlp xl:mt-2">
          Elevate Your Space: <br />
          Where Inspiration Meets Design
        </p>
        <Button className="mx-auto  mt-16  md:ml-0  xl:mt-8 xsm:mt-6">
          Get started <i className="fa-solid fa-arrow-right ml-3" />
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
