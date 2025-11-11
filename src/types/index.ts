export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
  color: string;
}

export interface TechTool {
  category: string;
  tools: string[];
}

export interface Interest {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}
