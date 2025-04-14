import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

const Card = ({ car }) => {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:border-gray-600 transition-all duration-300 flex flex-col"
      whileHover={{ y: -5 }}
      style={{ height: "500px" }} // Fixed height for all cards
    >
      {/* Car Image - Fixed height container */}
      <div className="relative h-60 w-full overflow-hidden">
        {" "}
        {/* Fixed height for images */}
        <img
          src={`/${car.imageUrl}`}
          alt={car.model}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          style={{ minHeight: "100%", minWidth: "100%" }} // Ensures full coverage
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{car.model}</h3>
        </div>
      </div>

      {/* Car Details - Flex-grow to take remaining space */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold">{car.make}</h3>
            <p className="text-gray-400 text-sm">{car.model}</p>
          </div>
          <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium">
            {car.year}
          </span>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm">{car.horsepower} HP</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="text-sm">{car.acceleration} s 0-60</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span className="text-sm">{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm">{car.drivetrain}</span>
          </div>
        </div>

        {/* Price & CTA - Pushed to bottom */}
        <div className="mt-auto pt-3 border-t border-gray-800">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 text-sm">Starting at</p>
              <p className="text-xl font-bold">${car.price.toLocaleString()}</p>
            </div>
            <NavLink to={`/cars/${car.id}`}>
              <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
                View Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
