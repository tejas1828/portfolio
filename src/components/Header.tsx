import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onSectionClick, onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-bg-primary/90 backdrop-blur-md shadow-lg border-b border-border-color py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleSectionClick('hero')}
            className="flex items-center space-x-2.5 text-left group focus:outline-none"
          >
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'text-accent-primary font-semibold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary/60'
                  }`}
                >
                  {section.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full" />
                  )}
                </button>
              );
            })}

            <div className="h-5 w-[1px] bg-border-color mx-2" />

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center space-x-1.5 px-3.5 py-2 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg hover:opacity-95 transition-all text-sm font-semibold shadow-md shadow-accent-primary/20 hover:scale-105"
              title="View Full Stack or Data Analyst Resume"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-text-primary border border-border-color hover:bg-bg-tertiary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 p-4 bg-bg-card border border-border-color rounded-2xl shadow-xl animate-fade-in">
            <div className="flex flex-col space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === section.id
                      ? 'text-accent-primary bg-accent-primary/10 font-bold'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                  }`}
                >
                  {section.label}
                </button>
              ))}

              <div className="pt-3 border-t border-border-color">
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-accent-primary text-white rounded-lg font-medium text-sm shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>View / Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
