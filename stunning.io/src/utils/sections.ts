import { Section } from '@/types/sections';

export const getSectionIcon = (sectionName: string): string => {
  const name = sectionName.toLowerCase();
  
  const iconMap: Record<string, string> = {
    header: '🏠',
    hero: '🏠',
    about: 'ℹ️',
    service: '⚙️',
    services: '⚙️',
    projects: '📦',
    testimonial: '💬',
    testimonials: '💬',
    contact: '📞',
    footer: '🔗',
    gallery: '🖼️',
    pricing: '💰',
    team: '👥',
    blog: '📝',
    faq: '❓',
  };

  for (const [key, icon] of Object.entries(iconMap)) {
    if (name.includes(key)) return icon;
  }
  
  return '📄';
};

export const getSectionColor = (sectionName: string): string => {
  const name = sectionName.toLowerCase();
  
  const colorMap: Record<string, string> = {
    header: 'from-blue-500 to-blue-600',
    hero: 'from-blue-500 to-blue-600',
    about: 'from-green-500 to-green-600',
    service: 'from-purple-500 to-purple-600',
    services: 'from-purple-500 to-purple-600',
    projects: 'from-orange-500 to-orange-600',
    testimonial: 'from-pink-500 to-pink-600',
    testimonials: 'from-pink-500 to-pink-600',
    contact: 'from-indigo-500 to-indigo-600',
    footer: 'from-gray-500 to-gray-600',
    gallery: 'from-yellow-500 to-yellow-600',
    pricing: 'from-red-500 to-red-600',
    team: 'from-teal-500 to-teal-600',
    blog: 'from-emerald-500 to-emerald-600',
    faq: 'from-cyan-500 to-cyan-600',
  };

  for (const [key, color] of Object.entries(colorMap)) {
    if (name.includes(key)) return color;
  }
  
  return 'from-slate-500 to-slate-600';
};

export const getSectionDescription = (sectionName: string): string => {
  const name = sectionName.toLowerCase();
  
  const descriptionMap: Record<string, string> = {
    header: 'Main navigation and hero section',
    hero: 'Main navigation and hero section',
    about: 'About us and company information',
    service: 'Services offered by the business',
    services: 'Services offered by the business',
    projects: 'Project showcase and portfolio',
    testimonial: 'Customer reviews and testimonials',
    testimonials: 'Customer reviews and testimonials',
    contact: 'Contact form and information section',
    footer: 'Website footer with links and information',
    gallery: 'Image gallery and portfolio',
    pricing: 'Pricing plans and packages',
    team: 'Team members and staff',
    blog: 'Blog posts and articles',
    faq: 'Frequently asked questions',
  };

  for (const [key, description] of Object.entries(descriptionMap)) {
    if (name.includes(key)) return description;
  }
  
  return 'Custom section for your website';
};

export const processSections = (sectionNames: string[]): Section[] => {
  return sectionNames.map((name, index) => ({
    name,
    icon: getSectionIcon(name),
    color: getSectionColor(name),
    description: getSectionDescription(name),
  }));
}; 