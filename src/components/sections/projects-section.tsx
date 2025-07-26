'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { projects } from '@/lib/data.tsx';
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
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tighter">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {projects.map((project: Project, i: number) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="flex h-full transform-gpu flex-col overflow-hidden border-none bg-background/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-lg">
                <CardHeader>
                  <div className="overflow-hidden rounded-lg">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="h-auto w-full object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardTitle className="mb-2">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex w-full items-center justify-end">
                     <Button variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank">
                        GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
