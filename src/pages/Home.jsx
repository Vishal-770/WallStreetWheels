import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import luxuryCars from '../data/data';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const navigate = useNavigate();
  const featuredCars = [luxuryCars[0], luxuryCars[9], luxuryCars[15]]; // Ferrari, Bugatti, Rolls-Royce

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Intersection Observer for scroll animations
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [collectionsRef, collectionsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const featuredControls = useAnimation();
  const aboutControls = useAnimation();
  const collectionsControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    if (featuredInView) featuredControls.start("visible");
    if (aboutInView) aboutControls.start("visible");
    if (collectionsInView) collectionsControls.start("visible");
    if (ctaInView) ctaControls.start("visible");
  }, [featuredInView, aboutInView, collectionsInView, ctaInView]);

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="bgvideo.mp4" type="video/mp4" />
        </video>
        
        <motion.div 
          className="container mx-auto px-6 relative z-20 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={itemVariants}
          >
            WALL STREET WHEELS
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300"
            variants={itemVariants}
          >
            Curating the world's finest automotive masterpieces
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <button
              className="bg-white text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
              onClick={() => navigate('/cars')}
            >
              Explore Collection
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Vehicles */}
      <motion.section 
        ref={featuredRef}
        className="py-16 px-6"
        initial="hidden"
        animate={featuredControls}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Featured Investments
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {featuredCars.map((car, index) => (
              <motion.div 
                key={car.id}
                className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                onClick={() => navigate(`/cars/${car.id}`)}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={car.imageUrl}
                    alt={`${car.make} ${car.model}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{car.make} {car.model}</h3>
                  <p className="text-gray-400 mb-2">{car.year}</p>
                  <p className="text-xl">${car.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        ref={aboutRef}
        className="py-16 px-6 bg-gray-900"
        initial="hidden"
        animate={aboutControls}
        variants={containerVariants}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-1/2"
              variants={slideInLeft}
            >
              <div className="relative group">
                <video
                 autoPlay
                 loop
                 muted
                 playsInline
                  src="bgvideo1.mp4"
                  alt="Luxury Car"
                  className="w-full h-auto rounded-lg transform group-hover:scale-105 transition-transform duration-500"
                  play
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              variants={slideInRight}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automotive Excellence
              </h2>
              <p className="text-gray-300 mb-6">
                Wall Street Wheels specializes in connecting discerning collectors with the world's most exceptional vehicles. Each car in our collection represents the pinnacle of engineering, design, and performance.
              </p>
              <motion.div 
                className="grid grid-cols-2 gap-4 mb-8"
                variants={containerVariants}
              >
                <motion.div 
                  className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  variants={itemVariants}
                >
                  <p className="text-gray-400 text-sm">Vehicles in Stock</p>
                  <p className="text-2xl font-bold">{luxuryCars.length}</p>
                </motion.div>
                <motion.div 
                  className="bg-black p-4 rounded-lg hover:bg-gray-800 transition-colors"
                  variants={itemVariants}
                >
                  <p className="text-gray-400 text-sm">Average Value</p>
                  <p className="text-2xl font-bold">$450K+</p>
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
                  onClick={() => navigate('/about')}
                >
                  Our Standards
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Categories */}
      <motion.section 
        ref={collectionsRef}
        className="py-16 px-6"
        initial="hidden"
        animate={collectionsControls}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            variants={itemVariants}
          >
            Collections
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { name: "Supercars", count: 6, icon: "🚀" },
              { name: "Luxury Sedans", count: 5, icon: "🏆" },
              { name: "Classic Cars", count: 3, icon: "🕰️" },
              { name: "Hypercars", count: 2, icon: "⚡" }
            ].map((category, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer border border-transparent hover:border-white/20 group"
                onClick={() => navigate(`/cars?category=${category.name.toLowerCase()}`)}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4 group-hover:text-yellow-400 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.count} vehicles</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        ref={ctaRef}
        className="py-16 px-6 bg-gray-900"
        initial="hidden"
        animate={ctaControls}
        variants={fadeInVariants}
      >
        <div className="container mx-auto text-center max-w-3xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={itemVariants}
          >
            Begin Your Collection
          </motion.h2>
          <motion.p 
            className="text-gray-300 mb-8"
            variants={itemVariants}
          >
            Contact our specialists to discuss your automotive investment goals and acquisition requirements.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            variants={containerVariants}
          >
            <motion.button
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors hover:scale-105 transform transition-transform duration-300"
              onClick={() => navigate('/contact')}
              variants={itemVariants}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors hover:scale-105 transform transition-transform duration-300"
              onClick={() => navigate('/cars')}
              variants={itemVariants}
            >
              View Inventory
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;