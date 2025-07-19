export interface Section {
  name: string;
  icon: string;
  color: string;
  description: string;
}

export interface SectionCardProps {
  section: Section;
  index: number;
}

export interface SectionGridProps {
  sections: Section[];
} 