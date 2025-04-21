import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import SkillBar from '../components/SkillBar';
import { Database, Layout, Server, PenTool, Leaf, Brush, Code, Bot } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Frontend Development', percentage: 90 },
    { name: 'UI/UX Design', percentage: 85 },
    { name: 'Backend Development', percentage: 75 },
    { name: 'Three.js / WebGL', percentage: 80 },
    { name: 'Responsive Design', percentage: 95 },
    { name: 'Animation', percentage: 85 },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 90 },
    { name: 'Creativity', percentage: 95 },
    { name: 'Communication', percentage: 85 },
    { name: 'Team Collaboration', percentage: 90 },
  ];

  const tools = [
    { icon: <Layout />, name: 'Frontend', items: ['React', 'Vue', 'Tailwind CSS', 'SASS'] },
    { icon: <Server />, name: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'Firebase'] },
    { icon: <Database />, name: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'] },
    { icon: <PenTool />, name: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
    { icon: <Leaf />, name: 'CMS', items: ['WordPress', 'Contentful', 'Strapi', 'Sanity'] },
    { icon: <Brush />, name: 'Graphics', items: ['Three.js', 'WebGL', 'Canvas', 'SVG'] },
    { icon: <Code />, name: 'Languages', items: ['JavaScript', 'TypeScript', 'HTML/CSS', 'Python'] },
    { icon: <Bot />, name: 'Other', items: ['Git', 'Docker', 'CI/CD', 'AWS'] },
  ];

  return (
    <AnimatedSection id="skills" className="container-section bg-primary-50 dark:bg-primary-900/30">
      <SectionTitle 
        title="My Skills" 
        subtitle="A comprehensive overview of my technical abilities, expertise, and tools I use to create engaging digital experiences."
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6 text-primary-900 dark:text-white"
          >
            Technical Skills
          </motion.h3>
          
          <div>
            {technicalSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
        
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold mb-6 text-primary-900 dark:text-white"
          >
            Soft Skills
          </motion.h3>
          
          <div>
            {softSkills.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 0.1}
                color="coral"
              />
            ))}
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold mb-8 text-primary-900 dark:text-white">
          Technologies & Tools
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-primary-800 p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-700 rounded-lg mr-3">
                  {React.cloneElement(tool.icon, { 
                    className: "w-5 h-5 text-accent-500" 
                  })}
                </div>
                <h4 className="font-semibold text-primary-900 dark:text-white">
                  {tool.name}
                </h4>
              </div>
              
              <ul className="text-sm space-y-1 text-primary-700 dark:text-primary-300">
                {tool.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default Skills;