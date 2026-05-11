import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CredibilityBar from '@/components/layout/CredibilityBar';
import { siteContent } from '@/data/siteContent';
import { barlowCondensed, barlow } from '@/styles/fonts';
import '@/styles/globals.css';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  title: {
    default: siteContent.company.name,
    template: `%s | ${siteContent.company.name}`,
  },
  description: siteContent.company.tagline,
  metadataBase: new URL('https://venkatesh-sheet-metal.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteContent.company.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${barlow.variable}`}>
      <body>
        <Navbar
          companyName={siteContent.company.name}
          primaryNav={siteContent.primaryNav}
          whatsappNumber={siteContent.company.whatsapp}
        />
        <main>{children}</main>
        <Footer
          company={siteContent.company}
          primaryNav={siteContent.primaryNav}
          secondaryNav={siteContent.secondaryNav}
          whatsappNumber={siteContent.company.whatsapp}
        />
        <GoogleAnalytics measurementId={siteContent.analytics.googleAnalyticsId} />
      </body>
    </html>
  );
}
