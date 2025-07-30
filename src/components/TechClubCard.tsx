import { LucideIcon } from 'lucide-react';

interface TechClubCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  color: 'blue' | 'red' | 'purple' | 'cyan';
  delay?: number;
}

const TechClubCard = ({ name, description, icon: Icon, color, delay = 0 }: TechClubCardProps) => {
  const colorClasses = {
    blue: 'border-neon-blue text-neon-blue shadow-neon-glow hover:bg-neon-blue/10',
    red: 'border-neon-red text-neon-red shadow-red-glow hover:bg-neon-red/10',
    purple: 'border-neon-purple text-neon-purple shadow-purple-glow hover:bg-neon-purple/10',
    cyan: 'border-neon-cyan text-neon-cyan shadow-card-glow hover:bg-neon-cyan/10',
  };

  return (
    <div 
      className={`group relative bg-card/30 backdrop-blur-sm border-2 ${colorClasses[color]} rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in cursor-pointer`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-cyber-gradient opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
          <Icon className="w-10 h-10" />
        </div>
        
        <h3 className="text-xl font-bold font-cyber text-center mb-3">
          {name}
        </h3>
        
        <p className="text-muted-foreground text-center text-sm leading-relaxed">
          {description}
        </p>
        
        {/* Circuit decoration */}
        <div className="absolute top-4 right-4 w-8 h-8 opacity-30">
          <div className="w-full h-0.5 bg-current absolute top-1/2 transform -translate-y-1/2"></div>
          <div className="h-full w-0.5 bg-current absolute left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default TechClubCard;