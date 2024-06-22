import React from "react";
import ServiceSection from "./ServiceSection";
import ServiceWrapper from "./ServiceWrapper";
const Services : React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <ServiceWrapper>
        <ServiceSection
          title="Project Plan"
          description="Our interior design company offers bespoke solutions tailored to elevate every environment."
        />
        <ServiceSection
          title="Interior Work"
          description="Elevating spaces with innovative design, reflects your unique style and enhance functionality."
        />
        <ServiceSection
          title="Realization"
          description="Crafting spaces that inspire and captivate, Realization brings your interior dreams to life."
        />
      </ServiceWrapper>
      <ServiceWrapper>
        <ServiceSection
          title="2D/3D Art Work"
          description="Transform environment with exquisite 2D and 3D artworks, infusing style into every corner."
        />
        <ServiceSection
          title="Retail Design"
          description="Explore curated spaces and bespoke designs tailored to elevate your retail environment."
        />
        <ServiceSection
          title="Decoration Work"
          description="Crafting bespoke interiors, where every detail tells a story of sophistication and refinement."
        />
      </ServiceWrapper>
    </div>
  );
};

export default Services;
