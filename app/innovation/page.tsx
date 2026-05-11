import HeroInner from '@/components/shared/HeroInner';
import UpcomingEvents from '@/components/sections/exhibitions/UpcomingEvents';
import PastEvents from '@/components/sections/exhibitions/PastEvents';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Innovation & AI Solutions | PYKK',
  description: 'Exploring the Dhya Suite and our proprietary methodology for integrating AI into SMB operations.',
};

export default function ExhibitionsPage() {
  return (
    <main>
      <HeroInner {...siteContent.exhibitionsHero} />
      <UpcomingEvents events={siteContent.upcomingEvents} />
      <PastEvents events={siteContent.pastEvents} />
    </main>
  );
}
