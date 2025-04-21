import React from 'react';
import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  name, 
  percentage, 
  color = 'accent', 
  delay = 0 
}) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-primary-900 dark:text-white">
          {name}
        </h3>
        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
          {percentage}%
        </span>
      </div>
      
      <div className="h-2 bg-gray-200 dark:bg-primary-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ 
            duration: 1, 
            delay: delay,
            ease: [0.34, 1.56, 0.64, 1] // Custom spring-like easing
          }}
          className={`h-full bg-${color}-500 rounded-full`}
          style={{ backgroundColor: color === 'accent' ? 'var(--tw-color-accent-500, #4ecdc4)' : '' }}
        />
      </div>
    </div>
  );
};

export default SkillBar;