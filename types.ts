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

  import type { StaticImageData } from 'next/image';

  export interface ParallaxLayer {
    id: string;
    src: string | StaticImageData;
    speed: number; // 0 = static, 1 = moves with scroll
    zIndex: number;
    alt: string;
  }

export interface ScrollState {
  scrollY: number;
}
