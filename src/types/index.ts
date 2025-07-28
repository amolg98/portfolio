export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
  color: string;
}

export interface Skill {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  color: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  gpa: string;
  color: string;
}