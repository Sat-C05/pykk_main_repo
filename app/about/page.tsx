import HeroInner from '@/components/shared/HeroInner';
import OurStory from '@/components/sections/about/OurStory';
import Values from '@/components/sections/about/Values';
import CredibilitySection from '@/components/sections/about/CredibilitySection';
import ProcessSection from '@/components/sections/home/ProcessSection';
import WhyChooseUs from '@/components/sections/home/WhyChooseUs';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About PYKK — Experts in Knowledge Capital',
  description: 'Learn about the founders and the philosophy behind PYKK, a Hyderabad-based consulting firm with 20+ years of experience.',
};

export default function AboutPage() {
  return (
    <main>
      <HeroInner {...siteContent.aboutHero} />
      <OurStory 
        headline={siteContent.aboutStoryHeadline} 
        paragraphs={siteContent.aboutParagraphs} 
        image={siteContent.aboutStoryImage}
      />
      <ProcessSection headline={siteContent.aboutProcessHeadline} steps={siteContent.aboutProcessSteps} />
      <WhyChooseUs headline={siteContent.aboutWhyChooseUsHeadline} features={siteContent.aboutFeatures} />
      <Values headline={siteContent.valuesHeadline} values={siteContent.values} />
      <CredibilitySection 
        headline={siteContent.credibilityHeadline}
        points={siteContent.credibilityPoints}
        image={siteContent.credibilityImage}
        ctaLabel="Get a Quote"
        ctaHref="/contact"
      />
    </main>
  );
}
