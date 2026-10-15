import React from 'react';
import { X, Code2, BarChart3, Download, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { resumeProfiles } from '../data/portfolio';
import { ResumeType } from '../types/portfolio';

interface ResumeSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResume: (type: ResumeType) => void;
}

export const ResumeSelectModal: React.FC<ResumeSelectModalProps> = ({
  isOpen,
  onClose,
  onSelectResume,
}) => {
  if (!isOpen) return null;

  const fullstack = resumeProfiles.fullstack;
  const analyst = resumeProfiles.analyst;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-bg-card border border-border-color rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-color bg-bg-secondary/70">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary mb-1">
              Select Resume Profile
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary">
              Choose Resume Focus
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-0.5">
              Select tailored resume for Full Stack Engineering or Data Analytics
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options Body */}
        <div className="p-6 sm:p-8 space-y-5 overflow-y-auto max-h-[75vh]">
          {/* Option 1: Full Stack Resume */}
          <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-bg-secondary via-bg-secondary/90 to-blue-500/5 border border-border-color hover:border-blue-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-500 ring-1 ring-blue-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Code2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-xl font-bold text-text-primary group-hover:text-blue-400 transition-colors">
                      {fullstack.roleTitle} Resume
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/10 text-blue-500 border border-blue-500/20">
                      Web & Backend
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-accent-secondary mb-2">
                    {fullstack.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                    Focused on full-stack application development, React.js frontends, Flask & Django APIs, relational databases (MySQL, PostgreSQL), and performance optimization.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["React.js", "Flask", "Python", "Django", "Node.js", "MySQL", "REST APIs"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-bg-tertiary text-text-muted border border-border-color"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Full Stack */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border-color/60 sm:pl-16">
              <button
                onClick={() => onSelectResume('fullstack')}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" />
                <span>View Full Stack Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={fullstack.pdfUrl}
                download={fullstack.pdfFilename}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 bg-bg-tertiary hover:bg-bg-card border border-border-color text-text-primary rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Option 2: Data Analyst Resume */}
          <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-bg-secondary via-bg-secondary/90 to-emerald-500/5 border border-border-color hover:border-emerald-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/30 flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h4 className="text-xl font-bold text-text-primary group-hover:text-emerald-400 transition-colors">
                      {analyst.roleTitle} Resume
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      BI & Analytics
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-emerald-500 mb-2">
                    {analyst.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-3">
                    Focused on Business Intelligence dashboards, complex SQL extraction, Python ETL pipelines, statistical modeling, hypothesis testing, and stakeholder insights.
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["Power BI", "SQL (MySQL)", "Python (Pandas)", "Statistical Modeling", "ETL", "Excel"].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-bg-tertiary text-text-muted border border-border-color"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions for Data Analyst */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-border-color/60 sm:pl-16">
              <button
                onClick={() => onSelectResume('analyst')}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:scale-[1.02]"
              >
                <Eye className="w-4 h-4" />
                <span>View Data Analyst Resume</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={analyst.pdfUrl}
                download={analyst.pdfFilename}
                className="flex-1 sm:flex-initial flex items-center justify-center space-x-2 px-4 py-2.5 bg-bg-tertiary hover:bg-bg-card border border-border-color text-text-primary rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border-color bg-bg-secondary flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Both resumes feature official verified certifications & internship histories
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-border-color hover:bg-bg-tertiary text-text-primary transition-colors text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
