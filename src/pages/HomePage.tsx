import React from "react";
import HeroBanner from "../components/special/banner/HeroBanner";
import BlogSection from "../components/special/blog section/BlogSection";
import CompaniesSection from "../components/special/companies section/CompaniesSection";
import JionSection from "../components/special/jion us section/JionSection";
import ProjectSection from "../components/special/project section/ProjectSection";
import ServiceHome from "../components/special/service Section/ServiceSectionHome";
import ShowcaseSection from "../components/special/showcase section/ShowcaseSection";
import TestimonialSection from "../components/special/testimonial section/TestimonialSection";
const HomePage: React.FC = () => {
  return (
    <>
      <HeroBanner></HeroBanner>
      <ServiceHome></ServiceHome>
      {/* <CallUsSection></CallUsSection> */}
      <TestimonialSection></TestimonialSection>
      <CompaniesSection></CompaniesSection>
      <ProjectSection></ProjectSection>
      <ShowcaseSection></ShowcaseSection>
      <BlogSection></BlogSection>
      <JionSection></JionSection>
    </>
  );
};

export default HomePage;
