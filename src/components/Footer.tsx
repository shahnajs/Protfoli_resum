import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-50 dark:bg-primary-800 py-12 relative">
      <div className="container-section py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <a href="#home" className="text-2xl font-bold mb-4 inline-block">
              <span className="text-accent-500">S</span>
              <span className="dark:text-white">mrity</span>
            </a>
            <p className="text-primary-700 dark:text-primary-200 mt-4 max-w-md">
              Creating elegant, user-friendly solutions with a focus on performance and accessibility.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-700 dark:text-primary-300 hover:text-accent-500 dark:hover:text-accent-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-primary-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-accent-500 hover:dark:bg-accent-500 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-primary-800 dark:text-white group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-accent-500 hover:dark:bg-accent-500 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary-800 dark:text-white group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-accent-500 hover:dark:bg-accent-500 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary-800 dark:text-white group-hover:text-white" />
              </a>
              <a 
                href="mailto:contact@example.com" 
                className="w-10 h-10 rounded-full bg-white dark:bg-primary-700 flex items-center justify-center shadow-sm hover:shadow-md transition-all hover:bg-accent-500 hover:dark:bg-accent-500 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary-800 dark:text-white group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-200 dark:border-primary-700 mt-8 pt-8 text-center">
          <p className="text-primary-600 dark:text-primary-300">
            © {currentYear} Mst. Shahnaj Akter Smrity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;