import React from 'react';
import { ArrowUp, Heart, Code2, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-card border-t border-border-color py-12 text-text-secondary">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border-color">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-text-primary text-base">
                {personalInfo.name}
              </p>
              <p className="text-xs text-text-muted">
                Full Stack Developer (React.js • FastAPI • Django)
              </p>
            </div>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-bg-tertiary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-bg-tertiary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-bg-tertiary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-bg-tertiary border border-border-color text-xs font-semibold text-text-primary hover:text-accent-primary hover:border-accent-primary transition-all hover:scale-105"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 text-accent-primary" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted gap-4">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline mx-0.5" />
            <span>using React.js, TypeScript & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
