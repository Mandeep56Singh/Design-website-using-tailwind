import React from "react";

interface WorkExampleProps {
  number: string;
  image: string;
  title: string;
  description: string;
  reverse?: boolean;
}

const WorkExample: React.FC<WorkExampleProps> = ({
  number,
  image,
  title,
  description,
  reverse = false,
}) => {
  return (
    <div
      className={`mx-1 mt-8 flex flex-col justify-center gap-4 overflow-hidden ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:mt-16 sm:gap-4 md:mt-20 md:gap-20 lg:mt-44 lg:gap-24`}
    >
      <img
        src={image}
        className="hidden w-[250px] object-contain sm:block md:w-[300px] lg:w-[480px] xl:h-[485px] xl:w-[625px]"
        alt={`${title} illustration`}
      />
      <div
        className="bg-image h-[120px] w-screen bg-orange-light bg-cover bg-center bg-no-repeat sm:hidden"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="h-[120px] w-full bg-black-default bg-opacity-30">
          <h1 className="relative left-2/3 font-DM-serif-Display text-[90px] text-orange-bright">
            {number}
          </h1>
        </div>
      </div>
      <div className="mx-auto w-[320px] rounded-3xl bg-transparent p-4 sm:mx-0 xsm:w-[280px] xsm:pl-2">
        <h1
          className={`relative ${reverse ? "left-0" : "left-3/4"} hidden font-DM-serif-Display text-[90px] text-orange-bright sm:block sm:text-5xl md:text-7xl lg:text-[90px]`}
        >
          {number}
        </h1>
        <div className="mt-2 sm:mt-4 lg:mt-24 xl:mt-[150px]">
          <h1 className="font-DM-serif-Display text-2xlp text-black-dark md:text-4xl">
            {title}
          </h1>
          <p className="font-Jost text-lg text-black-light sm:text-xl md:text-xlp">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExample;
