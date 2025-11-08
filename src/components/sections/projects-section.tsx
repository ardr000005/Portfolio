'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { projects } from '@/lib/data';
import { Project } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';

const ProjectsSection = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
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
    <section
      id="projects"
      className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.05 }} // trigger sooner for mobile
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="mb-12 text-center text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          My Projects
        </h2>

        {projects.length === 0 ? (
          <div className="text-center text-red-500">
            No projects found. Check <code>data.tsx</code>.
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project: Project, i: number) => (
              <motion.div
                key={project.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="flex"
              >
                <Card className="flex flex-col w-full overflow-hidden border border-border/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:bg-card/80">
                  
                  {/* ---------- IMAGE SECTION ---------- */}
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-muted/30">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://placehold.co/600x400/1e293b/64748b?text=${encodeURIComponent(project.title)}`;
                        }}
                      />
                    </div>
                  </CardHeader>

                  {/* ---------- CONTENT SECTION ---------- */}
                  <CardContent className="flex-1 p-5">
                    <CardTitle className="mb-2 text-lg sm:text-xl font-semibold">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardContent>

                  {/* ---------- FOOTER SECTION ---------- */}
                  <CardFooter className="p-5 pt-0 flex flex-col gap-4">
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
                            Code <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="gap-2"
                        >
                          Private <ArrowUpRight className="h-4 w-4" />
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
