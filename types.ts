export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  link?: string;
  color: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  isMVP?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ScrollState {
  scrollY: number;
}
