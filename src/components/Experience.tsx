import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building, GraduationCap, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const timeline = [
    {
      type: 'experience',
      title: 'Frontend Developer Intern',
      company: 'TechFlow Solutions',
      location: 'San Francisco, CA',
      period: 'Jun 2024 - Aug 2024',
      description: 'Led the redesign of the main dashboard, resulting in 40% improved user engagement. Collaborated with senior developers on React-based micro-frontends and implemented responsive design patterns.',
      achievements: [
        'Reduced page load time by 35% through code optimization',
        'Mentored 2 junior interns on modern React patterns',
        'Contributed to design system documentation'
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
      icon: Briefcase
    },
    {
      type: 'achievement',
      title: 'HackMIT 2024 Winner',
      company: 'MIT',
      location: 'Cambridge, MA',
      period: 'Sep 2024',
      description: 'Won 1st place overall with "EcoTracker" - a carbon footprint tracking app with gamification. Led a team of 4 developers through 48 hours of intensive development.',
      achievements: [
        'Built full-stack app in 48 hours',
        'Integrated AI for personalized recommendations',
        'Pitched to panel of industry experts'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API'],
      icon: Award
    },
    {
      type: 'education',
      title: 'Bachelor of Science in Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2022 - 2026',
      description: 'Pursuing CS with focus on Software Engineering and Human-Computer Interaction. Relevant coursework includes Data Structures, Algorithms, Web Development, and UI Design.',
      achievements: [
        'GPA: 3.8/4.0, Dean\'s List (3 semesters)',
        'President of CS Student Association',
        'Teaching Assistant for CS106A (Intro Programming)'
      ],
      tech: ['Java', 'Python', 'C++', 'SQL'],
      icon: GraduationCap
    },
    {
      type: 'experience',
      title: 'Full Stack Developer',
      company: 'LocalTech Startup',
      location: 'Palo Alto, CA',
      period: 'Jan 2024 - May 2024',
      description: 'Part-time developer role building customer-facing web applications. Worked directly with founders to implement new features and optimize existing systems.',
      achievements: [
        'Increased app performance by 50%',
        'Implemented user authentication system',
        'Built admin dashboard from scratch'
      ],
      tech: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
      icon: Briefcase
    },
    {
      type: 'achievement',
      title: 'Google Summer of Code',
      company: 'Open Source Project',
      location: 'Remote',
      period: 'Jun 2023 - Aug 2023',
      description: 'Selected as GSoC participant to contribute to a popular open-source React UI library. Implemented new component features and improved accessibility.',
      achievements: [
        'Added 5 new accessible components',
        'Improved test coverage by 25%',
        'Collaborated with global developer community'
      ],
      tech: ['React', 'TypeScript', 'Jest', 'Storybook'],
      icon: Award
    }
  ];

  const getTypeConfig = (type: string) => {
    const configs = {
      experience: {
        bgColor: 'bg-primary/10',
        borderColor: 'border-primary/30',
        iconColor: 'text-primary'
      },
      education: {
        bgColor: 'bg-aqua/10',
        borderColor: 'border-aqua/30',
        iconColor: 'text-aqua'
      },
      achievement: {
        bgColor: 'bg-secondary/10',
        borderColor: 'border-secondary/30',
        iconColor: 'text-secondary'
      }
    };
    return configs[type as keyof typeof configs];
  };

  return (
    <section id="experience" className="py-20 px-6 bg-muted/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey through academia, internships, and achievements that have shaped my skills 
            and passion for technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-aqua to-secondary"></div>

          <div className="space-y-8">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const config = getTypeConfig(item.type);
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } slide-in-${isEven ? 'left' : 'right'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 rounded-full ${config.bgColor} border-2 ${config.borderColor} flex items-center justify-center z-10`}>
                    <Icon className={`w-4 h-4 ${config.iconColor}`} />
                  </div>

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} ml-16 md:ml-0`}>
                    <Card className="glass-card hover-glow group transition-bounce">
                      <div className="p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between flex-wrap gap-2">
                            <h3 className="text-xl font-bold group-hover:text-primary transition-smooth">
                              {item.title}
                            </h3>
                            <Badge 
                              variant="outline" 
                              className={`${config.borderColor} ${config.iconColor} rounded-full`}
                            >
                              {item.type}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground text-sm space-x-4">
                            <div className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {item.company}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {item.location}
                            </div>
                          </div>
                          
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.period}
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>

                        <div className="space-y-3">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Key Achievements:</h4>
                            <ul className="space-y-1">
                              {item.achievements.map((achievement, achievementIndex) => (
                                <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Technologies:</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.tech.map((tech, techIndex) => (
                                <Badge 
                                  key={techIndex} 
                                  variant="outline" 
                                  className="border-primary/30 text-primary hover:bg-primary/10 rounded-full text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card inline-block">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">What's Next?</h3>
              <p className="text-muted-foreground">
                Actively seeking <span className="text-gradient font-semibold">Summer 2025 internships</span> and 
                <span className="text-gradient font-semibold"> New Grad opportunities</span> in Software Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;