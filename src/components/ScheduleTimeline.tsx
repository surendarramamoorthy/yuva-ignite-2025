import { Clock, Calendar, MapPin } from 'lucide-react';

const scheduleEvents = [
  {
    date: 'September 15',
    time: '09:00 AM',
    title: 'Opening Ceremony',
    location: 'Main Auditorium',
    type: 'ceremony'
  },
  {
    date: 'September 15',
    time: '11:00 AM',
    title: 'Hackathon Begins',
    location: 'Tech Labs',
    type: 'hackathon'
  },
  {
    date: 'September 16',
    time: '02:00 PM',
    title: 'Project Expo',
    location: 'Exhibition Hall',
    type: 'expo'
  },
  {
    date: 'September 16',
    time: '07:00 PM',
    title: 'Cultural Night',
    location: 'Open Grounds',
    type: 'cultural'
  },
  {
    date: 'September 17',
    time: '10:00 AM',
    title: 'International Conference',
    location: 'Conference Hall',
    type: 'conference'
  },
  {
    date: 'September 17',
    time: '04:00 PM',
    title: 'Award Ceremony',
    location: 'Main Auditorium',
    type: 'ceremony'
  }
];

const ScheduleTimeline = () => {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2"></div>
      
      <div className="space-y-8">
        {scheduleEvents.map((event, index) => (
          <div 
            key={index}
            className={`relative flex items-center animate-fade-in ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-glow"></div>
            
            {/* Event card */}
            <div className={`ml-10 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2`}>
              <div className="bg-card-gradient rounded-xl p-6 shadow-card border border-border/50 hover:shadow-electric transition-all duration-300">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                  <Clock className="h-4 w-4 ml-2" />
                  <span>{event.time}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 font-display">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTimeline;