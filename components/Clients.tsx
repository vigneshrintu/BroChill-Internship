"use client";

import React from "react";

import { features } from "@/data";


const Clients = () => {
  return (
    <section id="features" className="py-20">
      <h1 className="heading">
        Pro
        <span className="text-yellow-500"> Features!</span>
      </h1>

      

        <div className="mt-20 flex flex-wrap md:flex-row sm:flex-col items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {features.map((feature) => (
            <React.Fragment key={feature.id}>
              <div className="flex md:max-w-60 max-w-64 gap-2">
                <img
                  src={feature.img}
                  alt={feature.name}
                  className="md:w-48 w-30"
                />
                
              </div>
            </React.Fragment>
          ))}
        </div>
      
    </section>
  );
};

export default Clients;
