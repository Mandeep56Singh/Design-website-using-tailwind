import React from 'react'
import Project from './Project';
const ProjectSection : React.FC = () => {
    const projects = [
      {
        image: "src/assets/images/backgrounds/Rectangle 4.png",
        title: "Modern bedroom",
        description: "Decor / Architecture",
      },
      {
        image: "src/assets/images/backgrounds/Rectangle 5.png",
        title: "Modern bedroom",
        description: "Decor / Architecture",
      },
      {
        image: "src/assets/images/backgrounds/Rectangle 6.png",
        title: "Modern bedroom",
        description: "Decor / Architecture",
      },
      {
        image: "src/assets/images/backgrounds/Rectangle 7.png",
        title: "Modern bedroom",
        description: "Decor / Architecture",
      },
    ];
  return (

    <section className="margin-section mx-auto">
      <h1 className="text-nowrap text-center font-DM-serif-Display text-3xl text-black-dark sm:text-3xlp md:text-5xl xl:text-6xl xsm:text-2xl">
        Follow Our Projects
      </h1>
      <p className="mx-3 mt-2 max-w-[740px] text-center font-Jost text-lg font-medium text-black-light sm:mx-auto sm:w-[600px] sm:text-xlp md:w-[640px] xl:text-2xlp">
        Step inside our portfolio of stunning interior designs, where creativity
        meets functionality in every space we craft.
      </p>
      <div className="mx-auto mt-12 grid w-[340px] grid-cols-1 gap-12 sm:w-11/12 sm:grid-cols-2 sm:gap-16 xl:mt-28 xl:gap-28 xsm:w-[300px]">
       {
        projects.map( (project , index) => 
          <Project
          key={index}
          image= {project.image}
          title= {project.title}
          description= {project.description}
          >
          </Project>
          )
       }
    
      </div>
    </section>
  );
}

export default ProjectSection;