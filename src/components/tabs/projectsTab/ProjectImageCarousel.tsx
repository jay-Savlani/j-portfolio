import { ButtonHTMLAttributes, ReactNode, useState } from "react";

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
      className="mx-10 px-3 py-2 text-slate-700 cursor-pointer hover:opacity-70 text-4xl font-bold"
      {...rest}
    >
      {children}
    </button>
  );
};

const ImageWithTitle = ({ image }: T_ImageWithTitleProps) => {
  let titleClasses =
    "text-lg text-center text-slate-800 mt-5 p-2 font-semibold";

  return (
    <div className="animation-fade-in-quick">
      <p className={titleClasses}>{image.title}</p>
      <img src={image.imgSrc} className="block h-[500px]" />
    </div>
  );
};

export const ProjectImageCarousel = ({ data }: T_CarouselProps) => {
  const [index, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const disablePreviousButton = index === 0;
  const disableNextButton = !data[index + 1];

  return (
    <div className="flex flex-row items-center">
      <SlideButton onClick={handlePrevious} disabled={disablePreviousButton}>
        &lt;
      </SlideButton>

      {data[index] && (
        <div className="flex flex-row gap-x-10">
          <ImageWithTitle image={data[index]} key={index} />
        </div>
      )}

      <SlideButton onClick={handleNext} disabled={disableNextButton}>
        &gt;
      </SlideButton>
    </div>
  );
};
