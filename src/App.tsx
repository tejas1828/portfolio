import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ResumeSelectModal } from './components/ResumeSelectModal';
import { ResumeType } from './types/portfolio';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeSelectOpen, setIsResumeSelectOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeResumeType, setActiveResumeType] = useState<ResumeType>('fullstack');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenResumeSelector = () => {
    setIsResumeSelectOpen(true);
  };

  const handleSelectResume = (type: ResumeType) => {
    setActiveResumeType(type);
    setIsResumeSelectOpen(false);
    setIsResumeModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 flex flex-col selection:bg-accent-primary/20 selection:text-accent-primary">
      <Header
        activeSection={activeSection}
        onSectionClick={scrollToSection}
        onOpenResume={handleOpenResumeSelector}
      />

      <main className="flex-1">
        <Hero
          onScrollToNext={() => scrollToSection('about')}
          onScrollToProjects={() => scrollToSection('projects')}
          onOpenResume={handleOpenResumeSelector}
        />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      {/* 2-Option Resume Selection Modal */}
      <ResumeSelectModal
        isOpen={isResumeSelectOpen}
        onClose={() => setIsResumeSelectOpen(false)}
        onSelectResume={handleSelectResume}
      />

      {/* Interactive Resume Viewer Modal with Tab Switcher */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        activeType={activeResumeType}
        onTypeChange={setActiveResumeType}
      />
    </div>
  );
};

export default App;
