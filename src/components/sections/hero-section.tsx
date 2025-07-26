'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Download, Eye, Send } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="flex min-h-screen items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        <h1 className="text-5xl font-extrabold tracking-tighter md:text-7xl lg:text-8xl">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Aravind R Nair
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground md:text-xl">
          B.Tech Computer Science Student | Developer | Innovator
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="https://drive.google.com/drive/folders/12IrNQo-VkOWxRTSWkADhATowiDnR1jlo?usp=sharing" target="_blank" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#projects">
              <Eye className="mr-2 h-4 w-4" />
              View Projects
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              <Send className="mr-2 h-4 w-4" />
              Contact Me
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
