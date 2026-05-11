import HeroInner from '@/components/shared/HeroInner';
import GalleryGrid from '@/components/sections/gallery/GalleryGrid';
import CtaBand from '@/components/shared/CtaBand';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | PYKK',
  description: 'Real-world examples of how PYKK has helped SMBs optimize operations and productize knowledge.',
};

export default function GalleryPage() {
  return (
    <main>
      <HeroInner {...siteContent.galleryHero} />
      <GalleryGrid images={siteContent.galleryImages} />
      <CtaBand {...siteContent.galleryCta} />
    </main>
  );
}
