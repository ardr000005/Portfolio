// Type definitions for the portfolio data

export interface Project {
  title: string;
  description: string;
  image: string;
  image_hint: string;
  tags: string[];
  githubUrl: string;
}

export interface Skill {
  name: string;
  iconUrl: string;
}

export interface SkillCategories {
  languages: Skill[];
  frameworks: Skill[];
  platforms: Skill[];
}

export interface ContactLink {
  name: string;
  icon: any; // Lucide icon component
  url: string;
  handle: string;
}
