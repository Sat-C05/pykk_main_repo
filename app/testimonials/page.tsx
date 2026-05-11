import HeroInner from '@/components/shared/HeroInner';
import Testimonials from '@/components/sections/home/Testimonials';
import CtaBand from '@/components/shared/CtaBand';
import { siteContent } from '@/data/siteContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials | PYKK',
  description: 'What Hyderabad business owners say about partnering with PYKK for their web development needs.',
};

export default function TestimonialsPage() {
  return (
    <main>
      <HeroInner 
        badge="Success Stories"
        headline="What Our Clients Say"
        subline="Real feedback from Hyderabad-based SMB owners who transformed their digital presence with PYKK."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85"
      />
      <Testimonials headline={siteContent.testimonialsHeadline} testimonials={siteContent.testimonials} />
      <CtaBand 
        headline="Ready to share your success story?"
        subline="Start your project enquiry today and let's build something exceptional together."
        primaryButton={{ label: "Start an Enquiry", href: "/contact" }}
        secondaryButton={{ label: "View Our Services", href: "/products" }}
      />
    </main>
  );
}
