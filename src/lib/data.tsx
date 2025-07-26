import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const projects = [
  {
    title: 'Medamex',
    description: 'A decentralized medical record system that securely stores patient details on IPFS. In case of an accident, medical records can be retrieved using the patient\'s wallet address, ensuring quick and secure access to critical health data.',
    image: '/meda.png',
    image_hint: 'blockchain security',
    tags: ['Blockchain', 'React', 'Node.js', 'IPFS', 'Supabase'],
    githubUrl: 'https://github.com/Alfy001/KBA',
  },
  {
    title: 'Privio',
    description: 'A traffic violation detection system that captures live images, classifies violations (e.g., overspeeding), and geotags incidents for accurate reporting. Uses Machine Learning for automated classification.',
    image: '/pri.png',
    image_hint: 'traffic camera',
    tags: ['Machine Learning', 'OpenCV', 'React', 'Node.js', 'Geolocation'],
    githubUrl: 'https://github.com/ardr000005/Privio',
  },
];

const iconUrl = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;
const iconPlainUrl = (name: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-plain.svg`;


export const skills = {
    languages: [
      { name: 'JavaScript', iconUrl: iconUrl('javascript') },
      { name: 'Python', iconUrl: iconUrl('python') },
      { name: 'Java', iconUrl: iconUrl('java') },
      { name: 'C', iconUrl: iconUrl('c') },
      { name: 'Solidity', iconUrl: iconUrl('solidity') },
    ],
    frameworks: [
      { name: 'React', iconUrl: iconUrl('react') },
      { name: 'Node.js', iconUrl: iconUrl('nodejs') },
      { name: 'Express.js', iconUrl: iconUrl('express') },
      { name: 'Django', iconUrl: iconPlainUrl('django') },
      { name: 'Flask', iconUrl: iconUrl('flask') },
      { name: 'Web3.js', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/web3js/web3js-original.svg' },
      { name: 'TensorFlow', iconUrl: iconUrl('tensorflow') },
      { name: 'OpenCV', iconUrl: iconUrl('opencv') },
    ],
    platforms: [
      { name: 'Git', iconUrl: iconUrl('git') },
      { name: 'GitHub', iconUrl: iconUrl('github') },
      { name: 'Firebase', iconUrl: iconPlainUrl('firebase') },
      { name: 'Vercel', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { name: 'MongoDB', iconUrl: iconUrl('mongodb') },
      { name: 'PostgreSQL', iconUrl: iconUrl('postgresql') },
      { name: 'MySQL', iconUrl: iconUrl('mysql') },
    ],
};

export const contactLinks = [
    { name: 'Email', icon: Mail, url: 'mailto:arnair126@gmail.com', handle: 'arnair126@gmail.com' },
    { name: 'GitHub', icon: Github, url: 'https://github.com/ardr000005', handle: '@ardr000005' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/Aravind-R-Nair-8321482b2', handle: 'Aravind R Nair' },
    { name: 'Download CV', icon: FileText, url: 'https://drive.google.com/drive/folders/12IrNQo-VkOWxRTSWkADhATowiDnR1jlo?usp=sharing', handle: 'View Resume' },
];
