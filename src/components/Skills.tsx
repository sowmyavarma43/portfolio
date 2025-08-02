import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Palette, Globe, Smartphone, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "text-blue-400",
      skills: [
        { name: "React/Next.js", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "🔷" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "💚" }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-green-400",
      skills: [
        { name: "Node.js/Express", level: 85, icon: "🟢" },
        { name: "Python/Django", level: 80, icon: "🐍" },
        { name: "PostgreSQL", level: 85, icon: "🐘" },
        { name: "MongoDB", level: 75, icon: "🍃" }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "text-purple-400",
      skills: [
        { name: "React Native", level: 80, icon: "📱" },
        { name: "Flutter", level: 70, icon: "💙" },
        { name: "iOS (Swift)", level: 60, icon: "🍎" },
        { name: "Android (Kotlin)", level: 65, icon: "🤖" }
      ]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "text-pink-400",
      skills: [
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Adobe XD", level: 75, icon: "🎭" },
        { name: "Framer Motion", level: 80, icon: "✨" },
        { name: "UI/UX Principles", level: 85, icon: "🎯" }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      color: "text-orange-400",
      skills: [
        { name: "Git/GitHub", level: 90, icon: "🐙" },
        { name: "Docker", level: 75, icon: "🐳" },
        { name: "AWS/Vercel", level: 70, icon: "☁️" },
        { name: "CI/CD", level: 65, icon: "⚙️" }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "text-aqua",
      skills: [
        { name: "JavaScript/TypeScript", level: 90, icon: "🟨" },
        { name: "Python", level: 85, icon: "🐍" },
        { name: "Java", level: 75, icon: "☕" },
        { name: "C++", level: 70, icon: "⚡" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit built through years of hands-on experience, continuous learning, 
            and real-world project development across the full technology stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card 
                key={categoryIndex} 
                className="glass-card hover-glow group transition-bounce"
              >
                <div className="p-6 space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth`}>
                      <Icon className={`h-6 w-6 ${category.color} group-hover:scale-110 transition-smooth`} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/50"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center fade-in-up">
          <div className="glass-card inline-block">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Always Learning</h3>
              <p className="text-muted-foreground mb-4">
                Currently exploring: <span className="text-gradient font-semibold">AI/ML Integration</span>, 
                <span className="text-gradient font-semibold"> Web3 Technologies</span>, and 
                <span className="text-gradient font-semibold"> Advanced System Design</span>
              </p>
              <div className="flex justify-center space-x-4 text-2xl">
                <span>🤖</span>
                <span>⛓️</span>
                <span>🏗️</span>
                <span>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;