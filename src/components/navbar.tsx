'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from './ui/button';
import DigitalClock from './digital-clock';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full border-r border-border/50 bg-background/50 p-6 backdrop-blur-lg transition-transform md:translate-x-0">
        <div className="flex h-full flex-col">
          <Link href="#home" className="mb-12 text-2xl font-bold tracking-tighter text-primary">
            Aravind R Nair
          </Link>

          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-lg text-foreground/80 transition-colors hover:text-foreground"
              >
                <span className="absolute -left-4 top-1 h-6 w-1 scale-y-0 rounded-full bg-primary transition-transform group-hover:scale-y-100"></span>
                {item.name}
              </a>
            ))}
          </nav>

          <div className="mt-auto">
            <div className="flex items-center justify-center gap-4 mb-4">
               <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/ardr000005" target="_blank"><Github/></Link>
               </Button>
               <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com/in/Aravind-R-Nair-8321482b2" target="_blank"><Linkedin/></Link>
               </Button>
            </div>
            <div className="flex items-center justify-between">
              <DigitalClock />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between border-b border-border/50 bg-background/50 p-4 backdrop-blur-lg md:hidden">
        <Link href="#home" className="text-xl font-bold tracking-tighter text-primary">
          AN
        </Link>
        <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              <Menu className="h-6 w-6" />
            </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/90 backdrop-blur-lg md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className="absolute right-0 top-0 h-full w-4/5 bg-background p-8 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="absolute right-4 top-4">
                <X className="h-6 w-6" />
              </Button>
              <nav className="mt-20 flex flex-col items-center space-y-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-3xl font-semibold text-foreground"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
               <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                  <DigitalClock />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
