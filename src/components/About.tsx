import { Card } from '@/components/ui/card';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and cross-platform compatibility."
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Genuinely excited about technology and continuous learning in this ever-evolving field."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate developer who believes in the power of technology to transform ideas into reality. 
            Currently pursuing Computer Science while building projects that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-in-left">
            <div className="glass-card hover-glow">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Started coding in high school and immediately fell in love with the endless possibilities. 
                From building my first "Hello World" to creating full-stack applications, every project 
                has been a learning adventure.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently in my final year of Computer Science, I've gained hands-on experience through 
                internships, hackathons, and personal projects. I believe in learning by doing and 
                constantly challenging myself with new technologies.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new frameworks, contributing to open source, 
                or helping fellow students debug their code. I'm always excited to discuss technology 
                and potential collaborations!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-in-right">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card 
                  key={index} 
                  className="glass-card hover-glow transition-bounce p-6 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <Icon className="h-8 w-8 text-primary group-hover:scale-110 transition-smooth" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="glass-card inline-block">
            <p className="text-lg text-muted-foreground">
              💡 <span className="text-primary font-semibold">Fun Fact:</span> I've written over 
              <span className="text-gradient font-bold"> 50,000+ lines of code</span> and 
              consumed countless cups of coffee in the process!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;