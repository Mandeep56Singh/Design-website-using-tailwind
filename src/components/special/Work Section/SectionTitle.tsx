import React from "react";

interface SectionTitleProps {
  title: string;
  description: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, description }) => {
  return (
    <div className="margin-section mx-auto text-center">
      <h1 className="text-nowrap font-DM-serif-Display text-3xl text-black-dark sm:text-3xlp md:text-5xl xl:text-6xl xsm:text-2xl">
        {title}
      </h1>
      <p className="mx-3 mt-2 max-w-[740px] font-Jost text-lg font-medium text-black-light sm:mx-auto sm:w-[600px] sm:text-xlp md:w-[640px] xl:text-2xlp">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
