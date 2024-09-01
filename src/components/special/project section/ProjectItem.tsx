import React from "react";
import Button from "../../common/Button";

type ProjectItemProps = {
  imgSrc: string;
  title: string;
  category: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  title,
  category,
}) => {
  return (
    <div>
      <img src={imgSrc} alt={title} className="w-[500px] h-[600px] object-cover" />

      <div className="mt-3 flex max-w-[590px] items-center justify-between">
        <div>
          <h1 className="font-DM-serif-Display text-2xl text-black-dark">
            {title}
          </h1>
          <p className="font-Jost text-xlp text-black-light">{category}</p>
        </div>

        <Button size="icon">
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
};

export default ProjectItem;
