import { ButtonHTMLAttributes, ReactNode, useState } from "react";

import { T_SKillData } from "./skillData";

type T_CarouselProps = {
  data: T_SKillData[];
  selectedItem?: string;
  onSelect?: (value: string) => void;
};

type T_ImageWithTitleProps = {
  image: T_SKillData;
  onSelect?: (value: string) => void;
  selectedItem?: string;
};

type T_SlideButton = {
  children: ReactNode;
} & Partial<ButtonHTMLAttributes<HTMLButtonElement>>;

const SlideButton = ({ children, ...rest }: T_SlideButton) => {
  return (
    <button
      className={`mx-5 md:mx-10 p-3 bg-orange-600  ${
        rest.disabled ? "text-slate-800" : "text-slate-50"
      } cursor-pointer hover:opacity-70 rounded`}
      {...rest}
    >
      {children}
    </button>
  );
};

const ImageWithTitle = ({
  image,
  onSelect,
  selectedItem,
}: T_ImageWithTitleProps) => {
  const clickHandler = (title: string) => {
    if (onSelect) onSelect(title);
  };

  let titleClasses =
    "text-base md:text-lg text-center text-white dark:text-slate-600 mt-5 p-2 ";
  if (selectedItem === image.title)
    titleClasses += "bg-orange-700 text-white dark:text-white shadow-inner";

  return (
    <div className="animation-fade-in-quick text-center">
      <img
        src={image.src}
        className="inline-block mx-auto h-20 w-20 md:h-40 md:w-40 hover:opacity-50 cursor-pointer"
        onClick={() => clickHandler(image.title)}
      />
      <p className={titleClasses}>{image.title}</p>
    </div>
  );
};

export const Carousel = ({ data, onSelect, selectedItem }: T_CarouselProps) => {
  const [index, setActiveIndex] = useState(() => {
    let startIndex = 0;
    if (selectedItem) {
      data.forEach((item, index) => {
        if (item.title === selectedItem) {
          if (index === 0) return;
          if (index % 2 === 0) startIndex = index / 2;
          else startIndex = (index - 1) / 2;
        }
      });
    }
    return startIndex;
  });

  const handleNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
  };

  const firstImage = data[index > 0 ? 2 * index : index];
  const secondImage = data[index > 0 ? 2 * index + 1 : index + 1];
  const disablePreviousButton = index === 0;

  const disableNextButton = index > 0 ? !data[2 * index + 2] : !data[index + 2];

  return (
    <div className="flex flex-row items-center">
      <SlideButton onClick={handlePrevious} disabled={disablePreviousButton}>
        &lt;
      </SlideButton>
      <div className="flex flex-row justify-center gap-x-4 md:gap-x-10">
        {firstImage && (
          <ImageWithTitle
            image={firstImage}
            key={firstImage.title}
            onSelect={onSelect}
            selectedItem={selectedItem}
          />
        )}
        {secondImage && (
          <ImageWithTitle
            image={secondImage}
            key={secondImage.title}
            onSelect={onSelect}
            selectedItem={selectedItem}
          />
        )}
      </div>

      <SlideButton onClick={handleNext} disabled={disableNextButton}>
        &gt;
      </SlideButton>
    </div>
  );
};
