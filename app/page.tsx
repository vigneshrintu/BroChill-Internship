
"use client";


import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import {Header} from "@/components/Header";
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full">
        <Header/>
        <Hero />
        <Grid />
        
        <Clients />
        
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
