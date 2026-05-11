import HeroInner from '@/components/shared/HeroInner';
import ProductsGrid from '@/components/sections/products/ProductsGrid';
import ProcessSection from '@/components/sections/home/ProcessSection';
import MaterialsSection from '@/components/sections/products/MaterialsSection';
import EnquiryCta from '@/components/sections/products/EnquiryCta';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulting Services | PYKK',
  description: 'Operations management, AI integration, and knowledge productization services tailored for SMBs in Hyderabad.',
};

export default function ProductsPage() {
  return (
    <main>
      <HeroInner {...siteContent.productsHero} />
      <ProductsGrid products={siteContent.products} />
      <ProcessSection headline={siteContent.processHeadline} steps={siteContent.processSteps} />
      <MaterialsSection headline={siteContent.materialsHeadline} materials={siteContent.materials} />
      <EnquiryCta 
        headline="Ready to transform your business?"
        subline="Schedule a consultation with our experts to discuss your requirements."
        whatsappNumber={siteContent.company.whatsapp}
      />
    </main>
  );
}
