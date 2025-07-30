import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  event: string;
}

interface CyberGalleryProps {
  images: GalleryImage[];
}

const CyberGallery = ({ images }: CyberGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main carousel */}
      <div className="relative overflow-hidden rounded-2xl border border-neon-blue/30 shadow-neon-glow">
        <div 
          className="flex transition-transform duration-500 ease-cyber"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={image.id} className="w-full flex-shrink-0 relative">
              <div className="aspect-video bg-card/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-full h-64 bg-cyber-gradient rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-2xl font-cyber text-background/80">
                      {image.title}
                    </span>
                  </div>
                  <h3 className="text-xl font-cyber text-neon-blue mb-2">{image.title}</h3>
                  <p className="text-muted-foreground">{image.event}</p>
                </div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <Button
          variant="neon"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="neon"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex justify-center mt-6 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-neon-blue shadow-neon-glow scale-125'
                : 'bg-border hover:bg-neon-blue/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CyberGallery;