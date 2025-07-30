import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}

const AnimatedCounter = ({ targetValue, suffix = '', duration = 2000, delay = 0 }: AnimatedCounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          const timer = setTimeout(() => {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              
              // Easing function for smooth animation
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              setCurrentValue(Math.floor(targetValue * easedProgress));
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              }
            };
            animate();
          }, delay);
          
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`counter-${targetValue}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [targetValue, duration, delay, hasAnimated]);

  return (
    <span 
      id={`counter-${targetValue}`}
      className="text-4xl md:text-6xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text"
    >
      {currentValue.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;