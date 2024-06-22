import React from "react";
import Banner from "../components/special/banner/Banner";
import FormSection from "../components/special/contact/FormSection";

const ContactPage: React.FC = () => {
  return (
    <>
      <Banner image="bg-contact-img">Contact Us</Banner>
      <FormSection></FormSection>
    </>
  );
};

export default ContactPage;
