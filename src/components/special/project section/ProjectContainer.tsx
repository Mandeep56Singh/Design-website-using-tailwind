import React from "react";
import ProjectItem from "./ProjectItem";
const projectItems = [
  {
    imgSrc: "src/assets/images/backgrounds/Rectangle 27.png",
    title: "Modern bedroom",
    category: "Decor / Architecture",
  },
  {
    imgSrc: "src/assets/images/backgrounds/Rectangle 28.png",
    title: "Modern bedroom",
    category: "Decor / Architecture",
  },
  {
    imgSrc: "src/assets/images/backgrounds/Rectangle 29.png",
    title: "Modern bedroom",
    category: "Decor / Architecture",
  },
  {
    imgSrc: "src/assets/images/backgrounds/Rectangle 30.png",
    title: "Modern bedroom",
    category: "Decor / Architecture",
  },
];
const ProjectContainer: React.FC = () => {
  return (
    <section className="project-items mt-9">
      <div className="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]">
        {projectItems.map((item, index) => (
          <ProjectItem
            key={index}
            imgSrc={item.imgSrc}
            title={item.title}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectContainer;
