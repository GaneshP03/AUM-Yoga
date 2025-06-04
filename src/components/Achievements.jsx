import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Images (replace these with actual file paths)
import img1 from "../assets/achieve1.jpg";
import img2 from "../assets/achieve2.jpg";
import img3 from "../assets/achieve3.jpg";
import img4 from "../assets/achieve4.jpg";
import img5 from "../assets/achieve5.jpg";
import img6 from "../assets/achieve6.jpg";
import img7 from "../assets/achieve7.jpg";
import img8 from "../assets/achieve8.jpg";
import img9 from "../assets/achieve9.jpg";
import img10 from "../assets/achieve10.jpg";
import img11 from "../assets/achieve11.jpg";
import img12 from "../assets/achieve12.jpg";
import img13 from "../assets/achieve13.jpg";
import img14 from "../assets/achieve14.jpg";
import img15 from "../assets/achieve15.jpg";
const achievements = [
  {
    title: "Recognized by the Yogaasana Book of World Records",
    description:
      "Our AUM Free Yoga Centre proudly earned a spot in the esteemed Yogaasana Book of World Records. This milestone was celebrated in regional newspapers, spotlighting our commitment to yoga excellence and community engagement.",
    images: [img1, img2, img3],
  },
  {
    title: "10th International Yoga Day – Gadiraju Palace",
    description:
      "We successfully organized the 10th International Yoga Day at Gadiraju Palace, Visakhapatnam. A grand celebration of unity and well-being, the event drew practitioners from diverse backgrounds to honor yoga’s transformative power.",
    images: [img4, img5, img6],
  },
  {
    title: "Rathasaptami 2024 – 108 Suryanamaskars",
    description:
      "During Rathasaptami 2024, we led a powerful yoga session at Lansum Oxygen Towers, where participants performed 108 rounds of Suryanamaskars and 108×12 asanas, marking a deep spiritual and physical milestone.",
    images: [img7, img8, img9],
  },
  {
    title: "Children’s Summer Camp in Bheemili",
    description:
      "We held a summer camp for children at the Yoga Chaitanya Samstha in Bheemili. The program featured playful yoga exercises, storytelling, and meditation, fostering self-awareness and joy in young participants.",
    images: [img10, img11, img12],
  },
  {
    title: "9th International Yoga Day 2022 – Gadiraju Palace",
    description:
      "Hosted at Gadiraju Palace, the 9th International Yoga Day celebration in 2022 drew over a thousand participants and was graced by the presence of a Central Minister. A true festival of mindfulness and unity.",
    images: [img13, img14, img15],
  },

  {
    title: "Coming Soon",
    description: "Stay tuned for our next achievement announcement!",
    images: [],
  },
];

const Achievements = () => {
  return (
    <section className="bg-primary py-16 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-secondary text-center mb-4">
          Our Achievements
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-20 bg-tertiary rounded-full"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`${
                item.fullWidth ? "md:col-span-2 lg:col-span-3" : ""
              } bg-primary border border-tertiary p-6 rounded-2xl shadow-xl text-secondary transition transform hover:scale-[1.03]`}
            >
              {/* Carousel */}
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={4000}
                className="rounded-xl"
              >
                {item.images.map((src, i) => (
                  <div key={i}>
                    <img
                      src={src}
                      alt={`Achievement ${index + 1} image ${i + 1}`}
                      className="rounded-xl object-cover h-60 w-full"
                    />
                  </div>
                ))}
              </Carousel>

              {/* Content */}
              <h3 className="text-2xl font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-base leading-relaxed opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
