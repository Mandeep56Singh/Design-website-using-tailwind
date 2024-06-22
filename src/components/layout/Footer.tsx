import React from 'react'

const Footer : React.FC = () => {
  return (
    <>
      <div className="mt-12 md:mt-20 xl:mt-60">
        <div className="gap-24 xl:mx-auto xl:flex xl:w-[1210px]">
          <div className="mx-auto w-[300px] sm:w-[560px] md:w-[680px] xl:ml-0">
            <div className="flex gap-1">
              <img
                src="src/assets/images/logos/Vector.png"
                alt="logo"
                className="size-6 sm:size-8 md:size-12 xl:size-10"
              />
              <h1 className="ml-2 font-DM-serif-Display text-xlp text-black-light sm:text-2xlp md:mt-3 md:text-4xl xl:mt-0 xl:text-[40px]">
                SELHONO
              </h1>
            </div>
            <p className="mt-2 w-[300px] text-wrap text-left font-Jost text-xl text-black-light sm:w-[560px] md:mt-6 md:w-[620px] md:text-2xl xl:w-[400px]">
              Join our vibrant community of interior design enthusiasts!
              <br className="" />
              Follow us on Facebook, Instagram, LinkedIn, and Twitter for daily
              inspiration
            </p>
            <div className="flex gap-4 sm:mt-4">
              <div className="text-2xlp text-black-dark sm:text-4xl">
                <i className="fa-brands fa-square-facebook" />
              </div>
              <div className="text-2xlp text-black-dark sm:text-4xl">
                <i className="fa-brands fa-square-x-twitter" />
              </div>
              <div className="text-2xlp text-black-dark sm:text-4xl">
                <i className="fa-brands fa-linkedin" />
              </div>
              <div className="text-2xlp text-black-dark sm:text-4xl">
                <i className="fa-brands fa-square-instagram" />
              </div>
            </div>
          </div>
          <div className="hidden text-nowrap xl:block">
            <h1 className="font-DM-serif-Display text-2xl text-black-dark">
              Pages
            </h1>
            <p className="text-xlp leading-[4rem] text-black-light">About Us</p>
            <p className="text-xlp leading-[4rem] text-black-light">
              Our Projects
            </p>
            <p className="text-xlp leading-[4rem] text-black-light">Our Team</p>
            <p className="text-xlp leading-[4rem] text-black-light">
              Contact Us
            </p>
            <p className="text-xlp leading-[4rem] text-black-light">Services</p>
          </div>
          <div className="hidden text-nowrap xl:block">
            <h1 className="font-DM-serif-Display text-2xl text-black-dark">
              Services
            </h1>
            <p className="text-xlp leading-[4rem] text-black-light">Kitchan</p>
            <p className="text-xlp leading-[4rem] text-black-light">
              Living Area
            </p>
            <p className="text-xlp leading-[4rem] text-black-light">Bathroom</p>
            <p className="text-xlp leading-[4rem] text-black-light">
              Dinning Hall
            </p>
            <p className="text-xlp leading-[4rem] text-black-light">Bedroom</p>
          </div>
          <div className="mx-auto mt-10 w-[300px] sm:w-[560px] md:w-[680px] xl:m-0">
            <h1 className="font-DM-serif-Display text-2xl text-black-dark md:text-3xl xl:text-2xl">
              Contact
            </h1>
            <p className="mt-[1rem] whitespace-normal text-xl text-black-light sm:text-xlp md:text-2xl xl:text-xlp xl:leading-8">
              55 East Birchwood Ave. <br className="sm:hidden" />
              Brooklyn, New York 11201
            </p>
            <p className="text-xl text-black-light md:text-2xl xl:text-xlp xl:leading-[4rem]">
              contact@selhono.com
            </p>
            <p className="text-xl leading-[4rem] text-black-light sm:text-xlp">
              (123) 456 - 7890
            </p>
          </div>
        </div>
        <p className="mb-8 mt-12 text-center font-Jost text-black-light sm:mt-20 sm:text-xlp md:mt-24 xl:mt-40">
          Copyright © SELHONO
        </p>
      </div>
      `;
    </>
  );
}
export default Footer