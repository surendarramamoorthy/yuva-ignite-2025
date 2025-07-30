import { LucideIcon } from 'lucide-react';

interface EventCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const EventCard = ({ title, description, icon: Icon, delay = 0 }: EventCardProps) => {
  return (
    <div 
      className="group bg-card-gradient rounded-2xl p-6 shadow-card border border-border/50 hover:shadow-electric hover:scale-105 transition-all duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-4">
        <div className="w-12 h-12 bg-tech-gradient rounded-xl flex items-center justify-center group-hover:animate-float">
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default EventCard;