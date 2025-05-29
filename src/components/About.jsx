import React from "react";
import missionImage from "../assets/yoga2.jpg"; // Replace with actual image
import visionImage from "../assets/yoga3.jpg"; // Replace with actual image

function About() {
  return (
    <section className="bg-secondary py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* About Us Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-2">
          About Us
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-20 bg-tertiary rounded-full"></div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          {/* Image */}
          <div className="flex-1">
            <img
              src={missionImage}
              alt="Our Mission"
              className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform transition duration-500 hover:scale-105 w-full"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-primary">
            <h3 className="text-3xl md:text-4xl font-semibold mb-2">
              Our Mission
            </h3>
            <div className="h-1 w-16 bg-tertiary rounded-full mb-4"></div>
            <p className="text-lg md:text-xl leading-relaxed">
              At AUM Yoga, our mission is to guide individuals toward inner
              peace, physical strength, and spiritual growth through the
              timeless practice of yoga. We aim to create an inclusive,
              supportive, and inspiring space for everyone.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image */}
          <div className="flex-1">
            <img
              src={visionImage}
              alt="Our Vision"
              className="rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] transform transition duration-500 hover:scale-105 w-full"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-primary">
            <h3 className="text-3xl md:text-4xl font-semibold mb-2">
              Our Vision
            </h3>
            <div className="h-1 w-16 bg-tertiary rounded-full mb-4"></div>
            <p className="text-lg md:text-xl leading-relaxed">
              Our vision is to become a global hub for holistic wellness where
              people from all walks of life can unlock their full potential
              through mindful movement, spiritual alignment, and community
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
