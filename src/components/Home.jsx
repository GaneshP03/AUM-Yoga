import React from "react";
import { TypeAnimation } from "react-type-animation";
import yogaImage from "../assets/yoga1.jpg";
import About from "./About";
import Locations from "./Locations";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-12">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              <TypeAnimation
                sequence={[
                  "Find your inner peace.",
                  2000,
                  "Strengthen your soul and body.",
                  2000,
                  "Welcome to AUM Yoga.",
                  2000,
                ]}
                wrapper="span"
                speed={150}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl md:text-2xl text-primary opacity-90 leading-relaxed">
              Explore balance, harmony, and wellness with us.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center">
            <img
              src={yogaImage}
              alt="Yoga"
              className="w-full h-auto max-w-md md:max-w-lg rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>
      <About />
      <Locations />
    </>
  );
}

export default Home;
