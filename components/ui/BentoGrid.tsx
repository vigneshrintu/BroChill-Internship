import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import { Gluten } from "next/font/google";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";

// Import the Gluten font and specify subsets
const gluten = Gluten({ subsets: ["latin"] });

// Inserted gridItems array
export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-black-100",
    img: "/dudepro-brand.png",
    spareImg: "",
  },
  {
    id: 4,
    title: "What is DudePro ?",
    description: "Create stunning videos effortlessly with DudePro, the ultimate video editing app that brings you a wide range of free pro templates. Unleash your creativity and make professional-quality videos in minutes. Whether you’re a seasoned editor or a beginner, DudePro makes video creation a breeze. Explore our diverse collection of pro templates and transform your content into something extraordinary. It’s time to edit like a pro, and it’s all in the palm of your hand with DudePro!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center text-yellow-500",
    img: "",
    spareImg: "",
  },
  {
    id: 5,
    title: "What Do We Do ?",
    description: "DudePro is your all-in-one video editing companion that empowers you to unleash your creativity and craft stunning videos with ease. DudePro is your go-to solution for video editing, whether you’re creating content for social media, vlogs, presentations, or special occasions. Elevate your video editing game and transform your ideas into captivating visuals with DudePro!",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start text-yellow-500",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Contact Via Email",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center ", // Added font-gluten class here
    img: "",
    spareImg: "",
  },
];

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-8 lg:gap-8 mx-auto",
      gluten.className,
      className
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "bropro.app@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl bg-black border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{ backgroundColor: "#000000" }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-fit object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <div className="absolute z-50 inset-0 flex items-center justify-center text-white  px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 "
          )}
        >
          <div
            className={` text-lg lg:text-3xl max-w-96  z-10`}
          >
            {title}
          </div>
          <div className="mt-4  md:full md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${
                  copied ? "block" : "block"
                }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy Email"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
