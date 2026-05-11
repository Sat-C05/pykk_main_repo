import HeroMain from '@/components/shared/HeroMain';
import CredibilityBar from '@/components/layout/CredibilityBar';
import ClientLogos from '@/components/sections/home/ClientLogos';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import StatsRow from '@/components/shared/StatsRow';
import ProductsPreview from '@/components/sections/home/ProductsPreview';
import ProcessSection from '@/components/sections/home/ProcessSection';
import Testimonials from '@/components/sections/home/Testimonials';
import CtaBand from '@/components/shared/CtaBand';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PYKK — Pioneering Your Knowledge Capital',
  description: 'Management and operations consulting for SMBs in Hyderabad. We help owners productize knowledge and integrate AI solutions.',
};

export default function Home() {
  return (
    <main>
      <HeroMain {...siteContent.homeHero} />
      <CredibilityBar items={siteContent.credibilityBar.items} />
      <ClientLogos title={siteContent.clientLogosTitle} logos={siteContent.clientLogos} />
      <WhyChooseUs headline={siteContent.whyChooseUsHeadline} features={siteContent.features} />
      <StatsRow stats={siteContent.stats} />
      <ProductsPreview 
        headline={siteContent.productsPreviewHeadline} 
        intro={siteContent.productsPreviewIntro} 
        products={siteContent.products} 
        viewAllLink="/products"
      />
      <ProcessSection headline={siteContent.processHeadline} steps={siteContent.processSteps} />
      <Testimonials headline={siteContent.testimonialsHeadline} testimonials={siteContent.testimonials} />
      <CtaBand 
        headline={siteContent.homeCta.headline}
        subline={siteContent.homeCta.subline}
        primaryButton={siteContent.homeCta.primaryButton}
        secondaryButton={siteContent.homeCta.secondaryButton}
      />
    </main>
  );
}
