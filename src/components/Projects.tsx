import React, { useState } from 'react';
import { ExternalLink, Github, FolderGit2, Sparkles, Check, BarChart3, Layers, Globe } from 'lucide-react';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { label: 'All Projects', value: 'All', count: projects.length },
    { label: 'Full Stack', value: 'Full Stack', count: projects.filter(p => p.category === 'Full Stack').length },
    { label: 'Data & Analytics', value: 'Data & Analytics', count: projects.filter(p => p.category === 'Data & Analytics').length },
    { label: 'Web Apps', value: 'Web Apps', count: projects.filter(p => p.category === 'Web Apps').length },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'Data & Analytics':
        return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      default:
        return 'bg-purple-500/10 text-purple-500 border-purple-500/20';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <Layers className="w-3.5 h-3.5" />;
      case 'Data & Analytics':
        return <BarChart3 className="w-3.5 h-3.5" />;
      default:
        return <Globe className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Production-grade full-stack web platforms, interactive Power BI dashboards, and Python statistical pipelines.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === cat.value
                    ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/25 scale-105'
                    : 'bg-bg-secondary text-text-secondary border border-border-color hover:text-text-primary hover:border-accent-primary/40'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                  activeCategory === cat.value
                    ? 'bg-white/20 text-white'
                    : 'bg-bg-tertiary text-text-muted'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300 hover:shadow-2xl flex flex-col group"
            >
              {/* Project Top Header */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeClass(project.category)}`}>
                      {getCategoryIcon(project.category)}
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                        <Sparkles className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-accent-secondary mb-3">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  {project.highlights && (
                    <div className="space-y-1.5 mb-6 text-xs sm:text-sm text-text-secondary">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-border-color">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-bg-tertiary text-text-muted border border-border-color"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && project.liveUrl !== project.githubUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-accent-primary text-white rounded-xl text-sm font-semibold hover:bg-accent-secondary transition-all shadow-md hover:scale-[1.02]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Preview</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] ${
                          !project.liveUrl || project.liveUrl === project.githubUrl
                            ? 'bg-accent-primary text-white hover:bg-accent-secondary shadow-md'
                            : 'bg-bg-secondary border border-border-color text-text-primary hover:border-accent-primary hover:text-accent-primary'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        <span>{project.category === 'Data & Analytics' ? 'View Dashboard / Code' : 'Source Code'}</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
