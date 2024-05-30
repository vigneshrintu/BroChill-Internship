"use client";

import React from "react";

import { features } from "@/data";


const Clients = () => {
  return (
    <section id="features" className="py-20">
      <h1 className="heading">
        Chillaxin
        <span className="text-green-400"> Features!</span>
      </h1>

      

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {features.map((feature) => (
            <React.Fragment key={feature.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={feature.img}
                  alt={feature.name}
                  className="md:w-10 w-5"
                />
                <p className="text-md font-bold text-white">{feature.name}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      
    </section>
  );
};

export default Clients;
