'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    const particleCount = 5000;
    const particles = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const colorLight = new THREE.Color('hsl(145, 58%, 54%)'); // Primary color
    const colorDark = new THREE.Color('hsl(75, 100%, 50%)'); // Accent color

    for (let i = 0; i < particleCount * 3; i++) {
      particles[i] = (Math.random() - 0.5) * 10;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    
    camera.position.z = 5;
    
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      particleSystem.rotation.y += 0.0002;
      particleSystem.rotation.x += 0.0002;

      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if(renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    // This part could be used to update colors if needed, but the current setup is static.
  }, [theme]);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
};

export default ThreeBackground;
