'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { projects } from '@/lib/data.tsx'; // Keep your .tsx import
import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter">
          My Projects
        </h2>
        
        {/* Debug: Check if projects are loading */}
        {projects.length === 0 ? (
          <div className="text-center text-red-500">
            No projects found. Check data.tsx
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex"
              >
                <Card className="flex flex-col w-full overflow-hidden border border-border/40 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:bg-card/70">
                  <CardHeader className="p-0">
                    <div className="relative aspect-video overflow-hidden bg-muted/20">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/600x400/1e293b/64748b?text=${encodeURIComponent(project.title)}`;
                        }}
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1 p-6">
                    <CardTitle className="mb-3 text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="p-6 pt-0 flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs px-2 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex w-full justify-end">
                      {project.githubUrl ? (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          asChild
                          className="gap-2"
                        >
                          <Link 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            Code
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button 
                          variant="outline" 
                          size="sm" 
                          disabled
                          className="gap-2"
                        >
                          Private
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;