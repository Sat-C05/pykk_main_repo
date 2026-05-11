import HeroInner from '@/components/shared/HeroInner';
import ProcessSection from '@/components/sections/home/ProcessSection';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process | PYKK',
  description: 'A structured, 4-step QMS delivery lifecycle designed to eliminate ambiguity in web development.',
};

export default function ProcessPage() {
  return (
    <main>
      <HeroInner {...siteContent.exhibitionsHero} />
      <ProcessSection headline={siteContent.processHeadline} steps={siteContent.processSteps} />
    </main>
  );
}
