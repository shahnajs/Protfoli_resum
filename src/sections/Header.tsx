import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import ThreeCanvas from '../components/ThreeCanvas';

const Header: React.FC = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeCanvas />
      
      <div className="container-section relative z-10">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="heading-1"
          >
            Hello, I'm <span className="text-accent-500 font-bold">Shahnaj Akter Smrity</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-700 dark:text-primary-300 my-6"
          >
            Creating elegant digital experiences with code & creativity
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-primary-800 dark:text-primary-200 max-w-2xl mb-10"
          >
            Passionate about building immersive web experiences that blend 
            cutting-edge technology with intuitive design.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="btn-primary inline-flex items-center">
              View My Work
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            
            <a href="#contact" className="btn-secondary inline-flex items-center">
              Download Resume
              <Download className="ml-2 w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </header>
  );
};

export default Header;