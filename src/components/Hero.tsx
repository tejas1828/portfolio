import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ChevronDown, Sparkles, ArrowRight, FileText, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onScrollToNext: () => void;
  onScrollToProjects: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNext, onScrollToProjects, onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % personalInfo.roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-accent-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-6">
          {/* Profile Photo Block */}
          <div className="relative inline-block mx-auto animate-fade-in group">
            {/* Ambient Multi-Layer Radial Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-primary via-indigo-500 to-accent-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none" />

            {/* Glowing Gradient Ring */}
            <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-accent-primary via-indigo-500 to-accent-secondary shadow-2xl shadow-accent-primary/25">
              <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-bg-primary bg-bg-secondary relative shadow-inner">
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Floating Live Status Indicator Badge */}
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-card/95 border border-border-color shadow-lg backdrop-blur-md text-[11px] font-semibold text-text-primary">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Status Badge */}
          <div>
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-accent-primary/10 border border-accent-primary/30 text-accent-primary text-xs md:text-sm font-semibold tracking-wide shadow-sm animate-fade-in">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Main Name & Title */}
          <div className="space-y-3 animate-slide-up">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-text-primary">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Dynamic Role Transition */}
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-medium text-text-secondary">
                I am{' '}
                <span className="text-accent-primary font-semibold border-b-2 border-accent-primary/50 pb-0.5">
                  {personalInfo.roles[roleIndex]}
                </span>
              </span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed font-normal px-2">
            Recent B.Tech Computer Science graduate with hands-on internship experience building full-stack web
            applications using <strong className="text-text-primary font-semibold">React.js</strong>,{' '}
            <strong className="text-text-primary font-semibold">FastAPI</strong>, and{' '}
            <strong className="text-text-primary font-semibold">Django REST Framework</strong>. Passionate about clean code, high performance, and robust REST APIs.
          </p>

          {/* Quick Credential Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-text-muted">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-secondary border border-border-color">
              <MapPin className="w-3.5 h-3.5 text-accent-primary" />
              {personalInfo.location}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-secondary border border-border-color">
              <GraduationCap className="w-3.5 h-3.5 text-accent-primary" />
              B.Tech CSE (8.20 CGPA)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-bg-secondary border border-border-color">
              <Briefcase className="w-3.5 h-3.5 text-accent-primary" />
              4 Internships Completed
            </span>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onScrollToProjects}
              className="flex items-center space-x-2 px-6 py-3.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-xl font-semibold shadow-lg shadow-accent-primary/25 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center space-x-2 px-6 py-3.5 bg-bg-secondary border border-border-color text-text-primary hover:border-accent-primary hover:text-accent-primary rounded-xl font-semibold shadow-md hover:scale-105 transition-all duration-300 group"
              title="Choose Full Stack or Data Analyst Resume"
            >
              <FileText className="w-4 h-4 text-accent-primary" />
              <span>View Resume</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center space-x-2 px-5 py-3.5 bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary rounded-xl font-medium shadow-sm hover:scale-105 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 pt-4">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-full bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary shadow-md hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-full bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary shadow-md hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              aria-label="Phone"
              className="p-3 rounded-full bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary shadow-md hover:scale-110 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-3 rounded-full bg-bg-secondary border border-border-color text-text-secondary hover:text-accent-primary hover:border-accent-primary shadow-md hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Down Arrow Scroll Indicator */}
      <button
        onClick={onScrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full text-text-muted hover:text-accent-primary transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
};
