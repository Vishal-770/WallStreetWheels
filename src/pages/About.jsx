import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCar,
  FaTrophy,
  FaUsers,
  FaGlobe,
  FaArrowRight,
  FaChevronRight,
} from "react-icons/fa";
import { NavLink } from "react-router";

function About() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [activeMilestone, setActiveMilestone] = useState(0);
  const carouselRef = useRef(null);

  // Core principles with enhanced data
  const principles = [
    {
      title: "Exclusivity",
      description:
        "Access to rare, limited-edition vehicles from private collections worldwide",
      stats: "85% limited edition inventory",
      hoverEffect: "scale-105",
    },
    {
      title: "Discretion",
      description:
        "Private transactions with complete confidentiality for high-profile clients",
      stats: "100% confidential transactions",
      hoverEffect: "-translate-y-2",
    },
    {
      title: "Precision",
      description:
        "Comprehensive 200-point certification by master technicians",
      stats: "0.2% defect rate across sales",
      hoverEffect: "rotate-1",
    },
    {
      title: "Innovation",
      description:
        "Cutting-edge vehicle technology and immersive digital showroom experiences",
      stats: "37+ technology partnerships",
      hoverEffect: "scale-105 -rotate-1",
    },
    {
      title: "Global Network",
      description:
        "Extensive network of buyers and sellers across international markets",
      stats: "Serving 50+ countries worldwide",
      hoverEffect: "translate-x-2",
    },
  ];

  // New milestones data to replace timeline
  const milestones = [
    {
      year: "2008",
      title: "Manhattan Beginnings",
      description:
        "Founded our flagship showroom in New York's financial district",
      highlight: "First 10 luxury vehicles sold",
      image:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    },
    {
      year: "2015",
      title: "Global Recognition",
      description: "Awarded Luxury Automotive Retailer of the Year",
      highlight: "First international showroom opened",
      image:
        "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    },
    {
      year: "2023",
      title: "Digital Revolution",
      description: "Launched immersive VR showroom experience",
      highlight: "12 countries served worldwide",
      image:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="video1.mp4" type="video/mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            OUR LEGACY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto"
          >
            Redefining luxury automotive experiences since 2008
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <a href="https://www.youtube.com/@WallStreetWheels">
              {" "}
              <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2">
                EXPLORE OUR STORY <FaArrowRight />
              </button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="animate-bounce bg-white/20 p-2 rounded-full">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            BEYOND THE ORDINARY
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            At WallStreet Wheels, we don't just sell cars—we curate automotive
            masterpieces for collectors who demand excellence. Our concierge
            approach redefines what it means to own the world's most exclusive
            vehicles.
          </p>
        </motion.div>

        {/* Principles Carousel */}
        {/* Principles Carousel */}
        <div ref={carouselRef} className="relative overflow-hidden mb-20">
          {/* Custom scrollbar container */}
          <div className="relative">
            <div
              className="flex space-x-8 pb-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#ffffff #000000",
              }}
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  className={`flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 snap-center ${
                    activePrinciple === index ? "opacity-100" : "opacity-70"
                  } transition-opacity duration-300`}
                  whileHover={{ scale: activePrinciple === index ? 1.02 : 1 }}
                  onClick={() => setActivePrinciple(index)}
                >
                  <div
                    className={`bg-gray-900 p-8 rounded-xl h-full transition-all duration-300 ${
                      principle.hoverEffect
                    } ${
                      activePrinciple === index
                        ? "border-2 border-white"
                        : "border border-gray-700"
                    }`}
                  >
                    <div className="text-4xl mb-4">0{index + 1}</div>
                    <h3 className="text-2xl font-bold mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {principle.description}
                    </p>
                    <p className="text-white text-sm font-medium">
                      {principle.stats}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom scrollbar track */}
          </div>

          {/* Navigation dots - unchanged */}
          <div className="flex justify-center gap-2 mt-6">
            {principles.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActivePrinciple(index);
                  // Optional: Scroll to the selected item
                  carouselRef.current
                    ?.querySelector(`div:nth-child(${index + 1})`)
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activePrinciple === index ? "bg-white w-6" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Milestones Section - Replacing Timeline */}
      <section className="py-20 bg-gray-900/50 relative">
        <div className="absolute inset-0 -z-10 opacity-20 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1583&q=80')] bg-cover bg-center"></div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            KEY MILESTONES
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div
                  className={`h-full bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ${
                    activeMilestone === index
                      ? "ring-2 ring-white"
                      : "hover:ring-1 hover:ring-gray-500"
                  }`}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-3xl font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {milestone.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">
                        {milestone.highlight}
                      </span>
                      <button
                        onClick={() => setActiveMilestone(index)}
                        className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition"
                      >
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expanded content overlay */}
                <AnimatePresence>
                  {activeMilestone === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-black/90 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center"
                      onClick={() => setActiveMilestone(null)}
                    >
                      <h3 className="text-2xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {milestone.description}
                      </p>
                      <div className="mt-auto pt-4 border-t border-gray-700">
                        <button className="text-white font-medium flex items-center gap-2 hover:gap-3 transition-all">
                          Read full case study <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              THE FUTURE OF LUXURY
            </h2>
            <div className="w-24 h-1 bg-white mb-8"></div>
            <p className="text-xl text-gray-300 mb-6">
              As we accelerate into the future, WallStreet Wheels is pioneering
              sustainable luxury with our curated selection of high-performance
              electric and hybrid supercars.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              Our 2025 initiative includes carbon-neutral deliveries and an
              exclusive members-only test track experience.
            </p>
            <NavLink to={"/contact"}>
              {" "}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition flex items-center gap-2"
              >
                JOIN OUR FUTURE <FaArrowRight />
              </motion.button>
            </NavLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                src="video.mp4"
                alt="Future of luxury cars"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <motion.div
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-white text-black px-4 py-2 rounded-lg font-bold text-lg shadow-xl"
            >
              COMING 2025
            </motion.div>
            <div className="absolute -bottom-6 -left-6 bg-black text-white px-4 py-2 rounded-lg font-bold text-lg border-2 border-white shadow-xl">
              INNOVATION
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
