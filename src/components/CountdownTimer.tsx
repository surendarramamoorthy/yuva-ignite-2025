import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-09-15T00:00:00');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

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
  }, []);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {timeUnits.map((unit, index) => (
        <div 
          key={unit.label}
          className="text-center animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="bg-card-gradient rounded-2xl p-4 md:p-6 shadow-card border border-border/50 min-w-[80px] md:min-w-[100px]">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-1 font-display">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-medium">
              {unit.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;