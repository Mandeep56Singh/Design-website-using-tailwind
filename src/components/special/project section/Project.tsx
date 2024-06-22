import React from 'react'
import { project as props } from '../../../types/project';
import Button from '../../common/Button';

const Project : React.FC < props> = ({image,title,description}) => {
  return (
    <div>
      <img src={image} alt="image" />
      <div className="mt-3 flex justify-between">
        <div>
          <h1 className="font-DM-serif-Display text-2xl text-black-dark">
            {title}
          </h1>
          <p className="font-Jost text-xlp text-black-light">{description}</p>
        </div>
        <Button size="icon">
          <i className="fa-solid fa-chevron-right"></i>
        </Button>
      </div>
    </div>
  );
}

export default Project