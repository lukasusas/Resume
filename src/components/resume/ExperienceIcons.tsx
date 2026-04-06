import {
  Building2,
  Gem,
  Code2,
  Cloud,
  Handshake,
} from 'lucide-react';
import type { Experience } from '@/data/experience';

interface ExperienceIconProps {
  experience: Experience;
}

export function ExperienceIcon({ experience }: ExperienceIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    'exp-1': <Building2 className="w-6 h-6" />,
    'exp-2': <Gem className="w-6 h-6" />,
    'exp-3': <Code2 className="w-6 h-6" />,
    'exp-4': <Cloud className="w-6 h-6" />,
    'exp-5': <Handshake className="w-6 h-6" />,
  };

  return (
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 text-white">
      {iconMap[experience.id]}
    </div>
  );
}
