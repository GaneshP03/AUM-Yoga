import React from "react";

const Locations = () => {
  return (
    <section className="bg-secondary py-12 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-2">
          Our Locations
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-20 bg-tertiary rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mumbai */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Mumbai, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              102 Yoga Heights, Marine Drive, Mumbai, MH 400002
            </p>
            <a
              href="https://www.google.com/maps/place/Marine+Drive,+Mumbai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>

          {/* Delhi */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Delhi, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              45 Lotus Enclave, Connaught Place, New Delhi, DL 110001
            </p>
            <a
              href="https://www.google.com/maps/place/Connaught+Place,+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>

          {/* Bengaluru */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Bengaluru, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              78 Serene Tower, Indiranagar, Bengaluru, KA 560038
            </p>
            <a
              href="https://www.google.com/maps/place/Indiranagar,+Bengaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>

          {/* Pune */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Pune, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              34 Omkar Heights, Koregaon Park, Pune, MH 411001
            </p>
            <a
              href="https://www.google.com/maps/place/Koregaon+Park,+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>

          {/* Chennai */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Chennai, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              88 Sunrise Apartments, Besant Nagar, Chennai, TN 600090
            </p>
            <a
              href="https://www.google.com/maps/place/Besant+Nagar,+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>

          {/* Hyderabad */}
          <div className="bg-white shadow-lg rounded-xl p-6 text-center transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              Hyderabad, India
            </h3>
            <p className="text-primary opacity-80 mb-4">
              63 Lotus Plaza, Banjara Hills, Hyderabad, TG 500034
            </p>
            <a
              href="https://www.google.com/maps/place/Banjara+Hills,+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-quaternary text-primary font-bold py-2 px-4 rounded-full hover:bg-tertiary transition"
            >
              View in Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;
