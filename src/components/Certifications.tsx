import React from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '../data/portfolio';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 bg-bg-primary">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full">
            Accreditation
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary mt-3 mb-4">
            Certifications & Training
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Continuous technical upskilling across programming, data engineering, enterprise simulations, and Agile practices.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card p-6 rounded-2xl hover:border-accent-primary/50 transition-all duration-300 hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 text-accent-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  {cert.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-bg-tertiary text-text-muted border border-border-color">
                      {cert.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-primary transition-colors mb-1 line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-sm font-semibold text-accent-primary mb-3">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color flex items-center justify-between text-xs text-text-muted">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent-primary" />
                  {cert.date}
                </span>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-accent-primary/10 hover:bg-accent-primary hover:text-white text-accent-primary font-medium transition-all duration-200"
                    title={`Open ${cert.name} certificate in a new tab`}
                    aria-label={`Verify and open ${cert.name} certificate`}
                  >
                    <span>Verify</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
