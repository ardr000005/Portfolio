'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in both frontend and backend technologies, creating end-to-end solutions."
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Love tackling complex challenges and finding innovative solutions to real-world problems."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Strong believer in the power of teamwork and knowledge sharing to achieve excellence."
    },
    {
      icon: Zap,
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and stay updated with industry trends."
    }
  ];

  const interests = [
    "Blockchain Technology", "Machine Learning", "Web Development", 
    "Mobile Development"
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="mb-12 text-center text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          {/* Main About Card */}
          <Card className="overflow-hidden border-none bg-background/30 backdrop-blur-lg mb-12">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 min-h-[400px]">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-accent p-8">
                  <div className="w-40 h-40 rounded-full bg-background/90 text-primary flex items-center justify-center text-4xl font-bold shadow-2xl border-4 border-background/50">
                    ARN
                  </div>
                </div>

                <div className="flex flex-col justify-center p-8 md:col-span-4 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Computer Science Student & Developer
                    </h3>
                    <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                      I am a passionate and driven Computer Science student with a strong foundation in software development and a keen interest in creating innovative solutions. My journey in technology is fueled by a desire to build applications that are not only functional but also provide a delightful user experience.
                    </p>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      With experience in both frontend and backend technologies, I enjoy tackling complex challenges and turning ideas into reality. I'm proficient in frameworks like React,Node JS and Django, and always eager to learn new tools to expand my skillset. I believe in the power of collaboration and continuous learning to achieve excellence.
                    </p>
                  </div>

                  {/* Current Focus */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-primary">Currently Focusing On</h4>
                    <div className="flex flex-wrap gap-2">
                      {interests.map((interest) => (
                        <Badge key={interest} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </CardContent>
          </Card>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="h-full border-none bg-background/30 backdrop-blur-lg hover:bg-background/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2 text-foreground">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="border-none bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-lg">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">My Philosophy</h3>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  "Technology should empower people and solve real problems. I believe in writing clean, maintainable code 
                  and creating user experiences that are both beautiful and functional. Every project is an opportunity 
                  to learn something new and make a positive impact."
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
