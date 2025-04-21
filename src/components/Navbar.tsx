import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-primary-900/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-section py-0">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-10"
          >
            <a href="#home" className="text-2xl font-bold relative">
              <span className="text-accent-500">S</span>
              <span className="dark:text-white">mrity</span>
              <div className="absolute -bottom-1 left-0 h-1 w-8 bg-accent-500 rounded-full"></div>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-primary-800 dark:text-white/90 hover:text-accent-500 dark:hover:text-accent-400 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center z-10">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-6 h-6 text-accent-400" />
              ) : (
                <Moon className="w-6 h-6 text-primary-700" />
              )}
            </motion.button>

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-primary-800 transition-colors md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary-800 dark:text-white" />
              ) : (
                <Menu className="w-6 h-6 text-primary-800 dark:text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-white dark:bg-primary-900 flex flex-col items-center justify-center ${
              isOpen ? 'block' : 'hidden'
            } md:hidden`}
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-2xl text-primary-800 dark:text-white hover:text-accent-500 dark:hover:text-accent-400 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;