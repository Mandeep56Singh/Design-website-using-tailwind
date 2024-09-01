import React from 'react'
import Banner from '../components/special/banner/Banner'
import ProjectContainer from "../components/special/project section/ProjectContainer";
import Pagination from '../components/common/Pagination';

const ProjectPage : React.FC = () => {
  return (
    <>
      <Banner image="bg-products-img">Our Projects</Banner>
      <ProjectContainer></ProjectContainer>
      <Pagination></Pagination>
    </>
  );
}

export default ProjectPage