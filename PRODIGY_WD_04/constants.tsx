
import { Project, Skill, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description: 'A custom-built bento-grid portfolio featuring dark/light mode and optimized React architecture.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '2',
    title: 'Fooddelight Website',
    description: 'A comprehensive food ordering and delivery platform with real-time tracking and a seamless user interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '3',
    title: 'Weather Forecast Website',
    description: 'Dynamic weather application fetching real-time data from the OpenWeather API with intuitive visuals.',
    tags: ['Python', 'API Integration', 'CSS'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '4',
    title: 'Tic-Tac-Toe Web App',
    description: 'Classic game implementation featuring advanced game logic and a smooth user experience.',
    tags: ['JavaScript', 'HTML', 'Algorithms'],
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '5',
    title: 'Stopwatch Web Application',
    description: 'A precise digital stopwatch with lap functionality and local storage persistence.',
    tags: ['CSS', 'JavaScript', 'Logic'],
    image: 'https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=800&auto=format&fit=crop',
    link: '#',
  },
  {
    id: '6',
    title: 'Interactive Navigation Menu',
    description: 'High-performance navigation component with fluid transitions and modern design principles.',
    tags: ['HTML', 'CSS', 'UI/UX'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop',
    link: '#',
  }
];

export const FINAL_YEAR_PROJECT = {
  title: 'Mediscan',
  description: 'A diagnostic aid system designed to streamline healthcare analysis using computer vision and intelligent data processing.',
  role: 'Lead Developer',
  tech: ['Python', 'Data Science', 'Computer Vision'],
  impact: 'Improving diagnostic speed through automated scanning protocols.'
};

export const SKILLS: Skill[] = [
  { name: 'Python', level: 90, category: 'Backend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 92, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'Backend Systems', level: 75, category: 'Tools' },
  { name: 'UI/UX Design', level: 80, category: 'Soft Skills' },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Prodigy Infotech',
    position: 'Web Development Intern',
    period: 'Current',
    description: [
      'Developing responsive user interfaces for diverse client projects.',
      'Integrating modern frontend frameworks to optimize performance.',
      'Collaborating with engineering teams to implement new features.'
    ],
  },
];

export const EDUCATIONS: Education[] = [
  {
    institution: 'Tolani College',
    degree: 'BSc IT (Information Technology)',
    year: 'Expected 2024',
  },
];

export const USER_INFO = {
  name: "Hitesh",
  role: "Full Stack Developer",
  motto: "Eat • Repeat • Build",
  bio: "Aspiring developer currently pursuing BSc IT at Tolani College. Passionate about building high-performance digital tools and modern web architectures.",
  email: "hitesh.dev@example.com",
  location: "Mumbai, India",
  socials: {
    github: "https://github.com/hitesh",
    linkedin: "https://linkedin.com/in/hitesh",
    twitter: "https://twitter.com/hitesh_builds"
  }
};
