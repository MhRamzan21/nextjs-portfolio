
export interface TimelineItem {
  title: string;
  company: string;
  companyColor?: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface TimelineProps {
  title: string;
  items: TimelineItem[];
  className?: string;
}

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link?: string;
  images?: string[];
  slug?: string;
  github?: string;
};