
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