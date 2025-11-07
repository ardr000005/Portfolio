import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export const projects = [
  {
    title: 'Medamex',
    description:
      "A decentralized medical record system that securely stores patient details on IPFS. In case of an accident, medical records can be retrieved using the patient's wallet address, ensuring quick and secure access to critical health data.",
    image: '/meda.png',
    image_hint: 'blockchain security',
    tags: ['Blockchain', 'React', 'Node.js', 'IPFS', 'Supabase'],
    githubUrl: 'https://github.com/Alfy001/KBA',
  },
  {
    title: 'Privio',
    description:
      'A traffic violation detection system that captures live images, classifies violations (e.g., overspeeding), and geotags incidents for accurate reporting. Uses Machine Learning for automated classification.',
    image: '/pri.png',
    image_hint: 'traffic camera',
    tags: ['Machine Learning', 'OpenCV', 'React', 'Node.js', 'Geolocation'],
    githubUrl: 'https://github.com/ardr000005/Privio',
  },
  {
    title: 'NeuroSense',
    description:
      'An ML-based autism trigger analysis and support system that uses behavioral data to identify stress indicators and provide sensory guidance.',
    image: '/neuro.png',
    image_hint: 'autism ml ai brainwave interface',
    tags: ['Machine Learning', 'Python', 'TensorFlow', 'Flask'],
  },
  {
    title: 'Canine Disease Detection',
    description:
      'AI-powered skin disease detection for dogs using CNN models trained on image datasets in collaboration with Kerala Veterinary University.',
    image: '/canine.png',
    image_hint: 'dog skin ai medical ml',
    tags: ['Deep Learning', 'TensorFlow', 'OpenCV', 'Python'],
  },
  {
    title: 'WA-Gemini',
    description:
      'A WhatsApp AI Assistant built with Node.js and Gemini API for real-time summarization, translation, and intelligent chat automation.',
    image: '/wag.png',
    image_hint: 'whatsapp ai bot interface',
    tags: ['Node.js', 'TypeScript', 'API', 'AI Assistant'],
    githubUrl: 'https://github.com/ardr000005/wa-gemini',
  },
  {
    title: 'Onyx Healthcare Backend',
    description:
      'IoT-enabled backend for healthcare kiosk systems that manage real-time patient health data and device communication securely.',
    image: '/onyx.png',
    image_hint: 'healthcare iot dashboard',
    tags: ['Node.js', 'IoT', 'MongoDB', 'Express'],
  },
  {
    title: 'Sigtron App Backend',
    description:
      'Smart lighting IoT backend with AWS integration, enabling remote device control and energy-efficient automation for smart buildings.',
    image: '/sig.png',
    image_hint: 'iot lighting automation',
    tags: ['AWS', 'Node.js', 'IoT', 'Express'],
  },
  {
    title: 'Li-Fi Communication System',
    description:
      'A secure data transmission prototype using visible light communication (VLC) through LEDs and photodiodes for short-range connectivity.',
    image: '/lifi.png',
    image_hint: 'light lifi communication led',
    tags: ['Embedded Systems', 'Networking', 'Arduino'],
    githubUrl: 'https://github.com/ardr000005/LIFI_COMMUNICATION',
  },
  {
    title: 'Churn Prediction',
    description:
      'An Artificial Neural Network model that predicts customer churn patterns based on structured datasets using TensorFlow and Pandas.',
    image: '/churn.png',
    image_hint: 'data science churn analysis',
    tags: ['Python', 'TensorFlow', 'Pandas', 'ANN'],
    githubUrl: 'https://github.com/ardr000005/churn-prediction',
  },
  {
    title: 'CAPTCHA OCR Reader',
    description:
      'A Streamlit web app that uses EasyOCR to automatically recognize and extract text from CAPTCHA images with high accuracy.',
    image: '/captcha.png',
    image_hint: 'captcha ocr ai',
    tags: ['Python', 'Streamlit', 'EasyOCR', 'Deep Learning'],
    githubUrl: 'https://github.com/ardr000005/Captcha_easyocr',
  },
  {
    title: 'Weather Info Map',
    description:
      'A React app that displays real-time weather data on a map using the OpenWeatherMap API and Leaflet integration.',
    image: '/weather.png',
    image_hint: 'weather map api',
    tags: ['React', 'Leaflet', 'API', 'JavaScript'],
    githubUrl: 'https://github.com/ardr000005/weather-info-map',
  },
  {
    title: 'Hand-Written Digit Recognition',
    description: 'MNIST Handwritten Digit Recognition using TensorFlow. A deep learning model that recognizes handwritten digits from the MNIST dataset. Includes data preprocessing, neural network building, training, evaluation, and visualization - a complete introduction to neural networks and computer vision.',
    image: '/hwd.png',
    image_hint: 'mnist digit recognition ai',
    tags: ['Deep Learning', 'TensorFlow', 'Keras', 'Python', 'Jupyter', 'Neural Networks', 'Computer Vision'],
    githubUrl: 'https://github.com/ardr000005/Hand-Written-Digit-Recognition',
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
    { name: 'Download CV', icon: FileText, url: '/resume.pdf', handle: 'View Resume' },
];
