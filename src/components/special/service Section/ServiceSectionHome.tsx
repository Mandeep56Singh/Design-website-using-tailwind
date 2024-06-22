import React from 'react'
import ServiceSection from './ServiceSection'
import ServiceWrapper from './ServiceWrapper';
const ServiceHome : React.FC = () => {
  return (
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
  );
}

export default ServiceHome