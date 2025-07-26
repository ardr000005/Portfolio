'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from 'next-themes';
import { skills } from '@/lib/data.tsx';

const SkillsSphere = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;
    
    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    currentMount.innerHTML = ''; // Clear previous canvas
    currentMount.appendChild(renderer.domElement);
    
    // --- Skills Data ---
    const allSkillIcons = (Object.values(skills)).flat().map(skill => skill.iconUrl);

    // --- Create Image Sprites from URLs ---
    const textureLoader = new THREE.TextureLoader();
    const createIconSprite = (imageUrl: string) => {
      const texture = textureLoader.load(imageUrl);
      texture.generateMipmaps = false;
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      
      const material = new THREE.SpriteMaterial({ 
        map: texture, 
        transparent: true,
        alphaTest: 0.1
      });
      const sprite = new THREE.Sprite(material);
      
      // Responsive scaling based on screen size
      const baseScale = isMobile ? 0.8 : 1.2;
      const scaleFactor = Math.min(currentMount.clientWidth / 800, 1.5);
      const finalScale = baseScale * scaleFactor;
      
      sprite.scale.set(finalScale, finalScale, finalScale);
      return sprite;
    };
    
    // --- Position on Sphere (Fibonacci Lattice) ---
    const tagGroup = new THREE.Group();
    
    // Responsive radius calculation
    const getResponsiveRadius = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      const minDimension = Math.min(width, height);
      
      if (isMobile) {
        return Math.min(minDimension / 40, 8);
      } else {
        return Math.min(width / 70, 15);
      }
    };
    
    let radius = getResponsiveRadius();
    const samples = allSkillIcons.length;
    const phi = Math.PI * (3. - Math.sqrt(5.));
    
    for (let i = 0; i < samples; i++) {
        const y = 1 - (i / (samples - 1)) * 2;
        const radiusAtY = Math.sqrt(1 - y * y);
        const theta = phi * i;
        const x = Math.cos(theta) * radiusAtY;
        const z = Math.sin(theta) * radiusAtY;

        const sprite = createIconSprite(allSkillIcons[i]);
        sprite.position.set(x * radius, y * radius, z * radius);
        tagGroup.add(sprite);
    }

    scene.add(tagGroup);
    
    // Responsive camera positioning
    const setCameraPosition = () => {
      if (isMobile) {
        camera.position.z = radius * 2.5;
      } else {
        camera.position.z = radius * 2.1;
      }
    };
    
    setCameraPosition();
    
    // --- Mouse/Touch Interaction ---
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isInteracting = false;
    
    const windowHalfX = currentMount.clientWidth / 2;
    const windowHalfY = currentMount.clientHeight / 2;

    const updateInteraction = (clientX: number, clientY: number) => {
      mouseX = clientX - windowHalfX;
      mouseY = clientY - windowHalfY;
      targetRotationY = (mouseX / windowHalfX) * (isMobile ? 0.3 : 0.5);
      targetRotationX = (mouseY / windowHalfY) * (isMobile ? 0.3 : 0.5);
    };

    // Mouse events
    const onMouseMove = (event: MouseEvent) => {
      if (!isInteracting) return;
      updateInteraction(event.clientX, event.clientY);
    };

    const onMouseDown = () => {
      isInteracting = true;
      currentMount.style.cursor = 'grabbing';
    };

    const onMouseUp = () => {
      isInteracting = false;
      currentMount.style.cursor = 'grab';
    };

    // Touch events for mobile
    const onTouchMove = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1) {
        updateInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    const onTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      if (event.touches.length === 1) {
        updateInteraction(event.touches[0].clientX, event.touches[0].clientY);
      }
    };

    // Add event listeners
    currentMount.addEventListener('mousemove', onMouseMove);
    currentMount.addEventListener('mousedown', onMouseDown);
    currentMount.addEventListener('mouseup', onMouseUp);
    currentMount.addEventListener('mouseleave', onMouseUp);
    
    if (isMobile) {
      currentMount.addEventListener('touchmove', onTouchMove, { passive: false });
      currentMount.addEventListener('touchstart', onTouchStart, { passive: false });
    }

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const deltaTime = clock.getDelta();
      const autoRotationSpeed = isMobile ? 0.0003 : 0.0005;
      const dampingFactor = isMobile ? 0.015 : 0.02;
      
      // Auto-rotation with user interaction
      tagGroup.rotation.y += (targetRotationY - tagGroup.rotation.y) * dampingFactor + autoRotationSpeed;
      tagGroup.rotation.x += (targetRotationX - tagGroup.rotation.x) * dampingFactor;
      
      // Gentle bobbing animation
      tagGroup.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.1;
      
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);

      // Recalculate responsive values
      const newRadius = getResponsiveRadius();
      setCameraPosition();
      
      // Update sprite scales
      const scaleFactor = Math.min(newWidth / 800, 1.5);
      const baseScale = isMobile ? 0.8 : 1.2;
      const finalScale = baseScale * scaleFactor;
      
      tagGroup.children.forEach((child, i) => {
        if (child instanceof THREE.Sprite) {
          child.scale.set(finalScale, finalScale, finalScale);
          
          // Recalculate positions
          const y = 1 - (i / (samples - 1)) * 2;
          const radiusAtY = Math.sqrt(1 - y * y);
          const theta = phi * i;
          const x = Math.cos(theta) * radiusAtY;
          const z = Math.sin(theta) * radiusAtY;
          child.position.set(x * newRadius, y * newRadius, z * newRadius);
        }
      });
      
      radius = newRadius;
    };
    
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      currentMount.removeEventListener('mousemove', onMouseMove);
      currentMount.removeEventListener('mousedown', onMouseDown);
      currentMount.removeEventListener('mouseup', onMouseUp);
      currentMount.removeEventListener('mouseleave', onMouseUp);
      
      if (isMobile) {
        currentMount.removeEventListener('touchmove', onTouchMove);
        currentMount.removeEventListener('touchstart', onTouchStart);
      }
      
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      
      // Dispose textures and materials
      tagGroup.children.forEach(child => {
        if(child instanceof THREE.Sprite) {
          child.material.map?.dispose();
          child.material.dispose();
        }
      });
    };
  }, [resolvedTheme, isMobile]);

  return (
    <div 
      ref={mountRef} 
      className="relative w-full cursor-grab active:cursor-grabbing touch-none select-none"
      style={{ 
        height: isMobile ? '60vh' : '70vh',
        minHeight: isMobile ? '400px' : '500px'
      }}
    />
  );
};

export default SkillsSphere;
