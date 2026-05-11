import HeroInner from '@/components/shared/HeroInner';
import CertificationsGrid from '@/components/sections/certifications/CertificationsGrid';
import CredibilityPoints from '@/components/sections/certifications/CredibilityPoints';
import RevisionPolicy from '@/components/sections/certifications/RevisionPolicy';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Standards | PYKK',
  description: 'Learn about our QMS lead auditor credentials and our commitment to structured, high-quality web delivery for SMBs.',
};

export default function CertificationsPage() {
  return (
    <main>
      <HeroInner {...siteContent.certificationsHero} />
      <CertificationsGrid certifications={siteContent.certifications} />
      <RevisionPolicy />
      <CredibilityPoints items={siteContent.credibilityPoints} />
    </main>
  );
}
