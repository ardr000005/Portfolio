'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LandingOverlayProps = {
  isVisible: boolean;
  onFinished: () => void;
};

const typedText = 'Aravind R Nair';

export default function LandingOverlay({ isVisible, onFinished }: LandingOverlayProps) {
  const [step, setStep] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (!isVisible) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    if (step === 0) {
      timeoutId = setTimeout(() => setStep(1), 500);
    } else if (step === 1) {
      let i = 0;
      intervalId = setInterval(() => {
        setCurrentText(typedText.substring(0, i + 1));
        i++;
        if (i === typedText.length) {
          clearInterval(intervalId);
          timeoutId = setTimeout(() => onFinished(), 1000);
        }
      }, 100);
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [isVisible, step, onFinished]);


  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          <div className="w-full max-w-xl px-4">
            <motion.div
              className="relative mx-auto mb-8 h-12 rounded-full border bg-secondary shadow-lg"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: ['0%', '90%', '80%'], opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                🔍
              </span>
              <p className="absolute left-12 top-1/2 -translate-y-1/2 font-code text-foreground">
                {currentText}
                {step === 1 && <span className="animate-ping">|</span>}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
