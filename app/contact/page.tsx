import HeroInner from '@/components/shared/HeroInner';
import ContactSection from '@/components/sections/contact/ContactSection';
import EnquiryForm from '@/components/sections/contact/EnquiryForm';
import FaqSection from '@/components/sections/contact/FaqSection';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | PYKK',
  description: 'Connect with PYKK for professional web development and process-driven digital solutions in Hyderabad.',
};

export default function ContactPage() {
  return (
    <main>
      <HeroInner 
        badge="Contact Us"
        headline="Ready to establish your authority?"
        subline="Tell us what you need and we'll recommend the right tier for your business."
        backgroundImage={siteContent.contactHero.backgroundImage}
      />
      <EnquiryForm 
        whatsappNumber={siteContent.company.whatsapp} 
        products={siteContent.products} 
        materials={siteContent.materials} 
      />
      <ContactSection company={siteContent.company} />
      <FaqSection faqs={siteContent.faqs} />
    </main>
  );
}
