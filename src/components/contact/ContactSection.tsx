import Image from 'next/image';
import { Linkedin, MessageCircle } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section, Card, CardContent, Button } from '@/components/ui';

export function ContactSection() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Reach out through your preferred channel">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        {/* LinkedIn Contact */}
        <Card>
          <CardContent className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
              <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              LinkedIn
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Connect with me on LinkedIn and send a direct message
            </p>
            <Button
              href={`${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Contact Now
            </Button>
          </CardContent>
        </Card>

        {/* WhatsApp Contact */}
        <Card>
          <CardContent className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
              <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
              WhatsApp
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Message me directly on WhatsApp
            </p>
            <div className="flex flex-col gap-4 w-full mt-auto">
              <div className="flex-1 p-3 bg-white dark:bg-gray-900 rounded-lg">
                <Image
                  src="/whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  width={120}
                  height={120}
                  className="rounded mx-auto"
                />
              </div>
              <Button
                href={`https://wa.me/${profile.whatsapp?.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Open Chat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

    </Section>
  );
}
