import { SiteContent } from '@/types';

export const siteContent: SiteContent = {
  company: {
    name: "PYKK",
    tagline: "Pioneering Your Knowledge Capital.",
    phone: "+91 00000 00000", // TODO: Add actual phone number
    email: "pykk.consulting@gmail.com", // TODO: Add actual company email
    address: "Hyderabad, Telangana", // TODO: Add Google Maps embed URL for office location
    whatsapp: "910000000000", // TODO: Add actual WhatsApp number
    location: "Hyderabad, Telangana",
    foundedYear: 2024,
    mapEmbedUrl: "", // TODO: Add Google Maps embed URL for office location
  },
  primaryNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  secondaryNav: [
    { label: "Innovation", href: "/innovation" },
    { label: "Team", href: "/team" },
    { label: "Certifications & Quality", href: "/certifications" },
    { label: "Case Studies", href: "/case-studies" },
  ],
  credibilityBar: {
    items: [
      { icon: "shield", text: "QMS Certified Lead Auditor" },
      { icon: "calendar", text: "50+ Years Combined Experience" },
      { icon: "chart", text: "Process Optimization Experts" },
      { icon: "badge", text: "Proprietary AI Solutions" },
    ],
  },
  stats: [
    { value: "50+", label: "Years Combined Experience", description: "Real-world product and operations expertise." },
    { value: "100%", label: "Quality Driven", description: "Led by a QMS-certified Lead Auditor." },
    { value: "24/7", label: "AI Integration", description: "Empowering SMBs with custom AI tools." },
    { value: "1st", label: "Client-Centric", description: "We build tailored solutions, not generic advice." },
  ],
  products: [
    {
      name: "Management Consulting",
      description: "Helping SMB owners solve critical business problems using deep management expertise and structured methodologies.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      category: "Consulting",
      enquireLink: "/contact",
    },
    {
      name: "Product Management",
      description: "Structuring and launching scalable products derived from your existing knowledge or unique business processes.",
      image: "https://images.unsplash.com/photo-1512758684632-a6e8140dbf1c?auto=format&fit=crop&w=800&q=80",
      category: "Strategy",
      enquireLink: "/contact",
    },
    {
      name: "Operations Management",
      description: "Process optimization, workflow efficiency, and manufacturing improvement to drive your bottom line.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      category: "Operations",
      enquireLink: "/contact",
    },
    {
      name: "AI Integration for SMBs",
      description: "Custom AI-powered tools including the Dhya Suite of products, PWAs, and customized smart solutions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      enquireLink: "/contact",
    },
    {
      name: "Patent Services",
      description: "Expert guidance through the complex process of protecting your innovations and intellectual property.",
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80",
      category: "Legal",
      enquireLink: "/contact",
    },
    {
      name: "Knowledge Productization",
      description: "Transforming your unique domain expertise into scalable, saleable products and repeatable frameworks.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      category: "Strategy",
      enquireLink: "/contact",
    },
  ],
  features: [
    {
      icon: "psychology",
      title: "Deep Expertise",
      description: "Combined 50 years of real-world product and operations management experience.",
    },
    {
      icon: "verified",
      title: "Quality Built-In",
      description: "With a QMS-certified lead auditor on our founding team, quality is built into every engagement.",
    },
    {
      icon: "build",
      title: "We Don't Just Consult — We Build",
      description: "Resourceful and hands-on independent consultants delivering tailored, specific solutions for SMBs.",
    },
  ],
  testimonials: [
    {
      quote: "PYKK helped us completely overhaul our shop floor processes. Their operations management expertise reduced our turnaround time by 30% while actually improving our quality metrics.",
      name: "Kiran R.", // PLACEHOLDER — replace before go-live
      role: "Managing Director", // PLACEHOLDER — replace before go-live
      company: "Precision Manufacturing Pvt Ltd", // PLACEHOLDER — replace before go-live
      location: "Hyderabad",
    },
    {
      quote: "We had a lot of specialized knowledge in our firm, but PYKK showed us how to productize it. Now, instead of just billing hours, we have scalable knowledge products generating revenue.",
      name: "Anita M.", // PLACEHOLDER — replace before go-live
      role: "Founder", // PLACEHOLDER — replace before go-live
      company: "Financial Advisory Group", // PLACEHOLDER — replace before go-live
      location: "Hyderabad",
    },
    {
      quote: "Integrating AI seemed daunting, but PYKK's approach was practical and tailored to our SMB scale. Their customized AI tools have revolutionized our customer support and data analysis.",
      name: "Vikram P.", // PLACEHOLDER — replace before go-live
      role: "CEO", // PLACEHOLDER — replace before go-live
      company: "TechRetail Solutions", // PLACEHOLDER — replace before go-live
      location: "Hyderabad",
    },
  ],
  processSteps: [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your current processes, pain points, and knowledge capital.",
    },
    {
      number: "02",
      title: "Strategy Formulation",
      description: "Developing targeted solutions, from operations optimization to AI integration strategies.",
    },
    {
      number: "03",
      title: "Implementation & Building",
      description: "We don't just advise; we help build the tools, frameworks, and QMS processes required.",
    },
    {
      number: "04",
      title: "Review & Scaling",
      description: "Auditing outcomes against quality standards and scaling the solutions for sustained growth.",
    },
  ],
  team: [
    {
      name: "Founder 1 Name", // TODO: Replace placeholder founder names with actual names
      role: "Co-Founder & Product Expert",
      bio: "25+ years in product management. Certified QMS lead auditor ensuring excellence in every project.",
      image: "https://placehold.co/400x400/1E6FA8/FFFFFF?text=Founder+1", // TODO: Replace placeholder team photos with actual headshots
    },
    {
      name: "Founder 2 Name", // TODO: Replace placeholder founder names with actual names
      role: "Co-Founder & Operations Expert",
      bio: "25+ years in operations management. Resourceful independent consultant with a focus on actionable SMB solutions.",
      image: "https://placehold.co/400x400/1E6FA8/FFFFFF?text=Founder+2", // TODO: Replace placeholder team photos with actual headshots
    },
  ],
  certifications: [
    {
      name: "QMS Lead Auditor Certification",
      issuingBody: "International Certification Body",
      year: "Active",
      description: "Demonstrates expert-level competency in auditing Quality Management Systems to ensure highest service delivery standards.",
    },
    {
      name: "Patent & IP Strategy Experts",
      issuingBody: "PYKK Intellectual Property Services",
      year: "Active",
      description: "Providing strategic guidance on protecting and maximizing the value of your innovations.",
    },
  ],
  blogPosts: [
    {
      slug: "productizing-knowledge-smbs",
      title: "How SMBs Can Productize Their Knowledge Capital",
      category: "Strategy",
      excerpt: "Turn your years of experience into scalable, repeatable revenue streams.",
      author: "PYKK Founders", // PLACEHOLDER — replace before go-live
      intro: "Many SMB owners possess deep domain expertise that they currently only monetize through direct services. Discover how to package this knowledge into scalable products.",
      date: "May 2026", // PLACEHOLDER
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content for blog post. Discussing the transition from service-based models to productized knowledge models for SMBs.", // PLACEHOLDER
        }
      ],
    },
    {
      slug: "ai-integration-small-business",
      title: "Practical AI Integration for Small Businesses",
      category: "Technology",
      excerpt: "Demystifying AI tools and showing real-world applications for SMB operations.",
      author: "PYKK Founders", // PLACEHOLDER
      intro: "AI isn't just for massive tech enterprises. With the Dhya Suite and custom tools, SMBs can leverage AI to drastically improve efficiency.",
      date: "May 2026", // PLACEHOLDER
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content for blog post. Discussing custom AI tools, PWAs, and the Dhya Suite.", // PLACEHOLDER
        }
      ]
    },
    {
      slug: "qms-operations-efficiency",
      title: "Why a Quality Management System Matters for Your Bottom Line",
      category: "Operations",
      excerpt: "How QMS principles can optimize workflows and reduce costly errors.",
      author: "PYKK Founders", // PLACEHOLDER
      intro: "A robust Quality Management System (QMS) is often seen as a compliance requirement, but it's actually a powerful tool for operational efficiency.",
      date: "April 2026", // PLACEHOLDER
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      content: [
        {
          type: 'paragraph',
          text: "Placeholder content for blog post. Explaining the benefits of QMS and process optimization from an auditor's perspective.", // PLACEHOLDER
        }
      ]
    },
  ],
  upcomingEvents: [
    {
      title: "Innovation & AI Workshop for SMBs",
      date: "JUN 15",
      venue: "Hyderabad",
      description: "A hands-on session exploring how the Dhya Suite can transform your daily operations.",
      registrationLink: "#",
    },
  ],
  pastEvents: [
    { title: "Operations Optimization Seminar", year: "2025", venue: "Hyderabad" },
  ],
  values: [
    {
      title: "Practical Action",
      description: "We don't just consult; we build. Our solutions are designed for immediate, practical implementation.",
    },
    {
      title: "Uncompromising Quality",
      description: "Led by a QMS-certified auditor, we ensure every process and product meets the highest standards.",
    },
    {
      title: "Client Empowerment",
      description: "We help you unlock and productize your own knowledge capital for sustainable growth.",
    },
  ],
  faqs: [
    {
      question: "What types of businesses do you work with?",
      answer: "We primarily partner with Small and Medium-sized Businesses (SMBs) across various sectors looking to optimize operations, integrate AI, or productize their knowledge.",
    },
    {
      question: "What is the Dhya Suite?",
      answer: "The Dhya Suite is our proprietary line of AI-powered products designed specifically to solve common SMB challenges efficiently and cost-effectively.", // TODO: Confirm exact Dhya Suite product names and descriptions
    },
    {
      question: "Do you only offer advice, or do you help implement?",
      answer: "We strongly believe in 'We don't just consult — we build.' We actively assist in the implementation of processes, custom AI tools, and product frameworks.",
    },
  ],
  materials: [ 
    { name: "Strategic Planning" },
    { name: "Process Optimization" },
    { name: "AI Tool Development" },
    { name: "QMS Auditing" },
    { name: "Patent Advisory" },
  ],
  clientLogos: [
    { label: "SMB Client Logo" }, // TODO: Add actual client logos
    { label: "SMB Client Logo" },
    { label: "SMB Client Logo" },
    { label: "SMB Client Logo" },
    { label: "SMB Client Logo" },
  ],
  aboutParagraphs: [
    "PYKK is a management consulting firm built on the foundation of over 50 years of combined, real-world expertise. Founded by two seasoned professionals, we specialize in helping Small and Medium-sized Businesses (SMBs) solve complex operational challenges and unlock new avenues for growth.",
    "Our approach is fundamentally different from traditional advisory firms. We believe in taking practical action — we don't just consult, we build. Whether it's integrating bespoke AI solutions like our Dhya Suite, or optimizing manufacturing processes, we are deeply hands-on.",
    "Quality is ingrained in everything we do. With a QMS-certified Lead Auditor leading our engagements, we ensure that our solutions are not only innovative but robust, scalable, and built to the highest professional standards."
  ],
  galleryImages: [
    { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80", label: "Strategic Consulting" },
    { url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", label: "AI Integration" },
    { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", label: "Operations Optimization" },
    { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", label: "Knowledge Productization" },
    { url: "https://images.unsplash.com/photo-1512758684632-a6e8140dbf1c?auto=format&fit=crop&w=800&q=80", label: "Product Management" },
    { url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&q=80", label: "Patent Services" },
  ],
  credibilityPoints: [
    { icon: "verified", text: "QMS-Certified Leadership", subline: "Ensuring world-class quality in every consulting engagement." },
    { icon: "psychology", text: "50+ Years Expertise", subline: "Deep domain knowledge in product and operations management." },
    { icon: "build", text: "Hands-on Implementation", subline: "We build the solutions we recommend, including custom AI tools." },
  ],

  // Wiring Data
  homeHero: {
    badge: "Management & Operations Consulting",
    headline: "Pioneering Your Knowledge Capital.",
    subheadline: "We help SMB owners productize their expertise, optimize operations, and integrate custom AI solutions with QMS-certified precision.",
    trustSignals: "50+ Years Combined Experience · QMS Lead Auditor Certified",
    backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
    primaryButton: { label: "Consult With Us", href: "/contact" },
    secondaryButton: { label: "Explore Services", href: "/products" },
  },
  clientLogosTitle: "EMPOWERING SMBs ACROSS HYDERABAD",
  whyChooseUsHeadline: "Why SMB Owners Partner With PYKK",
  productsPreviewHeadline: "Our Core Services",
  productsPreviewIntro: "Comprehensive consulting and implementation services tailored for modern business challenges.",
  processHeadline: "Our Engagement Methodology",
  testimonialsHeadline: "Client Success Stories",
  homeCta: {
    headline: "Ready to Optimize Your Operations?",
    subline: "Connect with our founders for a strategic assessment of your business.",
    primaryButton: { label: "Schedule a Consultation", href: "/contact" },
    secondaryButton: { label: "Learn About Us", href: "/about" },
  },

  aboutHero: {
    badge: "About PYKK",
    headline: "Experience Meets Execution",
    subline: "Founded by independent consultants with 50 years of combined expertise in solving real-world SMB challenges.",
    backgroundImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
  },
  aboutStoryHeadline: "Our Consulting Philosophy",
  aboutStoryImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
  aboutProcessHeadline: "The PYKK Approach",
  aboutProcessSteps: [
    {
      number: "01",
      title: "Assess & Audit",
      description: "Rigorous evaluation of current operational flows by a certified QMS auditor.",
    },
    {
      number: "02",
      title: "Identify Knowledge Assets",
      description: "Pinpointing unique domain expertise that can be structured and monetized.",
    },
    {
      number: "03",
      title: "Design Custom Solutions",
      description: "Crafting bespoke operational frameworks and identifying AI integration points.",
    },
    {
      number: "04",
      title: "Build & Deploy",
      description: "Hands-on implementation of the Dhya Suite and other customized tools.",
    },
  ],
  aboutWhyChooseUsHeadline: "The PYKK Differentiators",
  aboutFeatures: [
    {
      icon: "verified",
      title: "QMS Certification",
      description: "Our founding team includes a certified lead auditor, embedding quality assurance into all our methodologies.",
    },
    {
      icon: "engineering",
      title: "Builders, Not Just Advisors",
      description: "We go beyond theoretical advice to actively build the PWAs, AI tools, and process frameworks you need.",
    },
    {
      icon: "insights",
      title: "SMB Focus",
      description: "We understand the unique constraints and agility of SMBs, delivering targeted, high-impact interventions.",
    },
  ],
  valuesHeadline: "Our Guiding Principles",
  credibilityHeadline: "Built on a Foundation of Trust",
  credibilityImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",

  productsHero: {
    badge: "Services & Solutions",
    headline: "Transforming Expertise into Value",
    subline: "From operations management to AI integration, we offer comprehensive solutions for business growth.",
    backgroundImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=85",
  },
  materialsHeadline: "Areas of Strategic Focus",

  blogHero: {
    badge: "Knowledge Hub",
    headline: "Insights & Perspectives",
    subline: "Expert thoughts on operations, AI for SMBs, and productizing your knowledge capital.",
    backgroundImage: "https://images.unsplash.com/photo-1512758684632-a6e8140dbf1c?auto=format&fit=crop&w=1600&q=85",
  },

  contactHero: {
    badge: "Get in Touch",
    headline: "Let's Solve Your Business Challenges",
    subline: "Reach out to discuss consulting, AI integration, or operations management.",
    backgroundImage: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1600&q=85",
  },
  faqHeadline: "Frequently Asked Questions",

  teamHero: {
    badge: "Our Founders",
    headline: "Meet the Experts Behind PYKK",
    subline: "Decades of combined experience in product strategy and operations optimization.",
    backgroundImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=85",
  },
  teamCta: {
    headline: "Looking to collaborate?",
    subline: "We partner with businesses ready to elevate their operations.",
    primaryButton: { label: "Contact Us", href: "/contact" },
    secondaryButton: { label: "View Services", href: "/products" },
  },

  certificationsHero: {
    badge: "Quality & Standards",
    headline: "Uncompromising Quality Assurance",
    subline: "Led by a QMS Lead Auditor, we adhere to the highest standards of consulting excellence.",
    backgroundImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1600&q=85",
  },

  galleryHero: {
    badge: "Case Studies",
    headline: "Real-World Impact",
    subline: "Explore how we've helped SMBs streamline operations and integrate AI.",
    backgroundImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600&q=85",
  },
  galleryCta: {
    headline: "Ready to achieve similar results?",
    subline: "Let's discuss how our frameworks can be applied to your business.",
    primaryButton: { label: "Start a Conversation", href: "/contact" },
    secondaryButton: { label: "Our Services", href: "/products" },
  },

  exhibitionsHero: {
    badge: "Innovation",
    headline: "We Don't Just Consult. We Build.",
    subline: "Discover the Dhya Suite and our proprietary methodology for integrating AI into SMBs.",
    backgroundImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
  },
  upcomingEventsHeadline: "Workshops & Engagements",
  analytics: {
    googleAnalyticsId: '', // Leave empty for demo
  },
};
