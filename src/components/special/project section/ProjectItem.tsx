import { decode } from "blurhash";
import React, { useEffect, useState } from "react";
import Button from "../../common/Button";
type ProjectItemProps = {
  imgSrc: string;
  title: string;
  category: string;
  blurHash: string;
};

const ProjectItem: React.FC<ProjectItemProps> = ({
  imgSrc,
  title,
  category,
  blurHash,
}) => {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

 useEffect(() => {
   if (blurHash) {
     try {
       const pixels = decode(blurHash, 32, 32);
       const canvas = document.createElement("canvas");
       canvas.width = 32;
       canvas.height = 32;
       const ctx = canvas.getContext("2d");

       if (ctx) {
         const imageData = ctx.createImageData(32, 32);
         imageData.data.set(pixels);
         ctx.putImageData(imageData, 0, 0);
         setBlurDataURL(canvas.toDataURL());
       } else {
         console.error("Canvas context is not available.");
       }
     } catch (error) {
       console.error("Error decoding BlurHash:", error);
     }
   }
 }, [blurHash]);

  return (
    <div>
      {blurDataURL && !isLoaded && (
        <img
          src={blurDataURL}
          alt="blurhash"
          className="w-[500px] h-[600px] object-cover"
        />
      )}
      <img
        src={imgSrc}
        alt={title}
        className={`w-[500px] h-[600px] object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } `}
        onLoad={() => setIsLoaded(true)}
      />

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
