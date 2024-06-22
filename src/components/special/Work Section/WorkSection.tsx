import React from "react";
import SectionTitle from "./SectionTitle";
import WorkExample from "./WorkExample";

const WorkSection: React.FC = () => {
  const examples = [
    {
      number: "01",
      image: "src/assets/images/backgrounds/Rectangle 21.png",
      title: "Concept & Details",
      description:
        "Our interior design website offers expert guidance and inspiration for creating stylish and functional environments.",
    },
    {
      number: "02",
      image: "src/assets/images/backgrounds/Rectangle 22.png",
      title: "Idea for Work",
      description:
        "Transforming interior design with an intuitive online platform for seamless collaboration and visualization.",
      reverse: true,
    },
    {
      number: "03",
      image: "src/assets/images/backgrounds/Rectangle 23.png",
      title: "Design",
      description:
        "Creating functional yet stunning interiors, marrying form and function with innovative spatial solutions.",
    },
    {
      number: "04",
      image: "src/assets/images/backgrounds/Rectangle 24.png",
      title: "Perfection",
      description:
        "Perfection is our ethos, manifested through meticulous attention to detail and unwavering commitment to excellence.",
      reverse: true,
    },
  ];
  return (
    <section className="margin-section mx-auto">
      <SectionTitle
        title="How do we work"
        description="Discover our collaborative approach to interior design, where creativity meets functionality to bring your vision to life."
      />
      <div className="work-examples">
        {examples.map((example, index) => (
          <WorkExample
            key={index}
            number={example.number}
            image={example.image}
            title={example.title}
            description={example.description}
            reverse={example.reverse}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
