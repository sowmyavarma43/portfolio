import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Sparkles, Code2 } from 'lucide-react';
import { TodoDemo, WeatherDemo, EcommerceDemo, NetflixDemo } from './ProjectDemos';

const Projects = () => {
  const projects = [
    {
      title: "StreamFlix - Netflix Clone",
      description: "Full-stack streaming platform replica with user authentication, movie browsing, watchlists, and responsive design. Features include search functionality, genre filtering, and video playback simulation.",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Stripe API"],
      features: ["User authentication", "Movie database", "Responsive design", "Search & filters"],
      demo: <NetflixDemo />,
      githubUrl: "https://github.com/yourusername/netflix-clone",
      status: "featured"
    },
    {
      title: "E-Commerce Store",
      description: "Modern e-commerce platform with real-time cart management, product browsing, customer reviews, and secure checkout. Built with performance optimization in mind.",
      tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS", "Zustand"],
      features: ["Real-time cart", "Product catalog", "Reviews system", "Secure checkout"],
      demo: <EcommerceDemo />,
      githubUrl: "https://github.com/yourusername/ecommerce-store",
      status: "production"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with location-based forecasts, interactive city search, real-time weather data, and detailed meteorological information with smooth animations.",
      tech: ["React", "OpenWeather API", "Geolocation", "PWA", "CSS Animations"],
      features: ["City search", "Real-time data", "Weather details", "Responsive design"],
      demo: <WeatherDemo />,
      githubUrl: "https://github.com/yourusername/weather-app",
      status: "personal"
    },
    {
      title: "TaskFlow - Todo Manager",
      description: "Collaborative task management tool with real-time updates, drag-and-drop functionality, team collaboration, and deadline management. Winner of local hackathon competition.",
      tech: ["React", "TypeScript", "Local Storage", "Framer Motion", "Tailwind CSS"],
      features: ["Add/remove tasks", "Mark complete", "Real-time updates", "Clean interface"],
      demo: <TodoDemo />,
      githubUrl: "https://github.com/yourusername/task-manager",
      status: "hackathon"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      featured: { label: "Featured", className: "bg-primary/20 text-primary border-primary/30" },
      hackathon: { label: "Hackathon Winner", className: "bg-aqua/20 text-aqua border-aqua/30" },
      personal: { label: "Personal Project", className: "bg-secondary/20 text-secondary border-secondary/30" },
      production: { label: "In Production", className: "bg-green-500/20 text-green-400 border-green-500/30" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return (
      <Badge className={`${config.className} rounded-full`}>
        {status === 'featured' && <Sparkles className="w-3 h-3 mr-1" />}
        {config.label}
      </Badge>
    );
  };

  return (
    <section id="projects" className="py-20 px-6 bg-muted/5">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of my technical skills and problem-solving abilities. From hackathon wins 
            to production applications, each project tells a story of growth and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card hover-glow group overflow-hidden transition-bounce cursor-pointer"
            >
              <div className="p-6 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    {getStatusBadge(project.status)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-primary/30 text-primary hover:bg-primary/10 rounded-full"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Live Interactive Demo:</h4>
                  {project.demo}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="glass border-primary/30 hover:bg-primary/10 flex-1 rounded-xl"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    size="sm" 
                    className="gradient-primary hover-glow flex-1 rounded-xl"
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    Try Demo Above
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <Button 
            variant="outline" 
            size="lg" 
            className="glass border-primary/30 hover:bg-primary/10 hover-glow px-8 py-6 text-lg rounded-2xl"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;