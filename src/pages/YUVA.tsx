import { Button } from "@/components/ui/button";
import CountdownTimer from "@/components/CountdownTimer";
import EventCard from "@/components/EventCard";
import ScheduleTimeline from "@/components/ScheduleTimeline";
import { 
  Code2, 
  Lightbulb, 
  Music, 
  Users, 
  GraduationCap, 
  Trophy,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const YUVA = () => {
  const eventCategories = [
    {
      title: "Hackathons",
      description: "48-hour coding marathons to solve real-world problems with innovative solutions.",
      icon: Code2,
    },
    {
      title: "Project Expo",
      description: "Showcase your innovative projects and get recognition from industry experts.",
      icon: Lightbulb,
    },
    {
      title: "Cultural Night",
      description: "Celebrate creativity with music, dance, and artistic performances.",
      icon: Music,
    },
    {
      title: "International Conference",
      description: "Learn from global leaders and researchers in technology and innovation.",
      icon: Users,
    },
    {
      title: "School Expo",
      description: "Special showcase for school students to present their innovative ideas.",
      icon: GraduationCap,
    },
    {
      title: "Awards & Recognition",
      description: "Celebrate excellence and recognize outstanding contributions to innovation.",
      icon: Trophy,
    },
  ];

  const sponsors = [
    { name: "TechCorp", logo: "TC", tier: "Platinum" },
    { name: "InnovateLabs", logo: "IL", tier: "Gold" },
    { name: "FutureTech", logo: "FT", tier: "Silver" },
    { name: "CodeForge", logo: "CF", tier: "Bronze" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(34, 102, 255, 0.9), rgba(255, 107, 53, 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-90"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 font-display">
              <span className="inline-block animate-glow">YUVA</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              Ignite Innovation. Unleash Youth Power.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
              September 15–17, 2025 • SRM IST Trichy
            </p>
          </div>
          
          <div className="mb-12 animate-slide-up">
            <CountdownTimer />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="register" size="lg" className="text-lg px-8 py-4">
              Register Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 animate-float opacity-20">
          <Code2 className="h-16 w-16 text-white" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-20" style={{ animationDelay: '1s' }}>
          <Lightbulb className="h-12 w-12 text-white" />
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Event Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore diverse opportunities to showcase your skills, learn from experts, and connect with like-minded innovators.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <EventCard
                key={category.title}
                title={category.title}
                description={category.description}
                icon={category.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Event Schedule
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three days packed with innovation, learning, and celebration. Mark your calendars!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ScheduleTimeline />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-tech-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6 font-display">
            Ready to Join YUVA 2025?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of India's most exciting tech fest. Register now and secure your spot!
          </p>
          <Button variant="hero" size="lg" className="text-xl px-12 py-6">
            Register Today
            <Calendar className="h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Sponsors & Organizers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-display">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground">
              Proudly supported by leading organizations in technology and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {sponsors.map((sponsor, index) => (
              <div 
                key={sponsor.name}
                className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-electric transition-all duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-tech-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{sponsor.logo}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{sponsor.name}</h3>
                <span className="text-sm text-muted-foreground">{sponsor.tier} Partner</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-card-gradient rounded-2xl p-8 shadow-card border border-border/50 inline-block">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-display">Organized by</h3>
              <div className="text-xl font-semibold text-primary">SRM Institute of Science and Technology</div>
              <div className="text-lg text-muted-foreground">Trichy Campus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-3xl font-bold mb-4 font-display">YUVA 2025</h3>
              <p className="text-background/80 mb-4 max-w-md">
                India's premier tech fest bringing together young innovators, researchers, and technology enthusiasts from around the world.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-background hover:text-primary hover:bg-background/10">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-primary transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Schedule</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Speakers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Sponsors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>yuva@srmist.edu.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>SRM IST, Trichy</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2025 YUVA Tech Fest. All rights reserved. | SRM Institute of Science and Technology, Trichy</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YUVA;