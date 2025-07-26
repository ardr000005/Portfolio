'use client';

import { motion } from 'framer-motion';
import SkillsSphere from '../skills-sphere';
import { skills } from '@/lib/data.tsx';

const SkillsSection = () => {
  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="py-16 md:py-24 overflow-hidden relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter mb-8 leading-[1.2] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-1"> {/* Added pb-1 */}
  Technologies I Use
</h2>

          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Explore my technical toolkit
          </p>
        </motion.div>

        {/* 3D Sphere */}
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16 overflow-visible"
        >

          <SkillsSphere />
          
          {/* Floating elements for visual enhancement */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse animation-delay-1000" />
          <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-primary/20 rounded-full animate-pulse animation-delay-2000" />
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {skillCategories.map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 capitalize text-primary">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {skillList.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                  >
                    <img
                      src={skill.iconUrl}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                    <span className="text-sm font-medium text-foreground/90">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
