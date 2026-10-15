import React, { useState } from 'react';
import { skillCategories } from '../data/portfolio';
import { Terminal, Layout, Server, Database, Wrench, BarChart3 } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Languages": <Terminal className="w-5 h-5 text-blue-500" />,
  "Frontend Development": <Layout className="w-5 h-5 text-cyan-500" />,
  "Backend Development": <Server className="w-5 h-5 text-emerald-500" />,
  "Databases": <Database className="w-5 h-5 text-purple-500" />,
  "Tools & Practices": <Wrench className="w-5 h-5 text-amber-500" />,
  "Data & Analytics": <BarChart3 className="w-5 h-5 text-rose-500" />
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const displayedCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Modern technologies and engineering practices I utilize to build scalable full-stack applications.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-accent-primary text-white shadow-md shadow-accent-primary/20 scale-105'
                    : 'bg-bg-secondary text-text-secondary border border-border-color hover:text-text-primary hover:border-accent-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="glass-card p-6 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <div className="flex items-center space-x-3 mb-6 pb-3 border-b border-border-color">
                <div className="p-2.5 rounded-xl bg-bg-tertiary">
                  {categoryIcons[group.category] || <Terminal className="w-5 h-5 text-accent-primary" />}
                </div>
                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center text-sm mb-1.5">
                      <span className="font-semibold text-text-primary">{skill.name}</span>
                      <span className="text-xs font-mono font-medium text-accent-primary">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-bg-tertiary rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent-primary to-accent-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
