import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-aqua/20 animate-pulse"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Alex Rivera</span>
            </h1>
            <div className="text-2xl md:text-4xl text-muted-foreground">
              <span className="typewriter-cursor">{text}</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Creating exceptional digital experiences with modern technologies. 
              Passionate about clean code, beautiful interfaces, and solving complex problems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary hover-glow group px-8 py-6 text-lg rounded-2xl"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              View Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="glass border-primary/30 hover:bg-primary/10 hover-glow px-8 py-6 text-lg rounded-2xl"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          <div className="pt-16">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-smooth group"
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-sm">Scroll to explore</span>
                <ArrowDown className="h-6 w-6 animate-bounce group-hover:text-primary" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full animate-pulse float opacity-60"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-aqua rounded-full animate-pulse float opacity-40"></div>
      <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-secondary rounded-full animate-pulse float opacity-50"></div>
    </section>
  );
};

export default Hero;