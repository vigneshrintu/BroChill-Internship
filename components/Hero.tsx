"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div id="home" className=" h-screen w-full dark:bg-black bg-black top-0 left-0 flex items-center justify-center">
      
      
        <div className="flex justify-center mt-32 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="DudePro"
              className="text-center text-[50px] md:text-3xl lg:text-xl font-extrabold"
            />

            <p className=" text-center md:tracking-wider text-sm md:text-lg lg:text-lg font-bold">
              Unlock Your Creativity with Pro Templates <br /> Edit Like a Pro!
            </p>

            
             <Link href={"linkrul"}>
                <div className="flex justify-center items-center">
                  <Image
                    src={"/gp.svg"}
                    height={85}
                    width={170}
                    alt="playstore"
                  ></Image>
                </div>
                </Link>
            
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
