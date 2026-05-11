import HeroInner from '@/components/shared/HeroInner';
import PricingTable from '@/components/sections/pricing/PricingTable';
import CtaBand from '@/components/shared/CtaBand';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Add-ons & Details | PYKK',
  description: 'Explore the full range of supplementary services and professional deliverables provided by PYKK.',
};

export default function PricingPage() {
  return (
    <main>
      <HeroInner {...siteContent.galleryHero} />
      <PricingTable />
      <CtaBand {...siteContent.galleryCta} />
    </main>
  );
}
