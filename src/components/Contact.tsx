import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.rivera@stanford.edu',
      href: 'mailto:alex.rivera@stanford.edu'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco Bay Area, CA',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/alexrivera',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/alexrivera',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/alexrivera',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss opportunities, collaborations, or just chat about technology? 
            I'd love to hear from you. Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 slide-in-left">
            <div className="glass-card">
              <h3 className="text-2xl font-bold text-primary mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 group transition-smooth hover:text-primary"
                    >
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-primary/10 hover:bg-primary/20 transition-smooth ${social.color} group`}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5 group-hover:scale-110 transition-smooth" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass-card">
              <h3 className="text-xl font-semibold text-primary mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start glass border-primary/30 hover:bg-primary/10"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start glass border-aqua/30 hover:bg-aqua/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View GitHub Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="slide-in-right">
            <Card className="glass-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Send a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-primary">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="glass border-primary/30 focus:border-primary/60 rounded-xl"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-primary">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="glass border-primary/30 focus:border-primary/60 rounded-xl"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-primary">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="glass border-primary/30 focus:border-primary/60 rounded-xl"
                    placeholder="What's this about?"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-primary">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-primary/30 focus:border-primary/60 rounded-xl resize-none"
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary hover-glow group py-6 text-lg rounded-xl"
                >
                  <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-smooth" />
                  Send Message
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  I'll get back to you within 24 hours. Looking forward to connecting! 🚀
                </p>
              </form>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 fade-in-up">
          <div className="glass-card inline-block">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Open to Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Currently seeking <span className="text-gradient font-semibold">Summer 2025 internships</span>, 
                <span className="text-gradient font-semibold"> freelance projects</span>, and 
                <span className="text-gradient font-semibold"> collaboration opportunities</span>
              </p>
              <div className="flex justify-center space-x-2 text-2xl">
                <span>💼</span>
                <span>🤝</span>
                <span>🚀</span>
                <span>✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;