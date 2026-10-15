export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  category: 'Full Stack' | 'Data & Analytics' | 'Web Apps';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  highlights?: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  scoreLabel: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export type ResumeType = 'fullstack' | 'analyst';

export interface ResumeProfile {
  id: ResumeType;
  roleTitle: string;
  badge: string;
  headline: string;
  summary: string;
  pdfUrl: string;
  pdfFilename: string;
  highlights?: string[];
  keySkills: {
    category: string;
    skills: string[];
  }[];
  experienceIds: string[];
  projectIds: string[];
  certificationIds: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  bio: string;
  aboutLong: string[];
  status: string;
  resumeUrl: string;
  fullStackResumeUrl: string;
  dataAnalystResumeUrl: string;
  profileImage?: string;
}
