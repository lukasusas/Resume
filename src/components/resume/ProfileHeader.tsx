import Image from 'next/image';
import { MapPin, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { Button } from '@/components/ui';
import { SocialLinks } from '@/components/contact/SocialLinks';

export function ProfileHeader() {
  return (
    <header className="flex flex-col md:flex-row items-center gap-8 mb-12">
      {/* Profile Photo */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg flex-shrink-0 bg-gray-200 dark:bg-gray-700 mt-[23px]">
        <Image
          src={profile.photo}
          alt={profile.name}
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
          {profile.name}
        </h1>
        <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium mb-4">
          {profile.title}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {profile.location}
          </span>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <SocialLinks />
          <Button href="/print">
            <Download className="w-4 h-4 mr-2" />
            View Resume
          </Button>
        </div>
      </div>
    </header>
  );
}
