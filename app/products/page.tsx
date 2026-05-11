import HeroInner from '@/components/shared/HeroInner';
import ServiceTiers from '@/components/sections/products/ServiceTiers';
import ServiceAddons from '@/components/sections/products/ServiceAddons';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service Tiers | PYKK',
  description: 'Three tiers of professional web development designed to take your business from basic presence to growth and authority.',
};

export default function ProductsPage() {
  return (
    <main>
      <HeroInner 
        badge="Service Tiers"
        headline="Three Tiers. One Standard of Quality."
        subline="Every business has different needs and a different budget. PYKK's three-tier structure means you get exactly what your business needs — nothing more, nothing less."
        backgroundImage={siteContent.productsHero.backgroundImage}
      />
      <ServiceTiers />
      <ServiceAddons />
    </main>
  );
}
