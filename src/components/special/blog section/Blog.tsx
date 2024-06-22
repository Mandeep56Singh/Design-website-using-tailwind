import React from "react";
import { blog as Props } from "../../../types/blog";

import Button from "../../common/Button";

const Blog: React.FC<Props> = ({
  title,
  description,
  image,
  date,
  className
}) => {

  return (
    <div
      className={`mx-auto w-11/12 max-w-[382px] rounded-[62px] border border-[#E7E7E7] p-5 md:h-[521px] xsm:w-[300px] ${className} `}
    >
      <div
        className="h-72 rounded-tr-[44px] bg-no-repeat sm:rounded-none md:rounded-tr-[44px] xl:w-90 "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="relative left-5 top-56 grid h-12 w-32 place-content-center rounded-br-2xl rounded-tl-2xl rounded-tr-2xl bg-black-default opacity-50">
          <h1 className="font-Jost text-white">{title}</h1>
        </div>
      </div>
      <h1 className="mt-2 text-wrap font-DM-serif-Display text-2xl text-black-dark">
        {description}
      </h1>
      <div className="mt-3 flex items-center justify-between ">
        <div>
          <p className="font-Jost text-lg text-black-light sm:text-xlp">
            {date}
          </p>
        </div>
        <Button size="icon">
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default Blog;
