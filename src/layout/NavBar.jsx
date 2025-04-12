import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navItems = [
    { name: 'home', label: 'Home' },
    { name: 'cars', label: 'Premium Cars' },
    { name: 'about', label: 'Our Legacy' },
    { name: 'contact', label: 'Contact' },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  const itemVariants = {
    open: { 
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { 
      y: 20,
      opacity: 0,
      transition: { duration: 0.2 }
    },
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black bg-opacity-95 py-2 shadow-xl' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM9 7.5A.75.75 0 009 9v1.5c.001.217.053.431.155.625a1.5 1.5 0 011.17.75 2.25 2.25 0 004.5 0 1.5 1.5 0 011.17-.75c.102-.194.154-.408.155-.625V9a.75.75 0 00-1.5 0v1.5h-.75a.75.75 0 000 1.5h.75v1.5a.75.75 0 001.5 0V15H15a.75.75 0 000-1.5h-.75V12a3 3 0 01-3 3 3 3 0 01-3-3V9a.75.75 0 00-.75-.75z" clipRule="evenodd" />
              </svg>
            </div>
            <motion.h1 
              className="text-white font-bold text-xl md:text-2xl tracking-tighter"
              whileHover={{ scale: 1.05 }}
            >
              WALL STREET <span className="text-gray-300">WHEELS</span>
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <NavLink
                  to={item.name === 'home' ? '/' : `/${item.name}`}
                  className={`text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${activeLink === item.name ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setActiveLink(item.name)}
                >
                  {item.label}
                </NavLink>
                {activeLink === item.name && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-8 flex flex-col items-end space-y-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                className="block h-0.5 bg-white"
              />
              <motion.span
                animate={isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: '80%' }}
                className="block h-0.5 bg-white"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8, width: '100%' } : { rotate: 0, y: 0, width: '60%' }}
                className="block h-0.5 bg-white"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={variants}
              className="fixed inset-0 bg-black bg-opacity-95 z-40 pt-24 px-4 md:hidden"
            >
              <motion.ul className="flex flex-col space-y-8 mt-12">
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavLink
                      to={item.name === 'home' ? '/' : `/${item.name}`}
                      className={`text-2xl uppercase tracking-wider font-bold ${activeLink === item.name ? 'text-white' : 'text-gray-400'}`}
                      onClick={() => {
                        setActiveLink(item.name);
                        setIsOpen(false);
                      }}
                    >
                      {item.label}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Social/Contact in mobile menu */}
              <motion.div 
                variants={itemVariants}
                className="absolute bottom-8 left-0 right-0 px-4"
              >
                <div className="border-t border-gray-800 pt-6">
                  <p className="text-gray-400 text-sm mb-4">EXCLUSIVE AUTOMOBILES</p>
                  <div className="flex space-x-4">
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-gray-300"
                      whileHover={{ y: -2 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-gray-300"
                      whileHover={{ y: -2 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="text-white hover:text-gray-300"
                      whileHover={{ y: -2 }}
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;