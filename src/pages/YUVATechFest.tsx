import { Button } from "@/components/ui/button";
import CyberCountdown from "@/components/CyberCountdown";
import AnimatedCounter from "@/components/AnimatedCounter";
import TechClubCard from "@/components/TechClubCard";
import CyberGallery from "@/components/CyberGallery";
import { 
  Cpu,
  Zap,
  Code2,
  Bot,
  Shield,
  Rocket,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Play,
  ExternalLink,
  Users,
  Trophy,
  Globe
} from 'lucide-react';
import yuvaLogo from '@/assets/yuva-logo.png';
import circuitBg from '@/assets/circuit-bg.jpg';

const YUVATechFest = () => {
  const techClubs = [
    {
      name: "CYBERANZEN",
      description: "Cybersecurity warriors defending the digital frontier with advanced threat analysis.",
      icon: Shield,
      color: 'blue' as const,
    },
    {
      name: "ROBOTHINKERS",
      description: "Mechanical minds creating autonomous systems that shape tomorrow's world.",
      icon: Bot,
      color: 'red' as const,
    },
    {
      name: "CODE FORGE",
      description: "Elite programmers forging innovative solutions through cutting-edge technology.",
      icon: Code2,
      color: 'purple' as const,
    },
    {
      name: "AI NEXUS",
      description: "Neural network pioneers pushing the boundaries of artificial intelligence.",
      icon: Cpu,
      color: 'cyan' as const,
    },
  ];

  const galleryImages = [
    { id: 1, src: "", title: "Hackathon 2024", event: "48-hour coding marathon" },
    { id: 2, src: "", title: "Robot Wars", event: "Autonomous combat competition" },
    { id: 3, src: "", title: "AI Summit", event: "Machine learning conference" },
    { id: 4, src: "", title: "Cyber Challenge", event: "Security penetration testing" },
    { id: 5, src: "", title: "Tech Expo", event: "Innovation showcase" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${circuitBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80"></div>
        <div className="absolute inset-0 bg-glow-gradient"></div>
        
        {/* Floating circuit elements */}
        <div className="absolute top-20 left-10 animate-float opacity-30">
          <Cpu className="h-16 w-16 text-neon-blue" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float opacity-30" style={{ animationDelay: '1s' }}>
          <Zap className="h-12 w-12 text-neon-purple" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float opacity-20" style={{ animationDelay: '2s' }}>
          <Bot className="h-14 w-14 text-neon-red" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Animated YUVA Logo */}
          <div className="animate-fade-in mb-8">
            <img 
              src={yuvaLogo} 
              alt="YUVA Logo" 
              className="h-32 md:h-48 mx-auto mb-6 drop-shadow-2xl animate-glow"
            />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text mb-6 animate-glow">
              YUVA
            </h1>
          </div>
          
          <div className="animate-slide-up mb-8">
            <p className="text-xl md:text-3xl font-cyber text-neon-blue mb-4 tracking-wider">
              IGNITE INNOVATION
            </p>
            <p className="text-xl md:text-3xl font-cyber text-neon-red mb-6 tracking-wider">
              UNLEASH YOUTH POWER
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              September 15–17, 2025 • SRM IST Trichy
            </p>
          </div>
          
          {/* Countdown Timer */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CyberCountdown targetDate="2025-09-15T00:00:00" />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="battle" size="lg" className="text-xl px-8 py-4">
              <Rocket className="h-6 w-6 mr-2" />
              JOIN THE BATTLE
            </Button>
            <Button variant="neon" size="lg" className="text-xl px-8 py-4">
              <Play className="h-6 w-6 mr-2" />
              WATCH TRAILER
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text mb-6">
              BREAKTHROUGH BATTLEGROUNDS
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              YUVA isn't just a tech fest—it's a revolution. Where brilliant minds collide, 
              innovations are born, and the future is coded. Join thousands of tech warriors 
              in the ultimate battle of creativity, skill, and determination.
            </p>
          </div>
          
          {/* Video Background Placeholder */}
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-card/30 backdrop-blur-sm border border-neon-blue/30 rounded-2xl flex items-center justify-center shadow-neon-glow">
              <div className="text-center">
                <Play className="h-16 w-16 text-neon-blue mx-auto mb-4" />
                <p className="text-lg font-cyber text-neon-blue">THEME VIDEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-card/30 backdrop-blur-sm border border-neon-blue/30 rounded-2xl p-8 shadow-card-glow hover:shadow-neon-glow transition-all duration-300 group-hover:scale-105">
                <AnimatedCounter targetValue={50} suffix="+" delay={0} />
                <p className="text-xl font-cyber text-neon-blue mt-4">EVENTS</p>
                <p className="text-muted-foreground mt-2">Technical & Cultural</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-card/30 backdrop-blur-sm border border-neon-red/30 rounded-2xl p-8 shadow-card-glow hover:shadow-red-glow transition-all duration-300 group-hover:scale-105">
                <AnimatedCounter targetValue={10000} suffix="+" delay={200} />
                <p className="text-xl font-cyber text-neon-red mt-4">FOOTFALL</p>
                <p className="text-muted-foreground mt-2">Expected Participants</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-card/30 backdrop-blur-sm border border-neon-purple/30 rounded-2xl p-8 shadow-card-glow hover:shadow-purple-glow transition-all duration-300 group-hover:scale-105">
                <div className="text-4xl md:text-6xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text">
                  NATIONAL
                </div>
                <p className="text-xl font-cyber text-neon-purple mt-4">LEVEL</p>
                <p className="text-muted-foreground mt-2">Competitions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Clubs Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text mb-6">
              TECHNICAL DIVISIONS
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Elite tech squadrons leading the charge in their specialized domains
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techClubs.map((club, index) => (
              <TechClubCard
                key={club.name}
                name={club.name}
                description={club.description}
                icon={club.icon}
                color={club.color}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-cyber text-transparent bg-cyber-gradient bg-clip-text mb-6">
              BATTLE ARCHIVES
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Relive the epic moments from previous YUVA battlegrounds
            </p>
          </div>
          
          <CyberGallery images={galleryImages} />
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20 bg-cyber-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold font-cyber text-background mb-6">
            READY FOR BATTLE?
          </h2>
          <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
            The greatest tech warriors are forged in the fires of competition. 
            Will you rise to the challenge?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="cyber" size="lg" className="text-xl px-12 py-6 bg-background text-neon-blue">
              <Calendar className="h-6 w-6 mr-2" />
              REGISTER NOW
            </Button>
            <Button variant="neon" size="lg" className="text-xl px-12 py-6 bg-transparent border-background text-background hover:bg-background hover:text-neon-blue">
              <ExternalLink className="h-6 w-6 mr-2" />
              EXPLORE EVENTS
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t border-neon-blue/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <img src={yuvaLogo} alt="YUVA" className="h-12 mr-4" />
                <h3 className="text-2xl font-bold font-cyber text-neon-blue">YUVA 2025</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                India's premier tech battleground where innovation meets determination. 
                Join the revolution and code your destiny.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-purple">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-purple">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neon-blue hover:text-neon-purple">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-cyber text-neon-blue mb-4">QUICK ACCESS</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-neon-blue transition-colors">Registration</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Event Schedule</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Competitions</a></li>
                <li><a href="#" className="hover:text-neon-blue transition-colors">Sponsors</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold font-cyber text-neon-blue mb-4">BATTLEFIELD HQ</h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-neon-blue" />
                  <span>yuva@srmist.edu.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-neon-blue" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-neon-blue" />
                  <a href="#" className="hover:text-neon-blue transition-colors">
                    SRM IST Trichy Campus
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neon-blue/20 pt-8 text-center">
            <p className="text-muted-foreground">
              &copy; 2025 YUVA Tech Fest. All rights reserved. | 
              <span className="text-neon-blue font-cyber ml-2">SRM Institute of Science and Technology, Trichy</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default YUVATechFest;