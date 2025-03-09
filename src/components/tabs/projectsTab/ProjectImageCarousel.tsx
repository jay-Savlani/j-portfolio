import { ButtonHTMLAttributes, ReactNode, useEffect, useState } from "react";

import { T_image } from "./projectsData";

type T_CarouselProps = {
  data: T_image[];
};

type T_ImageWithTitleProps = {
  image: T_image;
};

type T_SlideButton = {
  children: ReactNode;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const SlideButton = ({ children, ...rest }: T_SlideButton) => {
  return (
    <button
      className={`mx-2 lg:mx-10 px-1 lg:px-3 py-2 ${
        rest.disabled ? "text-slate-700" : "text-orange-500"
      } cursor-pointer hover:opacity-70 text-4xl font-bold`}
      {...rest}
    >
      {children}
    </button>
  );
};

const ImageWithTitle = ({ image }: T_ImageWithTitleProps) => {
  return (
    <div className="animation-fade-in-quick z-10">
      <img
        src={image.imgSrc}
        className="block w-[80vw]  lg:h-[500px] lg:w-auto"
      />
    </div>
  );
};

export const ProjectImageCarousel = ({ data }: T_CarouselProps) => {
  const [index, setActiveIndex] = useState(0);
  const [images, setImages] = useState<T_image[]>([]);

  // load images
  useEffect(() => {
    let imagesData: T_image[] = [];
    data.forEach((img) => imagesData.push(img));

    setImages(imagesData);
  }, [data]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const disablePreviousButton = index === 0;
  const disableNextButton = !data[index + 1];

  return (
    <div>
      <p className="text-base dark:text-slate-600 mb-2 lg:text-lg text-center mt-5 p-1 lg:p-2 font-semibold">
        {data[index].title}
      </p>

      <div className="flex flex-row items-center">
        <SlideButton onClick={handlePrevious} disabled={disablePreviousButton}>
          &lt;
        </SlideButton>

        {images[index] && <ImageWithTitle image={images[index]} key={index} />}

        <SlideButton onClick={handleNext} disabled={disableNextButton}>
          &gt;
        </SlideButton>
      </div>
    </div>
  );
};
