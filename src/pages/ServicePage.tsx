import React from "react";
import Banner from "../components/special/banner/Banner";
import Services from "../components/special/service Section/Services";
import WorkSection from "../components/special/Work Section/WorkSection";
import JionSection from "../components/special/jion us section/JionSection";

const ServicePage : React.FC = () => {
  return (
    <>
  <Banner image="bg-services-img">Services</Banner>;
  <Services></Services>
  <WorkSection></WorkSection>
  <JionSection></JionSection>
 
    </>
  )
};

export default ServicePage;
