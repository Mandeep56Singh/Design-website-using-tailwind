import React, { useState } from "react";
import {
  useGetImagesQuery,
} from "../../../redux/slices/unsplashApiSlice";
import ProjectItem from "./ProjectItem";
import Tabs from "../../common/Tabs";

const ProjectContainer: React.FC = () => {
  const tabs = ["Bedroom", "Bathroom", "Kitchen","living room"];
  const [currentTab, setCurrentTab] = useState<string>("Bathroom");

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.toLowerCase() === currentTab.toLowerCase()
  );

  const { data: images, error, isLoading } = useGetImagesQuery(currentTab);

  if (error) return <div>error</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleTabClick = (index: number) => {
    setCurrentTab(tabs[index]);
  };

  return (
    <>
      <Tabs currentTabIndex={currentTabIndex} onTabClick={handleTabClick} />
      <section className="project-items mt-9">
        <div className="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]">
          {images?.results.map((item) => (
            <ProjectItem
              key={item.id}
              imgSrc={`${item.urls.raw}&h=500&w=600`}
              title={ "Image"}
              category={ "No description"}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectContainer;
