import React from "react";

type ServiceWrapperProps = {
  children: React.ReactNode;
}

const ServiceWrapper: React.FC<ServiceWrapperProps> = ({ children }) => {
  return (
    <section className="margin-section mx-auto flex max-w-[1210px] flex-col items-center gap-14 sm:gap-16  md:gap-24 lg:w-11/12 lg:flex-row lg:justify-center lg:gap-2 xl:w-[1210px] xsm:w-screen xsm:gap-14">
      {children}
    </section>
  );
};

export default ServiceWrapper;
