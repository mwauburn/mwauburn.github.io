export type Language = 'en' | 'ur';

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  tags: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  image: string; // Tailwind gradient descriptor or mockup style
  accentColor: string; // CSS color class (e.g. 'emerald-500')
  links: {
    github?: string;
    demo?: string;
  };
  quarter?: string;
  index?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string; // Markdown supported
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  views: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export interface WallPost {
  id: string;
  name: string;
  message: string;
  color: string; // e.g. 'bg-pink-100 dark:bg-pink-950/40 text-pink-900 dark:text-pink-100'
  emoji: string; // e.g. '🚀', '🔥', '💻', etc.
  date: string;
}

export interface TranslationDict {
  navHome: string;
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navBlog: string;
  navWall: string;
  navContact: string;
  heroGreeting: string;
  heroTitle: string;
  heroSubtitle: string;
  heroCtaWork: string;
  heroCtaContact: string;
  aboutTitle: string;
  aboutSubtitle: string;
  experienceTitle: string;
  experienceSubtitle: string;
  skillsTitle: string;
  skillsSubtitle: string;
  projectsTitle: string;
  projectsSubtitle: string;
  projectsStatus: string;
  blogTitle: string;
  blogSubtitle: string;
  blogReadMore: string;
  wallTitle: string;
  wallSubtitle: string;
  wallSubmit: string;
  wallSuccess: string;
  contactTitle: string;
  contactSubtitle: string;
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactSubmit: string;
  contactSubmitting: string;
  contactSuccess: string;
  footerRights: string;
}
