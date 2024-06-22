import React from 'react'

const CompaniesSection : React.FC = () => {
  return (
    <section className=" margin-section grid grid-rows-4 gap-9 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 ">
      <img
        src="src/assets/images/icons/companyLogo1.png"
        alt="companyLogo1"
        className="mx-auto object-contain"
      />
      <img
        src="src/assets/images/icons/companyLogo2.png"
        alt="companyLogo2"
        className="mx-auto object-contain"
      />
      <img
        src="src/assets/images/icons/companyLogo3.png"
        alt="companyLogo3"
        className="mx-auto object-contain"
      />
      <img
        src="src/assets/images/icons/companyLogo4.png"
        alt="companyLogo4"
        className="mx-auto object-contain sm:mt-0"
      />
    </section>
  );
}

export default CompaniesSection