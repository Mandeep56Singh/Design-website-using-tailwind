import React from 'react'
import Banner from '../components/special/banner/Banner'
import Quote from '../components/special/Quote/Quote';
import WhyUsSection from '../components/special/Work Section/WhyUsSection';
import TestimonialSection from '../components/special/testimonial section/TestimonialSection';

const AboutPage : React.FC = () => {
  return (
    <>
      <Banner image="bg-About-Us-img">About Us</Banner>
      <Quote></Quote>
      <WhyUsSection></WhyUsSection>
      <TestimonialSection></TestimonialSection>
    </>
  );
}

export default AboutPage