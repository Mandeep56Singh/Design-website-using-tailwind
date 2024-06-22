import React from "react";
import Button from "../../common/Button";

interface SectionProps {
  title: string;
  description: string;
  imgSrc: string;
  buttonText: string;
  reverse?: boolean;
}

const WhyUsItem: React.FC<SectionProps> = ({
  title,
  description,
  imgSrc,
  buttonText,
  reverse,
}) => {
  return (
    <div
      className={`relative  flex h-[300px] ${reverse ? "flex-row-reverse " : "flex-row "} justify-center xl:mx-auto xl:mt-40 xl:flex xl:w-[1280px]`}
    >
      <div>
        <img
          src={imgSrc}
          alt="image"
          className="relative mx-auto  w-11/12 xl:mx-0 lg:block md:w-[340px] xl:h-[500px] xl:w-[700px]"
        />
      </div>
      <div className="xl:mr-8 xl:mt-10 xl:w-[500px] ">
        <div
          className={`flex flex-col`}
        >
          <h1 className="  mt-12 text-center font-DM-serif-Display text-3xl text-black-dark sm:text-3xlp md:mt-20 md:text-5xl xl:mr-40 xl:text-start">
            {title}
          </h1>
        </div>
        <p className="md:xlp mx-auto mt-6 w-[300px] text-center font-Jost text-lg text-black-light sm:w-[400px] md:w-[300px] sm:text-xl xl:ml-12 xl:w-[445px] xl:text-start xl:text-xlp">
          {description}
        </p>
       <Button color="orange" onClick={() => alert(`don't click`)}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default WhyUsItem;
