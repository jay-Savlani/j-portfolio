import { ButtonHTMLAttributes, ReactNode, useState } from "react";

import { T_SKillData } from "../tabs/skillsTab/skillData";

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
      className="mx-10 bg-slate-700 text-slate-50 cursor-pointer"
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

  let titleClasses = "text-lg text-center text-slate-800 mt-5 p-2 ";
  if (selectedItem === image.title)
    titleClasses += "bg-slate-700 text-white shadow-inner";

  return (
    <div>
      <img
        src={image.src}
        className="block h-52 w-52 hover:opacity-50 cursor-pointer"
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
    console.log("handle next called");
    setActiveIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevious = () => {
    console.log("handle prev called");
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
      <div className="flex flex-row gap-x-10">
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
