import React from 'react'
import Banner from '../components/special/banner/Banner'
import ProjectContainer from "../components/special/project section/ProjectContainer";

const ProjectPage : React.FC = () => {
  return (
    <>
      <Banner image="bg-products-img">Our Projects</Banner>
      <ProjectContainer></ProjectContainer>
 
    </>
  );
}

export default ProjectPage