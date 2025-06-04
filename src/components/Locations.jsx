import React from "react";

const locations = [
  {
    city: "Port Area",
    description:
      "22-74-1, Burujupeta, Jalaripet, Port Area, Visakhapatnam, Andhra Pradesh 530001",
    mapsLink:
      "https://www.google.com/maps/place/22-74-1,+Burujupeta,+Jalaripet,+Port+Area,+Visakhapatnam,+Andhra+Pradesh+530001",
  },
  {
    city: "Daspalla Hills",
    description:
      "P888+H74, Daspalla Hills, AUM Free Yoga Centre, Visakhapatnam, Andhra Pradesh 530002",
    mapsLink:
      "https://www.google.com/maps/place/P888%2BH74,+Daspalla+Hills,+Visakhapatnam,+Andhra+Pradesh+530002",
  },
  {
    city: "Pandurangapuram",
    description:
      "Panduranga Swamy Temple Rd, Pandurangapuram, Visakhapatnam, Andhra Pradesh 530003",
    mapsLink:
      "https://www.google.com/maps/place/Panduranga+Swamy+Temple+Rd,+Pandurangapuram,+Visakhapatnam,+Andhra+Pradesh+530003",
  },
  {
    city: "Lansum Oxygen Towers",
    description: "Lansum Oxygen Towers, AUM Free Yoga Centre, Visakhapatnam",
    mapsLink:
      "https://www.google.com/maps/place/Lansum+Oxygen+Towers,+Visakhapatnam",
  },
  {
    city: "Gadiraju Empire",
    description:
      "Gadiraju Empire Yoga Centre, P8QR+74J, Lawsons Bay Main Rd, Sector 11, MVP Colony, Visakhapatnam, Andhra Pradesh 530017",
    mapsLink:
      "https://www.google.com/maps/place/P8QR%2B74J,+Lawsons+Bay+Main+Rd,+Sector+11,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017",
  },
  {
    city: "Coming Soon",
    description: "Stay tuned for our next location announcement!",
    mapsLink: null,
  },
];

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

        {/* Location Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-secondary text-primary p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-primary hover:text-secondary"
            >
              <h3 className="text-2xl font-bold mb-2">{location.city}</h3>
              <p className="text-base mb-4">{location.description}</p>
              {location.mapsLink && (
                <a
                  href={location.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-quaternary text-primary text-sm font-semibold py-1 px-3 rounded-full hover:bg-tertiary transition"
                >
                  View in Maps
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
