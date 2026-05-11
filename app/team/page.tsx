import HeroInner from '@/components/shared/HeroInner';
import TeamGrid from '@/components/sections/team/TeamGrid';
import CtaBand from '@/components/shared/CtaBand';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Founders | PYKK',
  description: 'Meet the experts behind PYKK, specializing in product management and operations optimization.',
};

export default function TeamPage() {
  return (
    <main>
      <HeroInner {...siteContent.teamHero} />
      <TeamGrid members={siteContent.team} />
      <CtaBand {...siteContent.teamCta} />
    </main>
  );
}
