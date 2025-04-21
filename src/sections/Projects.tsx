import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Interactive Portfolio',
      description: 'A creative portfolio website with 3D elements and smooth animations, showcasing various projects and skills.',
      imageUrl: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      tags: ['React', 'Three.js', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing.',
      imageUrl: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Travel Companion App',
      description: 'A mobile application that helps travelers plan their trips, discover attractions, and navigate new cities.',
      imageUrl: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Google Maps API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Augmented Reality Experience',
      description: 'An AR experience for product visualization, allowing users to place virtual furniture in their real environment.',
      imageUrl: 'https://images.pexels.com/photos/4144099/pexels-photo-4144099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ar',
      tags: ['AR.js', 'WebGL', 'Three.js'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Smart Home Dashboard',
      description: 'A dashboard for managing smart home devices with real-time monitoring and automation capabilities.',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web',
      tags: ['React', 'IoT', 'MQTT', 'WebSockets'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Fitness Tracking App',
      description: 'A mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
      imageUrl: 'https://images.pexels.com/photos/3912581/pexels-photo-3912581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'HealthKit'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
  
  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ar', label: 'AR/VR' },
  ];
  
  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category === activeFilter
  );
  
  return (
    <AnimatedSection id="projects" className="container-section">
      <SectionTitle 
        title="My Projects" 
        subtitle="Explore a selection of my recent work, showcasing a diverse range of skills and technologies."
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-5 py-2 rounded-full transition-all ${
              activeFilter === filter.id
                ? 'bg-accent-500 text-white shadow-md'
                : 'bg-gray-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 hover:bg-gray-200 dark:hover:bg-primary-700'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            tags={project.tags}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
            index={index}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Projects;