import React from "react";
import ProjectItem from "./ProjectItem";
import {useGetImagesQuery} from '../../../redux/slices/unsplashApiSlice'

const ProjectContainer: React.FC = () => {

  const {data:images,error,isLoading} = useGetImagesQuery('bedroom');
  console.log(images?.results,'got some data');

if(error) return <div>error</div>
if(isLoading) return <div>Loading...</div>
  console.log(images,'here is iamgs');
  return (
    <section className="project-items mt-9">
      <div className="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]">
        {
          images?.results.map((item) => <ProjectItem
            key={item.id}
            imgSrc={`${item.urls.raw}&h=500&w=600`} title={"hefase"} category={"feasfse"}          
          ></ProjectItem>)
        }
      </div>
    </section>
  );
};

export default ProjectContainer;
