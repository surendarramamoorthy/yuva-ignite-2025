import { useState, useEffect } from 'react';

interface CyberCountdownProps {
  targetDate: string;
}

const CyberCountdown = ({ targetDate }: CyberCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days, color: 'neon-blue' },
    { label: 'HOURS', value: timeLeft.hours, color: 'neon-purple' },
    { label: 'MINUTES', value: timeLeft.minutes, color: 'neon-red' },
    { label: 'SECONDS', value: timeLeft.seconds, color: 'neon-cyan' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label}
          className="relative group animate-fade-in"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <div className="relative bg-card/50 backdrop-blur-sm border border-neon-blue/30 rounded-xl p-4 md:p-6 shadow-card-glow hover:shadow-neon-glow transition-all duration-300 group-hover:scale-105">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-cyber-gradient opacity-20 rounded-xl blur-sm group-hover:opacity-40 transition-opacity duration-300"></div>
            
            <div className="relative z-10 text-center">
              <div className={`text-2xl md:text-4xl font-bold font-cyber mb-2 text-${unit.color}`}>
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-cyber tracking-widest">
                {unit.label}
              </div>
            </div>
          </div>
          
          {/* Circuit lines connecting boxes */}
          {index < timeUnits.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-cyber-gradient opacity-60"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CyberCountdown;