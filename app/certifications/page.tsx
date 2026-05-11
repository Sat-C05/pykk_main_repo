import HeroInner from '@/components/shared/HeroInner';
import CertificationsGrid from '@/components/sections/certifications/CertificationsGrid';
import CredibilityPoints from '@/components/sections/certifications/CredibilityPoints';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality Standards & Certifications | PYKK',
  description: 'Learn about our QMS lead auditor credentials and our commitment to the highest professional standards in consulting.',
};

export default function CertificationsPage() {
  return (
    <main>
      <HeroInner {...siteContent.certificationsHero} />
      <CertificationsGrid certifications={siteContent.certifications} />
      <CredibilityPoints items={siteContent.credibilityPoints} />
    </main>
  );
}
