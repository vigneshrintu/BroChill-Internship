"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { WavyBackground } from "../components/ui/wavy-background";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="pb-4 pt-4">
      <div
        className="h-screen w-full dark:bg-black bg-black absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <WavyBackground className="max-w-4xl mx-auto ">
        <div className="flex justify-center relative mt-64 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="DudePro"
              className="text-center text-[40px] md:text-3xl lg:text-xl font-extrabold"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-lg font-bold">
              Unlock Your Creativity with Pro Templates <br /> Edit Like a Pro!
            </p>

            <a href="#about">
              <button className="shadow-[0_0_0_3px_#000000_inset] px-12 py-2 bg-transparent border border-black dark:border-white dark:text-white text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                <div className="flex justify-center items-center">
                  <Image
                    src={"/playstoresvganime.svg"}
                    height={32}
                    width={32}
                    alt="playstore"
                  ></Image>
                </div>
                Download
              </button>
            </a>
          </div>
        </div>
      </WavyBackground>
    </div>
  );
};

export default Hero;
