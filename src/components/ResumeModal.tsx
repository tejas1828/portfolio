import React from 'react';
import { X, Download, FileText, CheckCircle2, Code2, BarChart3, Briefcase, GraduationCap, Award, FolderGit2, Sparkles } from 'lucide-react';
import { personalInfo, education, experiences, certifications, projects, resumeProfiles } from '../data/portfolio';
import { ResumeType } from '../types/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeType: ResumeType;
  onTypeChange: (type: ResumeType) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  activeType,
  onTypeChange,
}) => {
  if (!isOpen) return null;

  const profile = resumeProfiles[activeType];
  const isFullStack = activeType === 'fullstack';

  // Filter experiences, projects, and certifications relevant to active profile
  const displayedExperiences = experiences.filter(exp => profile.experienceIds.includes(exp.id));
  const displayedProjects = projects.filter(proj => profile.projectIds.includes(proj.id));
  const displayedCertifications = certifications.filter(cert => profile.certificationIds.includes(cert.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-bg-card border border-border-color rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 border-b border-border-color bg-bg-secondary gap-3">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-xl ${isFullStack ? 'bg-blue-500/10 text-blue-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
              {isFullStack ? <Code2 className="w-6 h-6" /> : <BarChart3 className="w-6 h-6" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">
                  Tejas Khandekar — {profile.roleTitle} Resume
                </h3>
                <span className={`hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-semibold ${
                  isFullStack ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' : 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
                }`}>
                  {profile.badge}
                </span>
              </div>
              <p className="text-xs text-text-secondary line-clamp-1">{profile.headline}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 self-end sm:self-center">
            <a
              href={profile.pdfUrl}
              download={profile.pdfFilename}
              className={`flex items-center space-x-2 px-3.5 py-2 text-white rounded-xl transition-all text-xs sm:text-sm font-semibold shadow-md hover:scale-105 ${
                isFullStack ? 'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20' : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-text-secondary hover:text-text-primary hover:bg-bg-tertiary transition-colors"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Switcher Bar */}
        <div className="px-6 py-2.5 bg-bg-tertiary/70 border-b border-border-color flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center space-x-1.5 p-1 bg-bg-secondary rounded-xl border border-border-color">
            <button
              onClick={() => onTypeChange('fullstack')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                isFullStack
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Full Stack Developer</span>
            </button>

            <button
              onClick={() => onTypeChange('analyst')}
              className={`flex items-center space-x-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                !isFullStack
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Data Analyst</span>
            </button>
          </div>

          <span className="text-[11px] text-text-muted hidden md:inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-accent-primary" />
            Switching resumes dynamically updates experience, skills & projects
          </span>
        </div>

        {/* Modal Body: Interactive Resume View */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {/* Header Summary Profile Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-bg-tertiary/60 border border-border-color flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden ring-2 ring-accent-primary/40 flex-shrink-0 shadow-md">
                <img
                  src={personalInfo.profileImage || "/profile.jpg"}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-text-primary">{personalInfo.name}</h2>
                <p className={`font-semibold ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
                  {profile.roleTitle}
                </p>
                <p className="text-xs text-text-muted mt-0.5">
                  {personalInfo.location} • {personalInfo.phone} • {personalInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Available Immediately
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed bg-bg-secondary p-4 rounded-xl border border-border-color">
              {profile.summary}
            </p>
          </div>

          {/* Technical Skills breakdown */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
              Technical Skills & Competencies
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {profile.keySkills.map((sk, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-bg-secondary border border-border-color">
                  <p className="text-xs font-bold text-text-primary mb-2 flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${isFullStack ? 'bg-blue-400' : 'bg-emerald-400'}`} />
                    {sk.category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {sk.skills.map(s => (
                      <span key={s} className="text-[11px] px-2 py-0.5 rounded bg-bg-tertiary text-text-secondary border border-border-color/60">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Targeted Projects Showcase */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
                {isFullStack ? 'Featured Full Stack Projects' : 'Key Data Analytics & BI Projects'}
              </h4>
              <span className="text-[11px] text-text-muted">
                {displayedProjects.length} Projects Tailored
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {displayedProjects.map(proj => (
                <div key={proj.id} className="p-4 rounded-xl bg-bg-secondary border border-border-color flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h5 className="font-bold text-sm text-text-primary truncate">
                        {proj.title}
                      </h5>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-primary/10 text-accent-primary font-semibold whitespace-nowrap">
                        {proj.category}
                      </span>
                    </div>
                    {proj.subtitle && (
                      <p className="text-[11px] font-medium text-accent-secondary mb-2">
                        {proj.subtitle}
                      </p>
                    )}
                    <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-3">
                      {proj.description}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-border-color/60">
                      {proj.technologies.slice(0, 5).map(t => (
                        <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-bg-tertiary text-text-muted">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internships Summary */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
              Professional Experience & Internships
            </h4>
            <div className="space-y-3">
              {displayedExperiences.map(exp => (
                <div key={exp.id} className="p-4 rounded-xl bg-bg-secondary border border-border-color">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h5 className="font-bold text-sm text-text-primary">
                      {exp.title} <span className={isFullStack ? 'text-blue-400 font-normal' : 'text-emerald-400 font-normal'}>@ {exp.company}</span>
                    </h5>
                    <span className="text-xs text-text-muted">{exp.duration} • {exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-text-secondary space-y-1 mb-3">
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map(t => (
                      <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-bg-tertiary text-text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
              Education
            </h4>
            <div className="space-y-2.5">
              {education.map(edu => (
                <div key={edu.id} className="p-3.5 rounded-xl bg-bg-secondary border border-border-color flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <p className="font-semibold text-text-primary text-sm">{edu.degree}</p>
                    <p className="text-text-muted">{edu.institution}, {edu.location}</p>
                  </div>
                  <div className="text-right sm:self-center">
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-accent-primary/10 text-accent-primary">
                      {edu.scoreLabel}: {edu.score}
                    </span>
                    <p className="text-[11px] text-text-muted mt-0.5">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications preview */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isFullStack ? 'text-blue-400' : 'text-emerald-400'}`}>
              Relevant Verified Certifications
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {displayedCertifications.map(cert => (
                <div key={cert.id} className="p-2.5 rounded-lg bg-bg-secondary border border-border-color flex items-center justify-between">
                  <span className="font-medium text-text-primary truncate">{cert.name}</span>
                  <span className="text-[11px] text-text-muted ml-2 whitespace-nowrap">{cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-border-color bg-bg-secondary flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-text-muted">
          <span>Official Resume of Tejas Khandekar • {profile.roleTitle}</span>
          <div className="flex items-center gap-2">
            <a
              href={profile.pdfUrl}
              download={profile.pdfFilename}
              className="px-3 py-1.5 rounded-lg bg-bg-tertiary hover:bg-bg-card border border-border-color text-text-primary transition-colors text-xs font-medium flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ({profile.pdfFilename.replace('.pdf', '')})</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-border-color hover:bg-bg-tertiary text-text-primary transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
