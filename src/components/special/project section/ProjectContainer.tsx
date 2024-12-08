import React, { useEffect, useState } from "react";
import {
  ImageItem,
  useGetImagesQuery,
} from "../../../redux/slices/unsplashApiSlice";
import Tabs from "../../common/Tabs";
import ProjectItem from "./ProjectItem";
import CircleLoader from "../../common/CircleLoader";

const ProjectContainer: React.FC = () => {
  const tabs = ["Bedroom", "Bathroom", "Kitchen", "Living Room"];
  const [currentTab, setCurrentTab] = useState<string>("Bathroom");
  const [projects, setProjects] = useState<ImageItem[]>([]);
  const [currentPage, setPage] = useState<number>(1);

  const currentTabIndex = tabs.findIndex(
    (tab) => tab.toLowerCase() === currentTab.toLowerCase()
  );

  const {
    data: images,
    error,
    isLoading,
  } = useGetImagesQuery({ category: currentTab, page: currentPage });
  useEffect(() => {
    if (images?.results) {
      setProjects((prevProjects) => [...prevProjects, ...images.results]);
    }
  }, [images]);
  console.log(images);
  const handleTabClick = (index: number) => {
    setCurrentTab(tabs[index]);
    setPage(1);
    setProjects([]);
  };

  const handlePageClick = () => {
    console.log(isLoading,"loading state for button")
    setPage((prevPage) => prevPage + 1);
  };
  if (error) return <div>Error</div>;
  if (isLoading ) return <CircleLoader></CircleLoader>
 
  return (
    <>
      <Tabs currentTabIndex={currentTabIndex} onTabClick={handleTabClick} />
      <section className="project-items mt-9">
        <div className="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]">
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              imgSrc={`${item.urls.raw}&h=500&w=600&q=80&fm=webp`}
              title={"Image"}
              category={item?.alt_description}
              blurHash={item.blur_hash}
            />
          ))}
        </div>
      </section>

      <section className="flex justify-center">
        {projects.length !== 0 && (
          <button
            className="bg-orange-light p-4 text-white font-bold text-2xl rounded-3xl w-[340px] font-inter"
            onClick={handlePageClick}
          >
            VIEW MORE
          </button>
        )}
      </section>
    </>
  );
};

export default ProjectContainer;
