import React from "react";
import { service as props } from "../../../types/service";
import Button from "../../common/Button";

const ServiceSection: React.FC<props> = ({
  title,
  description,
}) => {
  return (
    <div className="mx-auto flex w-10/12 flex-col items-center justify-center gap-3 sm:mx-auto sm:w-9/12 md:w-8/12 md:gap-4 lg:w-[280px] xl:w-[360px] xsm:w-11/12">
      <h1 className="font-DM-serif-Display text-2xl">{title}</h1>
      <p className="mx-auto flex flex-wrap justify-center text-center text-lg text-black-light sm:text-xlp lg:text-lg xl:text-xlp">
        {description}
      </p>
      <Button variant="textual" size="size0" className="lg:mt-14">
        Read more <i className="fa-solid fa-arrow-right ml-3"></i>
      </Button>
  
    </div>
  );
};

export default ServiceSection;
