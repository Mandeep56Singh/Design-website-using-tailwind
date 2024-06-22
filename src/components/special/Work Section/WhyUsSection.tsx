import React from "react";
import Button from "../../common/Button";

const WhyUsSection: React.FC = () => {
   const items = [
     {
       title: "What We Do",
       description:
         "Transforming your house into a dream home, we specialize in crafting personalized interiors tailored to your unique style and preferences.",
       imgSrc: "src/assets/images/backgrounds/Rectangle 18.png",
       buttonText: "Our Concept",
       reverse: true,
     },
     {
       title: "Why Trust Us",
       description:
         "Elevate your space with confidence. Our expert designers blend creativity and functionality to ensure every detail reflects your unique style.",
       imgSrc: "src/assets/images/backgrounds/Rectangle 19.png",
       buttonText: "Our Portfolio",
     },
   ];

  return (
  

    <section className="mb-[340px] mt-14 sm:mt-20 md:mt-24 xl:mt-32">
      {/* what we do */}
      <div className="relative mt-0 h-[300px] flex-row-reverse justify-center xl:mx-auto xl:mt-40 xl:flex xl:w-[1280px]">
        <div>
          <img
            src={items[0].imgSrc}
            alt="image"
            className="relative mx-auto hidden w-11/12 xl:mx-0 xl:block xl:h-[500px] xl:w-[700px]"
          />
        </div>
        <div className="xl:mr-8 xl:mt-10 xl:w-[500px]">
          <div
            className="mt-50 relative left-1/2 flex h-[260px] w-11/12 -translate-x-1/2 flex-col items-center justify-end bg-bottom bg-no-repeat text-black-dark before:absolute before:bottom-0 before:left-1/2 before:z-10 before:h-[100px] before:w-[200px] before:-translate-x-1/2 before:rounded-tl-full before:rounded-tr-full before:bg-white sm:h-[320px] sm:before:h-[130px] sm:before:w-[260px] md:h-[360px] md:before:h-[160px] md:before:w-[320px] xl:mt-24 xl:h-0"
            style={{
              backgroundImage: `url('${items[0].imgSrc}')`,
            }}
          >
            <h1 className="relative z-10 mt-12 text-center font-DM-serif-Display text-3xl text-black-dark sm:text-3xlp md:mt-20 md:text-5xl xl:mr-40 xl:text-start">
              {items[0].title}
            </h1>
          </div>
          <p className="md:xlp mx-auto mt-6 w-[300px] text-center font-Jost text-lg text-black-light sm:w-[400px] sm:text-xl xl:ml-12 xl:w-[445px] xl:text-start xl:text-xlp">
            {items[0].description}
          </p>
          {/* <button className=" button-black mx-auto mt-6 xl:ml-12 xl:mt-10">
            Our Concept <i className="fa-solid fa-arrow-right ml-3" />
          </button> */}
          <Button variant="black" className=" mx-auto mt-6 xl:ml-12 xl:mt-10">
            Our Concept <i className="fa-solid fa-arrow-right ml-3" />
          </Button>
        </div>
      </div>
      {/* why trust us */}
      <div className="relative mt-0 h-[300px] flex-row justify-center xl:mx-auto xl:mt-[380px] xl:flex xl:w-[1280px]">
        <div>
          <img
            src={items[1].imgSrc}
            alt="image"
            className="relative mx-auto hidden w-11/12 xl:mx-0 xl:block xl:h-[500px] xl:w-[700px]"
          />
        </div>
        <div className="xl:mr-8 xl:mt-10 xl:w-[500px]">
          <div
            className="relative left-1/2 mt-[236px] flex h-[260px] w-11/12 -translate-x-1/2 flex-col items-center justify-end bg-bottom bg-no-repeat text-black-dark before:absolute before:bottom-0 before:left-1/2 before:z-10 before:h-[100px] before:w-[200px] before:-translate-x-1/2 before:rounded-tl-full before:rounded-tr-full before:bg-white sm:mt-[272px] sm:h-[320px] sm:before:h-[130px] sm:before:w-[260px] md:mt-[348px] md:h-[360px] md:before:h-[160px] md:before:w-[320px] xl:mt-24 xl:h-0 xl:before:h-0"
            style={{
              backgroundImage: `url('${items[1].imgSrc}')`,
            }}
          >
            <h1 className="relative z-10 mt-12 text-center font-DM-serif-Display text-3xl text-black-dark sm:text-3xlp md:mt-20 md:text-5xl xl:mr-40 xl:text-start">
              {items[1].title}
            </h1>
          </div>
          <p className="md:xlp relative z-10 mx-auto mt-6 w-[300px] text-center font-Jost text-lg text-black-light sm:w-[400px] sm:text-xl xl:ml-12 xl:w-[445px] xl:text-start xl:text-xlp">
            {items[1].description}
          </p>
          <Button variant="black" className=" mx-auto mt-6 xl:ml-12 xl:mt-10">
            Our Portfolio <i className="fa-solid fa-arrow-right ml-3" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
