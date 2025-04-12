import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "../components/Card";
import luxuryCars from "../data/data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CarPage = () => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const gridRef = useRef(null);

  // Extract unique brands from the cars data
  const brands = ["All", ...new Set(luxuryCars.map((car) => car.make))];

  // Filter cars based on selected brand
  const filteredCars =
    selectedBrand === "All"
      ? luxuryCars
      : luxuryCars.filter((car) => car.make === selectedBrand);

  // GSAP animations on mount
  useEffect(() => {
    setIsLoading(false);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [filteredCars]);

  // Filter section variants for Framer Motion
  const filterVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="body-div min-h-screen bg-black">
      {/* Animated Header */}
      <motion.div
        className="page-header py-8 text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-2">
          Luxury Auto Gallery
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore the world's finest automotive masterpieces
        </p>
      </motion.div>

      {/* Filter Toggle Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="px-6 py-3 bg-gray-800 text-white rounded-lg flex items-center gap-2 shadow-lg"
        >
          <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
          <motion.span
            animate={{ rotate: isFilterOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            ▼
          </motion.span>
        </motion.button>
      </div>

      {/* Collapsible Filter Section */}
      <AnimatePresence>
        {isFilterOpen && (
          <motion.div
            variants={filterVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden"
          >
            <div className="py-5 mb-8 border-b border-gray-700 max-w-6xl mx-auto">
              <h2 className="text-white mb-4 text-center text-xl md:text-2xl">
                Filter by Brand
              </h2>
              <div className="flex flex-wrap justify-center gap-2 px-4">
                {brands.map((brand) => (
                  <motion.button
                    key={brand}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-md text-sm md:text-base transition-all duration-200 ${
                      selectedBrand === brand
                        ? "bg-white text-black font-medium shadow-lg"
                        : "bg-gray-800 text-white hover:bg-gray-700 shadow-md"
                    }`}
                    onClick={() => {
                      setSelectedBrand(brand);
                      setIsFilterOpen(false);
                    }}
                  >
                    {brand}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cars Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {[...Array(8)].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
              }}
              className="bg-gray-800 rounded-xl h-80"
            />
          ))}
        </div>
      ) : (
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4"
          layout
        >
          <AnimatePresence>
            {filteredCars.map((item, index) => (
              <motion.div
                key={item.id || index}
                className="car-card"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
              >
                <Card car={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Floating Action Button */}
      <motion.div
        className="fixed bottom-8 right-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-xl"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default CarPage;
