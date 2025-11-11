import { HeroSection } from './ui/hero-section';
import { Icons } from './ui/icons';
import { Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <HeroSection
      badge={{
        text: "Early Childhood Education Specialist",
        action: {
          text: "View Credentials",
          href: "#education",
        },
      }}
      title="Winfred Kendi"
      description="Global-Minded Teaching Professional dedicated to fostering inclusive, student-centered learning environments that nurture well-rounded, culturally aware global citizens."
      actions={[
        {
          text: "Get In Touch",
          href: "#contact",
          variant: "default",
          icon: <Mail className="h-5 w-5" />,
        },
        {
          text: "LinkedIn",
          href: "https://linkedin.com/in/winfredkendi-educator",
          variant: "glow",
          icon: <Linkedin className="h-5 w-5" />,
        },
      ]}
      image={{
        src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1248&h=765&fit=crop&q=80",
        alt: "Early Childhood Education - Children learning in a classroom",
      }}
    />
  );
}
