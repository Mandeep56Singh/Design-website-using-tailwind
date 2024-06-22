import React from "react";
import Button from "../../common/Button";

const JionSection: React.FC = () => {
  return (
    <div
      className=" relative  mt-20 flex h-[430px] w-screen    flex-col items-center justify-center overflow-hidden bg-center bg-no-repeat sm:mt-28 sm:pt-20 md:mt-32 xl:mt-40 "
      style={{
        backgroundImage:
          "url('src/assets/images/backgrounds/Rectangle 10.png')",
      }}
    >
      <div className="grid h-[250px] w-11/12 place-content-center rounded-br-3xl rounded-tl-3xl rounded-tr-3xl bg-black-default bg-opacity-70 px-7 sm:w-[569px] sm:px-0 xsm:w-[300px]">
        <h1 className="font-DM-serif-Display text-2xl text-white sm:text-5xl">
          Wanna join the interno?
        </h1>
        <p className="mt-3 font-medium text-white sm:text-xlp">
          Join us and explore the artistry of interior design
        </p>
        <Button className="mt-6">
          Contact With Us <i className="fa-solid fa-arrow-right ml-3" />
        </Button>
      </div>
    </div>
  );
};

export default JionSection;
