import React from 'react';
import { Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-bg-secondary/40 border-y border-border-color">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Work History
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Internship Experience
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Demonstrated industry impact across 4 professional internships in Full Stack Development & Data Engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-primary/20" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative md:pl-20 group">
                {/* Timeline Dot with pulsing ring */}
                <div className="hidden md:flex absolute left-[23px] top-6 w-5 h-5 rounded-full bg-accent-primary border-4 border-bg-primary items-center justify-center shadow-md shadow-accent-primary/50 group-hover:scale-125 transition-transform" />

                {/* Experience Card */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Top Bar: Title, Company & Dates */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2 mb-4 pb-4 border-b border-border-color">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex md:hidden p-1.5 rounded-lg bg-accent-primary/10 text-accent-primary">
                          <Briefcase className="w-4 h-4" />
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                          {exp.title}
                        </h3>
                      </div>
                      <h4 className="text-base sm:text-lg font-semibold text-accent-primary mt-0.5">
                        {exp.company}
                      </h4>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-accent-primary" />
                        {exp.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent-primary" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-2.5 mb-6 text-sm sm:text-base text-text-secondary leading-relaxed">
                    {exp.description.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <span className="text-xs font-semibold uppercase text-text-muted mr-1">Technologies:</span>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-bg-tertiary text-text-primary border border-border-color hover:border-accent-primary/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
