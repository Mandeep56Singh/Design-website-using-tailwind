import axios from "axios";
import React, { useEffect } from "react";
import ProjectItem from "./ProjectItem";
const accessKey = import.meta.env.VITE_UNSPLASH_API_ACESS_KEY;
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
  console.log(accessKey);
  useEffect(() => {
    const API = `https://api.unsplash.com/search/photos`;
    const fetchRequest = async (): Promise<void> => {
      const response = await axios.get(
        `${API}?query=bedroom&page=1&per_page=20&client_id=${accessKey}`
      );
      console.log(response.data);
    };
    fetchRequest();
  },[]);
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
