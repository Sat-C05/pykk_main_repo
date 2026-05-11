export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  location: string;
  foundedYear: number;
  mapEmbedUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Product {
  name: string;
  description: string;
  image: string;
  category: string;
  enquireLink: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  location: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Certification {
  name: string;
  issuingBody: string;
  year: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  intro: string;
  date: string;
  readTime: string;
  image: string;
  content: BlogSection[];
}

export interface BlogSection {
  type: 'h2' | 'paragraph' | 'list';
  text?: string;
  items?: string[];
}

export interface Event {
  title: string;
  date: string;
  venue: string;
  description: string;
  registrationLink: string;
}

export interface PastEvent {
  title: string;
  year: string;
  venue: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface CredibilityPoint {
  text: string;
}

export interface Material {
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SiteContent {
  company: CompanyInfo;
  primaryNav: NavLink[];
  secondaryNav: NavLink[];
  credibilityBar: {
    items: Array<{ icon: string; text: string }>;
  };
  stats: Stat[];
  products: Product[];
  features: Feature[];
  testimonials: Testimonial[];
  processSteps: ProcessStep[];
  team: TeamMember[];
  certifications: Certification[];
  blogPosts: BlogPost[];
  upcomingEvents: Event[];
  pastEvents: PastEvent[];
  values: Value[];
  faqs: FaqItem[];
  materials: Material[];
  clientLogos: Array<{ label: string }>;
  aboutParagraphs: string[];
  galleryImages: Array<{ url: string; label: string }>;
  credibilityPoints: Array<{ icon: string; text: string; subline?: string }>;

  // Wiring Fields
  homeHero: {
    badge: string;
    headline: string;
    subheadline: string;
    trustSignals: string;
    backgroundImage: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };
  clientLogosTitle: string;
  whyChooseUsHeadline: string;
  productsPreviewHeadline: string;
  productsPreviewIntro: string;
  processHeadline: string;
  testimonialsHeadline: string;
  homeCta: {
    headline: string;
    subline: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };

  aboutHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  aboutStoryHeadline: string;
  aboutStoryImage: string;
  aboutProcessHeadline: string;
  aboutProcessSteps: ProcessStep[];
  aboutWhyChooseUsHeadline: string;
  aboutFeatures: Feature[];
  valuesHeadline: string;
  credibilityHeadline: string;
  credibilityImage: string;

  productsHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  materialsHeadline: string;

  blogHero: { badge: string; headline: string; subline: string; backgroundImage: string };

  contactHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  faqHeadline: string;

  teamHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  teamCta: {
    headline: string;
    subline: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };

  certificationsHero: { badge: string; headline: string; subline: string; backgroundImage: string };

  galleryHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  galleryCta: {
    headline: string;
    subline: string;
    primaryButton: { label: string; href: string };
    secondaryButton: { label: string; href: string };
  };

  exhibitionsHero: { badge: string; headline: string; subline: string; backgroundImage: string };
  upcomingEventsHeadline: string;
  analytics: {
    googleAnalyticsId: string;
  };
}
