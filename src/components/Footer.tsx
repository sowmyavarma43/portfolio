import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-primary/20 bg-muted/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by Alex Rivera</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>© 2024 Alex Rivera. All rights reserved.</p>
            <p className="mt-1">
              Crafted with React, TypeScript, and Tailwind CSS • 
              <span className="text-gradient"> Always learning, always building</span>
            </p>
          </div>

          <div className="pt-4">
            <p className="text-xs text-muted-foreground italic">
              "Code is poetry written in logic" ✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;