'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { buttonVariants } from '../ui/button';
import { contactLinks } from '@/lib/data.tsx';
import { ContactLink } from '@/lib/types';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="mb-4 text-4xl font-bold tracking-tighter">Get In Touch</h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out to me.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((link: ContactLink) => (
            <Card key={link.name} className="group border-none bg-background/30 backdrop-blur-lg transition-all hover:bg-secondary/50 hover:shadow-lg">
              <Link href={link.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <CardContent className="flex h-full flex-col items-center justify-center p-6">
                  <link.icon className="mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110" />
                  <h3 className="font-bold">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.handle}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=arnair126@gmail.com"
            className={cn(buttonVariants({ size: 'lg' }), "mt-12 group")}
            target="_blank"
            rel="noopener noreferrer"
          >
            Say Hello <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
