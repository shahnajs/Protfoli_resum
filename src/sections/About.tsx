import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import { Code, Globe, Lightbulb as LightBulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      value: "3+",
      label: "Years Experience",
      icon: <Code className="w-6 h-6 text-accent-500" />,
    },
    {
      value: "15+",
      label: "Projects Completed",
      icon: <Globe className="w-6 h-6 text-accent-500" />,
    },
    {
      value: "5+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6 text-accent-500" />,
    },
    {
      value: "10+",
      label: "Creative Solutions",
      icon: <LightBulb className="w-6 h-6 text-accent-500" />,
    },
  ];

  return (
    <AnimatedSection id="about" className="container-section">
      <SectionTitle 
        title="About Me" 
        subtitle="Learn about my background, skills, and what drives me to create exceptional digital experiences."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
    <div className="relative">
      <div className="aspect-square bg-gradient-to-br from-primary-700 to-accent-500 rounded-2xl overflow-hidden shadow-xl">
        <img
          src="/mypic.jpg" // Replace this with the actual path to your nature image
          alt="Beautiful Nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent"></div>
      </div>
  


            
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute -bottom-8 -right-8 bg-white dark:bg-primary-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-2xl text-primary-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary-600 dark:text-primary-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-4 text-primary-900 dark:text-white"
          >
            My journey in creative development
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-primary-800 dark:text-primary-200"
          >
            <p>
              I am a passionate designer and developer with a focus on creating immersive digital experiences. 
              With over 3 years of experience in the industry, I've honed my skills in web development, 
              UI/UX design, and interactive media.
            </p>
            
            <p>
              My approach combines technical precision with creative vision, allowing me to build 
              solutions that are not only functionally robust but also aesthetically pleasing and 
              user-friendly. I'm particularly interested in the intersection of technology and design, 
              where innovative experiences come to life.
            </p>
            
            <p>
              When I'm not coding or designing, you'll find me exploring new technologies, 
              contributing to open-source projects, or finding inspiration in art and nature.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <a href="#contact" className="btn-primary inline-flex items-center">
              Let's Connect
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;