import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { education } from '../data/portfolio';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-bg-secondary/40 border-y border-border-color">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Academics
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Education
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Solid computer science engineering foundation with consistent academic excellence and distinction.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="glass-card p-6 sm:p-8 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                {/* Left Side: Institution & Degree */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-base font-semibold text-accent-primary mt-0.5">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-text-muted mt-2">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-accent-primary" />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-accent-primary" />
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Score Badge */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-1">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-accent-primary/10 text-accent-primary border border-accent-primary/20 font-bold text-sm sm:text-base">
                    <Award className="w-4 h-4 text-accent-primary" />
                    <span>{edu.scoreLabel}: {edu.score}</span>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6 pt-4 border-t border-border-color space-y-2">
                  {edu.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-text-secondary">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
