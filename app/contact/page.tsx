import HeroInner from '@/components/shared/HeroInner';
import ContactSection from '@/components/sections/contact/ContactSection';
import EnquiryForm from '@/components/sections/contact/EnquiryForm';
import FaqSection from '@/components/sections/contact/FaqSection';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact PYKK Consulting',
  description: 'Reach out to PYKK for management consulting, operations optimization, and custom AI integration services in Hyderabad.',
};

export default function ContactPage() {
  return (
    <main>
      <HeroInner {...siteContent.contactHero} />
      <ContactSection company={siteContent.company} />
      <EnquiryForm 
        whatsappNumber={siteContent.company.whatsapp} 
        products={siteContent.products} 
        materials={siteContent.materials} 
      />
      <FaqSection faqs={siteContent.faqs} />
    </main>
  );
}
