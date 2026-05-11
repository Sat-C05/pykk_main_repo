/*
 * PYKK — siteContent.ts
 * Current scope: Web development and website design services only.
 * Management consulting, AI integration, patent services, and 
 * knowledge productization are intentionally excluded from 
 * this version.
 * Do not add those sections without explicit client instruction.
 */

import { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  company: {
    name: "PYKK",
    tagline: "Professional Websites for Businesses That Mean Business.",
    phone: "+91 00000 00000", // TODO: Add actual phone number
    email: "pykk.consulting@gmail.com", // TODO: Add actual email address (no company domain yet — personal Gmail in use)
    address: "Hyderabad, Telangana", // TODO: Add Google Maps embed URL for office location once confirmed
    whatsapp: "910000000000", // TODO: Add actual WhatsApp number
    location: "Hyderabad, Telangana",
    foundedYear: 2024,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.267959067571!3d17.4122998016429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin", 
  },
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  secondaryNav: [
    { label: "Our Process", href: "/innovation" },
    { label: "Team", href: "/team" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Quality & Standards", href: "/certifications" },
    { label: "Service Add-ons", href: "/case-studies" },
  ],
  credibilityBar: {
    items: [
      { icon: "shield", text: "QMS Certified Lead Auditor" },
      { icon: "calendar", text: "50+ Years Combined Experience" },
      { icon: "verified", text: "Structured Process-Driven Delivery" },
      { icon: "code", text: "Conversion-Focused Architecture" },
    ],
  },
  stats: [
    { value: "50+", label: "Years of Combined Experience", description: "Management and operations depth behind every build." },
    { value: "3", label: "Quality Tiers", description: "Presence, Growth, and Authority. Scoped to your business goals." },
    { value: "100%", label: "Process-Driven Delivery", description: "QMS-certified approach. Every project, every time." },
  ],
  products: [
    {
      name: "TIER 1 — PRESENCE",
      description: "Your professional digital address. Includes single-page static website, logo integration, service list, and WhatsApp button. Best for businesses needing a quick, credible presence.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Tier 1",
      enquireLink: "/contact",
    },
    {
      name: "TIER 2 — GROWTH",
      description: "A complete website that works for you. Multi-page structure, mobile optimized, enquiry form, and full Google integrations. Best for businesses ready to generate inquiries.",
      image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80",
      category: "Tier 2",
      enquireLink: "/contact",
    },
    {
      name: "TIER 3 — AUTHORITY",
      description: "A conversion machine built around your goals. Includes content writing, full SEO, company email, and Google Business setup. Best for growth-oriented businesses.",
      image: "https://images.unsplash.com/photo-1551288049-bb148328701d?auto=format&fit=crop&w=800&q=80",
      category: "Tier 3",
      enquireLink: "/contact",
    },
  ],
  features: [
    {
      icon: "psychology",
      title: "Business-Logic First",
      description: "Most agencies hand you a template. PYKK starts with your business goals, customers, and conversion logic.",
    },
    {
      icon: "verified",
      title: "QMS-Certified Process",
      description: "Documented, repeatable process discipline from intake to handoff. No surprises. No scope creep.",
    },
    {
      icon: "engineering",
      title: "Experienced Strategy",
      description: "50 years of management experience means your site is designed to convert visitors into customers.",
    },
  ],
  testimonials: [
    // PLACEHOLDER TESTIMONIALS — replace before go-live
    {
      quote: "I had no website for 12 years. PYKK built one in two weeks that actually makes us look like the serious operation we are. Three new inquiries came in the first month through the site alone.",
      name: "Ramesh Nair", 
      role: "Proprietor",
      company: "Nair Engineering Works, Nacharam",
      location: "Hyderabad",
    },
    {
      quote: "What impressed me was that they asked about my customers before they asked about my logo. The site they built actually explains what we do clearly. My clients have commented on it.",
      name: "Kavitha Reddy", 
      role: "Director",
      company: "Reddy Facilities Management, Secunderabad",
      location: "Hyderabad",
    },
    {
      quote: "The process was completely transparent. I knew what was happening at every stage. No surprises, no extra charges. That alone made it worth it.",
      name: "Suresh Agarwal", 
      role: "Owner",
      company: "Agarwal Industrial Supplies, Uppal",
      location: "Hyderabad",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery",
      description: "We start with your business, not a template. Intake conversation covers what you do, who your customers are, and your goals.",
    },
    {
      number: "02",
      title: "Content First",
      description: "Copy is written and approved before build begins. This non-negotiable step protects your time and ours.",
    },
    {
      number: "03",
      title: "Build",
      description: "The site is built against a defined checklist. Every page, section, and button is reviewed before delivery.",
    },
    {
      number: "04",
      title: "Test and Deploy",
      description: "Mobile tested. PageSpeed above 80. Hosted on Vercel for speed and security. Domain connected in under 10 minutes.",
    },
    {
      number: "05",
      title: "Handoff",
      description: "Full documentation and revision rounds included. We provide everything you need to understand your site and hosting.",
    },
  ],
  team: [
    {
      name: "Founder 1 Name", // TODO: Replace placeholder founder names with actual names
      role: "Co-Founder — Quality and Delivery",
      bio: "25+ years in product management. Certified QMS lead auditor. Brings documented process discipline to every client engagement.",
      image: "https://placehold.co/400x400/1E6FA8/FFFFFF?text=Founder+1", // TODO: Replace placeholder team photos with actual headshots
    },
    {
      name: "Founder 2 Name", // TODO: Replace placeholder founder names with actual names
      role: "Co-Founder — Strategy and Client Solutions",
      bio: "25+ years as independent management consultant. Worked with SMBs across manufacturing, services, and trade.",
      image: "https://placehold.co/400x400/1E6FA8/FFFFFF?text=Founder+2", // TODO: Replace placeholder team photos with actual headshots
    },
  ],
  certifications: [
    {
      name: "QMS Lead Auditor Certification",
      issuingBody: "International Quality Standards",
      year: "Active",
      description: "Documented processes, clear deliverables, and zero ambiguity at every stage of web delivery.",
    },
    {
      name: "50 Years Business Strategy",
      issuingBody: "Independent Management Consulting",
      year: "Active",
      description: "Deep understanding of SMB operations ensures every site is built to solve business problems.",
    },
  ],
  blogPosts: [
    {
      slug: "industrial-business-web-presence",
      title: "Why Your Industrial Business Needs More Than a WhatsApp Number",
      category: "Strategy",
      excerpt: "Building professional credibility in the Nacharam and Uppal industrial belts.",
      author: "PYKK Founders", // PLACEHOLDER — replace before go-live
      intro: "A professional website is not just a digital business card; it's a statement of capability and scale for your manufacturing firm.",
      date: "May 2026", // PLACEHOLDER
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content. Discussing how professional web presence builds trust with high-value industrial clients.", // PLACEHOLDER
        }
      ],
    },
    {
      slug: "smb-website-brief-errors",
      title: "5 Things SMB Owners Get Wrong About Their Website Brief",
      category: "Advice",
      excerpt: "How to save time and money by focusing on business outcomes first.",
      author: "PYKK Founders", // PLACEHOLDER
      intro: "A great website starts with a great brief. We identify the common mistakes that lead to delays and cost overruns.",
      date: "May 2026", // PLACEHOLDER
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content. Explaining the 'Content First' philosophy and its benefits for the client.", // PLACEHOLDER
        }
      ]
    },
    {
      slug: "website-delivery-roi",
      title: "The Hidden ROI of a Structured Web Delivery Process",
      category: "Quality",
      excerpt: "Why choosing a process-driven agency saves you more than just time.",
      author: "PYKK Founders", // PLACEHOLDER
      intro: "In web development, the process is often more important than the code. We explain how a structured approach eliminates hidden costs and rework.",
      date: "April 2026", // PLACEHOLDER
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bb148328701d?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content. Discussing the benefits of QMS lead auditor oversight in preventing scope creep and ensuring high-quality handoffs.", // PLACEHOLDER
        }
      ]
    },
  ],
  upcomingEvents: [],
  pastEvents: [],
  values: [
    {
      title: "Defined Scope",
      description: "Every project starts with a written brief. What is included, what is not, and what happens if scope changes.",
    },
    {
      title: "Content Before Code",
      description: "Copy is approved before build begins, eliminating the most common source of delays and rework.",
    },
    {
      title: "Checklist Delivery",
      description: "Every site is reviewed against a rigorous checklist: mobile, speed, links, forms, and SEO verified.",
    },
  ],
  faqs: [
    {
      question: "What is a 'QMS approach' to web development?",
      answer: "It means we apply international Quality Management Systems standards to your project. Every stage is documented and audited to ensure you get exactly what was agreed upon.",
    },
    {
      question: "Why do you insist on 'Content First'?",
      answer: "Because design depends on content. Approved copy ensures we build the right structure the first time, preventing rework and delays.",
    },
    {
      question: "Which tier is right for my business?",
      answer: "Tier 1 is for quick credibility. Tier 2 is for inquiry generation. Tier 3 is for market leaders needing a full conversion system.",
    },
    {
      question: "Can I upgrade my tier after the website is live?",
      answer: "Absolutely. Our sites are built to be scalable. You can start with Tier 1 and move to Tier 2 or 3 as your business grows and your requirements evolve.",
    },
    {
      question: "What is the standard payment structure?",
      answer: "We typically work on a 50% advance and 50% on-completion basis. For larger Tier 3 projects, we can discuss a milestone-based payment plan.",
    },
    {
      question: "Do you provide domain registration and hosting?",
      answer: "We assist with the setup of your own domain and hosting accounts. We believe you should always own your digital assets, and we help you manage them.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Tier 1 projects typically go live in 7–10 days. Tier 2 and Tier 3 projects take between 3–6 weeks depending on content readiness and complexity.",
    },
  ],
  materials: [ 
    { name: "SEO Setup & Optimization" },
    { name: "Extra Custom Pages" },
    { name: "Professional Content Writing" },
    { name: "Google Business Profile Setup" },
    { name: "Company Domain Email" },
    { name: "Advanced Analytics Setup" },
  ],
  clientLogos: [
    { label: "Industrial Client" }, // TODO: Add actual client logos
    { label: "Retail Client" },
    { label: "Service Provider" },
    { label: "Trading Firm" },
    { label: "Manufacturing SMB" },
  ],
  aboutParagraphs: [
    "PYKK was founded by two independent consultants with a combined 50 years of product management and operations management experience. We have seen how businesses work from the inside — the decisions, the constraints, and the pressure to grow with limited resources.",
    "That experience is what makes our websites different. We do not just design pages. We structure a conversion flow — what a visitor sees first, what builds trust, and what makes them pick up the phone or fill the enquiry form.",
    "And because one of our founders is a certified QMS lead auditor, every engagement follows a documented process. Scope defined upfront. Content approved before build. Revisions handled cleanly. Handoff with full documentation. No exceptions."
  ],
  galleryImages: [
    { url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", label: "Professional Website Design" },
    { url: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&fit=crop&w=800&q=80", label: "Mobile-Optimized Growth Sites" },
    { url: "https://images.unsplash.com/photo-1551288049-bb148328701d?auto=format&fit=crop&w=800&q=80", label: "Conversion-Focused Authority Sites" },
    { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80", label: "Structured QMS Delivery" },
  ],
  credibilityPoints: [
    { icon: "verified", text: "QMS-Certified Leadership", subline: "Documented processes ensure highest standards of delivery." },
    { icon: "psychology", text: "50+ Years Combined Expertise", subline: "Designing around business outcomes and conversion logic." },
    { icon: "build", text: "Fast, Reliable Execution", subline: "High-performance builds optimized for mobile and speed." },
  ],

  // Wiring Data
  homeHero: {
    badge: "Web Development Agency",
    headline: "Professional Websites for Businesses That Mean Business.",
    subheadline: "PYKK builds conversion-focused websites for SMBs across Hyderabad and Telangana. Fast delivery. Structured process. Results you can measure.",
    trustSignals: "50+ Years Combined Experience · QMS Lead Auditor Certified",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    primaryButton: { label: "See Our Packages", href: "/products" },
    secondaryButton: { label: "Talk to Us", href: "/contact" },
  },
  clientLogosTitle: "EMPOWERING SMBs ACROSS HYDERABAD",
  whyChooseUsHeadline: "Why Business Owners Trust PYKK",
  productsPreviewHeadline: "Service Tiers & Pricing",
  productsPreviewIntro: "Every business has different needs. Our tiered structure ensures you get exactly what you need.",
  processHeadline: "Our 5-Step Documented Process",
  testimonialsHeadline: "What Local Business Owners Say",
  homeCta: {
    headline: "Ready for a Conversion-Focused Website?",
    subline: "Most web agencies start with templates. We start with your business goals.",
    primaryButton: { label: "View Packages", href: "/products" },
    secondaryButton: { label: "Start an Enquiry", href: "/contact" },
  },

  aboutHero: {
    badge: "Built by Experts",
    headline: "Built by People Who Understand Business First",
    subline: "50 years of management depth applied to every line of code we write.",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
  },
  aboutStoryHeadline: "The PYKK Philosophy",
  aboutStoryImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  aboutProcessHeadline: "The QMS Advantage",
  aboutProcessSteps: [
    {
      number: "01",
      title: "Defined Scope",
      description: "Written brief outlining exactly what is included and what is not.",
    },
    {
      number: "02",
      title: "Approved Content",
      description: "Non-negotiable sign-off on all copy before build begins.",
    },
    {
      number: "03",
      title: "Rigorous Test",
      description: "Checked against defined mobile and performance standards.",
    },
    {
      number: "04",
      title: "Standard Handoff",
      description: "Full documentation and domain setup guide included.",
    },
  ],
  aboutWhyChooseUsHeadline: "Structured for Competence",
  aboutFeatures: [
    {
      icon: "verified",
      title: "Audited Quality",
      description: "Certified lead auditor oversight ensures zero ambiguity and absolute quality.",
    },
    {
      icon: "insights",
      title: "Business Depth",
      description: "We understand how businesses actually work — the decisions, the constraints, and the goals.",
    },
    {
      icon: "engineering",
      title: "Professional Build",
      description: "Clean, fast, and mobile-optimized technical execution every time.",
    },
  ],
  valuesHeadline: "Our Work Standards",
  credibilityHeadline: "A Process You Can Trust",
  credibilityImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",

  productsHero: {
    badge: "Three Tiers. One Standard.",
    headline: "Three Tiers. One Standard of Quality.",
    subline: "PYKK's tiered structure ensures you get exactly what your business needs — nothing more, nothing less.",
    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
  },
  materialsHeadline: "Standard Tiers",

  blogHero: {
    badge: "SMB Web Hub",
    headline: "Insights & Perspectives",
    subline: "Expert thoughts on digital presence, business logic, and web quality for local SMBs.",
    backgroundImage: "https://images.unsplash.com/photo-1512758684632-a6e8140dbf1c?auto=format&fit=crop&w=1600&q=85",
  },

  contactHero: {
    badge: "Let's Talk",
    headline: "Let's Talk About Your Website",
    subline: "Tell us about your business and what you need. We'll get back to you within 24 hours.",
    backgroundImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1600&q=85",
  },
  faqHeadline: "Standard Revision Policy",

  teamHero: {
    badge: "The Founders",
    headline: "Experience at the Helm",
    subline: "50 years of combined management and product expertise powering your build.",
    backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
  },
  teamCta: {
    headline: "Ready to work with senior experts?",
    subline: "Your site is managed by founders, not juniors. Start an enquiry today.",
    primaryButton: { label: "Enquire Now", href: "/contact" },
    secondaryButton: { label: "View Tiers", href: "/products" },
  },

  certificationsHero: {
    badge: "Quality & Standards",
    headline: "Process Is Not a Buzzword. It Is How We Work.",
    subline: "Applying international quality management standards to every web project we deliver.",
    backgroundImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1600&q=85",
  },

  galleryHero: {
    badge: "Service Add-ons",
    headline: "Need Something Extra? We Have It.",
    subline: "Every add-on is available across all tiers. Every solution is tailored to your business goals.",
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85",
  },
  galleryCta: {
    headline: "Not sure which add-ons you need?",
    subline: "Tell us your goal and we'll recommend what matters.",
    primaryButton: { label: "Talk to Us", href: "/contact" },
    secondaryButton: { label: "View Our Process", href: "/innovation" },
  },

  exhibitionsHero: {
    badge: "Our Process",
    headline: "A Process You Can Trust. Every Time.",
    subline: "Every PYKK project follows the same documented, repeatable process.",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
  },
  upcomingEventsHeadline: "Revision Standards",
  analytics: {
    googleAnalyticsId: '', // TODO: Activate Google Analytics ID when provided
  },
};
