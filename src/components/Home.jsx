import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";

import yogaImage from "../assets/yoga1.jpg";
import About from "./About";
import Locations from "./Locations";
import Achievements from "./Achievements";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120, // Trigger point before section enters viewport
      once: true, // Animate only once
      mirror: false, // Don't animate on scroll back
      delay: 100, // Add delay for smoother experience
      startEvent: "DOMContentLoaded", // Start after full load
    });

    // Fix for anchor links not retriggering scroll events
    const handleHashChange = () => {
      setTimeout(() => {
        AOS.refresh(); // Refresh to detect position
      }, 100);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-secondary py-12 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-12">
          <div
            className="flex-1 text-center md:text-left"
            data-aos="fade-right"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              <TypeAnimation
                sequence={[
                  "Find your inner peace.",
                  2000,
                  "Strengthen your soul and body.",
                  2000,
                  "Welcome to AUM Free Yoga Centre.",
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

          <div className="flex-1 flex justify-center" data-aos="fade-left">
            <img
              src={yogaImage}
              alt="Yoga"
              className="w-full h-auto max-w-md md:max-w-lg rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="about" data-aos="fade-up">
        <About />
      </section>

      <section id="locations" data-aos="fade-up">
        <Locations />
      </section>

      <section id="achievements" data-aos="fade-up">
        <Achievements />
      </section>

      <section id="contact" data-aos="fade-up">
        <Footer />
      </section>
    </>
  );
}

export default Home;
