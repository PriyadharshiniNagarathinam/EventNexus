import React from "react";
import { NavLink } from "react-router-dom";
import { MapPinIcon } from "@heroicons/react/24/outline";

const cities = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
  "Tirunelveli",
  "Vellore",
  "Erode",
  "Tirupur",
  "Kancheepuram",
  // Add more cities as needed
];

const MainComponent = () => {
  return (
    <div className="relative">
      {/* Navbar here */}
      <nav className="bg-transparent fixed w-full z-20 top-0 start-0">
        {/* Navbar content */}
      </nav>

      <div
        className="bg-cover bg-center absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/group-workers-organizing-protest_23-2151546471.jpg?ga=GA1.1.944051474.1710046769&semt=ais_hybrid)",
        }}
      >
        {/* This is the background image */}
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="text-center text-white px-6 py-4 bg-opacity-0 max-w-screen-lg mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Discover and <span className="text-[#f2ae01]">Advertise</span>{" "}
            Events
          </h1>
          <p className="text-xl mb-6">
            Explore and connect with exciting events happening around you.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="relative">
              <select
                className="bg-[#f14b17] text-white border-none rounded-lg px-4 py-3 appearance-none focus:outline-none pr-10 text-xl font-bold h-12 w-52"
                defaultValue="Coimbatore"
              >
                {cities.map((city, index) => (
                  <option
                    key={index}
                    value={city}
                    className="bg-white text-black py-3 px-4"
                  >
                    {city}
                  </option>
                ))}
              </select>
              <MapPinIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-white" />
            </div>
            <NavLink
              to="/explore"
              className="bg-[#f14b17] text-white font-bold rounded-lg px-6 py-3 hover:bg-[#e03a0d] transition-colors duration-300 flex items-center justify-center h-12 w-52 text-xl"
            >
              Explore Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
