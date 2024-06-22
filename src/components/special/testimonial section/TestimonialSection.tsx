import React from "react";
import SlideButton from "../../common/SlideButton";
import Testimonial from "./Testimonial";

const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Natasha",
      location: { city: "Moscow", country: "Russia" },
      image: "src/assets/images/icons/testimonial1.jpg",
      reviews:
        "Thanks to the incredible team at Interior Bliss, our home has been transformed into a sanctuary of elegance and comfort.",
    },
    {
      name: "Raymond",
      location: { city: "London", country: "UK" },
      image: "src/assets/images/icons/testimonial2.png",
      reviews:
        "Transformed my house into a dream home. Couldn't be happier with results!",
    },
    {
      name: "Benny Roll",
      location: { city: "New York", country: "USA" },
      image: "src/assets/images/icons/testimonial1.jpg",
      reviews:
        "Thanks to the incredible team at Interior Bliss, our home has been transformed into a sanctuary of elegance and comfort.",
    },
  ];
  return (
    <section className="margin-section mx-auto grid w-screen place-content-center bg-orange-light pb-20   xl:h-[679px] xl:w-[1210px] xl:rounded-[30px]">
      <h1 className="mt-6 text-center font-DM-serif-Display text-3xl text-white sm:text-3xlp md:mt-16 md:text-5xl xl:mt-[80px] xsm:text-2xl">
        What  People Thinks
      </h1>
      <h1 className="text-center font-DM-serif-Display text-3xl text-white sm:text-3xlp md:text-5xl xsm:text-2xl">
        About Us
      </h1>
      {/* to make slider  */}
      <div
        id="slider-wrapper"
        className="slider-wrapper relative flex xl:ml-8 xl:overflow-hidden"
      >
        <SlideButton direction="left"></SlideButton>
        {/* container of containers  */}
        <div className="slider-list pointer-events-none mx-auto flex w-[280px] gap-[270px] overflow-auto sm:w-[340px] sm:gap-[330px] md:mt-8 md:block md:w-screen xl:flex xl:gap-5">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index} // Ensure each component has a unique key
              name={testimonial.name}
              location={testimonial.location}
              image={testimonial.image}
              reviews={testimonial.reviews}
              className={
                index % 2 == 0 ? "ml-[10px] md:mr-96" : "mx-[20px] md:ml-96"
              }
            />
          ))}
        </div>
        <SlideButton direction="right"></SlideButton>
      </div>
    </section>
  );
};

export default TestimonialSection;
