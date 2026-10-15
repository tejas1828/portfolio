import React from 'react';
import { Layers, Server, Database, Code, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bg-secondary/40 border-y border-border-color">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Background & Mindset
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Bridging the gap between intuitive frontends and resilient, data-driven backend architectures.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-4 pb-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden ring-2 ring-accent-primary/40 p-0.5 bg-gradient-to-tr from-accent-primary to-accent-secondary shadow-lg flex-shrink-0">
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top rounded-[14px]"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-accent-primary">
                  {personalInfo.title} • B.Tech CSE (8.20 CGPA)
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {personalInfo.location}
                </p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Engineering Scalable Systems with Modern Full Stack Architecture
            </h3>

            {personalInfo.aboutLong.map((para, index) => (
              <p key={index} className="text-text-secondary leading-relaxed text-base">
                {para}
              </p>
            ))}

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start space-x-2.5 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span>REST API Design with FastAPI & Django DRF</span>
              </div>
              <div className="flex items-start space-x-2.5 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span>Responsive Frontend Engineering with React.js</span>
              </div>
              <div className="flex items-start space-x-2.5 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span>Relational Databases (MySQL & PostgreSQL)</span>
              </div>
              <div className="flex items-start space-x-2.5 text-text-secondary">
                <CheckCircle className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span>Python Data Pipelines (Pandas, PySpark, Power BI)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="glass-card p-6 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-1">Frontend Development</h4>
              <p className="text-sm text-text-secondary">
                Specialized in React.js, Tailwind CSS, Bootstrap 5, responsive component design, state management, and Axios integration.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-1">Backend Engineering</h4>
              <p className="text-sm text-text-secondary">
                Architecting secure endpoints using FastAPI and Django REST Framework, JWT authentication, and structured validation.
              </p>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-1">Data & Relational Databases</h4>
              <p className="text-sm text-text-secondary">
                SQL query optimization with MySQL & PostgreSQL, data processing with Pandas and PySpark, and interactive Power BI dashboards.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Numbers Bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-bg-card border border-border-color text-center hover:shadow-lg transition-shadow">
            <span className="block text-3xl sm:text-4xl font-extrabold text-accent-primary mb-1">4</span>
            <span className="text-xs sm:text-sm text-text-secondary font-medium">Internships Completed</span>
          </div>
          <div className="p-6 rounded-2xl bg-bg-card border border-border-color text-center hover:shadow-lg transition-shadow">
            <span className="block text-3xl sm:text-4xl font-extrabold text-accent-primary mb-1">8.20</span>
            <span className="text-xs sm:text-sm text-text-secondary font-medium">B.Tech CSE CGPA</span>
          </div>
          <div className="p-6 rounded-2xl bg-bg-card border border-border-color text-center hover:shadow-lg transition-shadow">
            <span className="block text-3xl sm:text-4xl font-extrabold text-accent-primary mb-1">10+</span>
            <span className="text-xs sm:text-sm text-text-secondary font-medium">Verified Certifications</span>
          </div>
        </div>
      </div>
    </section>
  );
};
