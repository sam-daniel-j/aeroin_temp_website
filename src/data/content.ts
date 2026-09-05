import {
  Rocket,
  Users,
  Satellite,
  Telescope,
  Cpu,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react';

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Aeroin', href: '/why-aeroin' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: '7,000+', label: 'Learners Trained' },
  { value: '75+', label: 'Training Programs' },
  { value: '15+', label: 'Expert Mentors' },
  { value: '50+', label: 'Space Technology Sessions' },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: Users,
    title: 'Expert-Led Learning',
    description:
      'Learn from experienced aerospace and space technology professionals.',
  },
  {
    icon: Rocket,
    title: 'Practical Training',
    description:
      'Go beyond theory through practical activities and simulations.',
  },
  {
    icon: Telescope,
    title: 'Project-Based Learning',
    description:
      'Apply knowledge through real-world-inspired aerospace and space technology projects.',
  },
  {
    icon: Cpu,
    title: 'Industry-Oriented Curriculum',
    description:
      'Build skills around relevant aerospace and space technology concepts.',
  },
];

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'Instagram', href: '#', icon: Instagram },
  { label: 'YouTube', href: '#', icon: Youtube },
  { label: 'WhatsApp', href: '#', icon: MessageCircle },
];

export const heroDisciplines: { icon: LucideIcon; label: string }[] = [
  { icon: Satellite, label: 'CubeSats' },
  { icon: Rocket, label: 'Rocket Propulsion' },
  { icon: Cpu, label: 'UAVs' },
  { icon: Telescope, label: 'Space Robotics' },
  { icon: Telescope, label: 'Astronomy' },
  { icon: Rocket, label: 'Aerospace Engineering' },
];

export const brand = {
  name: 'Aeroin EduTech',
  parent: 'Aeroin SpaceTech Pvt. Ltd.',
  tagline: 'Learn Space Technology. Build the Future.',
  primaryMessage:
    'Practical, project-based learning in aerospace and space technology.',
};

export const contactInfo = {
  email: 'info@aeroinedutech.in',
  phone: '+91 9176209914',
  phoneRaw: '919176209914',
};

export type LegalLink = {
  label: string;
  href: string;
};

export const legalLinks: LegalLink[] = [
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Refund Policy', href: '/refund' },
];
