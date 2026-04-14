// ─────────────────────────────────────────────────────────────────────────────
//  Central data store — all content lives here
// ─────────────────────────────────────────────────────────────────────────────

export interface Service {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  shortDesc: string;
  heroImg: string;
  overview: string;
  challenge: string;
  approach: { step: string; title: string; desc: string }[];
  deliverables: string[];
  tools: string[];
  relatedWork: string[]; // slugs
}

export interface CaseStudy {
  slug: string;
  num: string;
  name: string;
  category: string;
  year: string;
  result: string;
  metrics: { value: string; label: string }[];
  heroImg: string;
  galleryImgs: string[];
  overview: string;
  challenge: string;
  solution: string;
  process: { phase: string; title: string; desc: string }[];
  services: string[];
  techStack: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  content: { type: "h2" | "h3" | "p" | "quote"; text: string }[];
}

// ─────────────────────────────────────────────────────────────────────────────
//  SERVICES
// ─────────────────────────────────────────────────────────────────────────────
export const services: Service[] = [
  {
    slug: "brand-system",
    num: "01",
    title: "Brand System",
    tagline: "Identity that speaks before you do.",
    shortDesc: "Identity, art direction, and expressive visual storytelling.",
    heroImg:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80",
    overview:
      "A brand system is the single most leveraged investment a company can make. We craft visual identities that feel instantly recognizable, scale across every surface, and compound in value over time.",
    challenge:
      "Most brands suffer from inconsistency — a logo created in isolation, colors chosen by committee, typography that clashes. The result is visual noise instead of visual authority.",
    approach: [
      {
        step: "01",
        title: "Brand Discovery",
        desc: "Deep-dive workshops to map your positioning, audience archetypes, competitive landscape, and the emotional territory your brand should own.",
      },
      {
        step: "02",
        title: "Visual Strategy",
        desc: "We define your brand's aesthetic DNA — the color philosophy, typographic voice, photographic language, and motion character before any design begins.",
      },
      {
        step: "03",
        title: "Identity Design",
        desc: "Logo system, wordmark variants, icon suite, full color system with accessibility tokens, and type scale — all built for dark and light surfaces.",
      },
      {
        step: "04",
        title: "Brand Guidelines",
        desc: "A living Figma document and PDF guidelines covering every use case your team will ever face. Usage rules, examples, and anti-patterns included.",
      },
    ],
    deliverables: [
      "Primary + secondary logo suite (SVG, PNG, WebP)",
      "Full color system with HEX, RGB, HSL, and CSS tokens",
      "Typography system (headings, body, UI, mono)",
      "Icon library (32px grid, consistent stroke weight)",
      "Photography & illustration direction document",
      "Motion language principles",
      "Brand guidelines (Figma + PDF)",
      "Social media asset templates",
    ],
    tools: ["Figma", "Illustrator", "After Effects", "Notion"],
    relatedWork: ["mint-and-marble", "vision-leap"],
  },
  {
    slug: "web-experience",
    num: "02",
    title: "Web Experience",
    tagline: "Websites that feel like experiences.",
    shortDesc: "High-performance websites with cinematic interaction patterns.",
    heroImg:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80",
    overview:
      "We build websites that balance visual ambition with technical precision. Every interaction is intentional, every transition purposeful, and every millisecond optimized. The result: a site that feels like a product people want to use.",
    challenge:
      "The web is littered with visually impressive sites that are slow, inaccessible, and impossible to maintain. We believe performance and beauty are not at odds — they reinforce each other.",
    approach: [
      {
        step: "01",
        title: "Architecture Planning",
        desc: "We map the full information architecture, define component hierarchy, choose the right tech stack, and set performance budgets before writing a line of code.",
      },
      {
        step: "02",
        title: "Design & Prototyping",
        desc: "High-fidelity Figma designs for every breakpoint, with interactive prototypes for all micro-interactions and key user flows.",
      },
      {
        step: "03",
        title: "Development",
        desc: "React or Next.js frontend with TypeScript, TailwindCSS, and custom animation layers. CMS integration (Sanity, Contentful) where needed.",
      },
      {
        step: "04",
        title: "Launch & Optimize",
        desc: "Lighthouse 95+ scores, Core Web Vitals green, full QA across devices and browsers. Deployment to Vercel with analytics and monitoring.",
      },
    ],
    deliverables: [
      "Full responsive website (mobile-first)",
      "CMS integration with training documentation",
      "SEO foundation (meta, schema, sitemap, robots.txt)",
      "Core Web Vitals optimization (LCP < 1.5s target)",
      "Accessibility audit (WCAG AA compliance)",
      "Analytics & performance monitoring setup",
      "Figma design system handoff",
      "30-day post-launch support",
    ],
    tools: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel", "Sanity"],
    relatedWork: ["echo-theory", "mint-and-marble"],
  },
  {
    slug: "product-design",
    num: "03",
    title: "Product Design",
    tagline: "UX that converts, systems that scale.",
    shortDesc: "UX architecture for modern SaaS and AI-first platforms.",
    heroImg:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Product design at our studio starts with outcomes, not wireframes. We map user journeys, identify friction points, and design flows that guide users from discovery to activation to retention with minimal effort.",
    challenge:
      "SaaS products and AI tools often fail not because the technology is poor, but because the experience is confusing. We bridge the gap between powerful functionality and intuitive use.",
    approach: [
      {
        step: "01",
        title: "Research & Discovery",
        desc: "User interviews, competitive analysis, heuristic evaluation of existing product (if any), and definition of key user personas and jobs-to-be-done.",
      },
      {
        step: "02",
        title: "Information Architecture",
        desc: "Navigation structure, page hierarchy, content model, and user flow mapping. We validate architecture with card sorting and tree testing before designing.",
      },
      {
        step: "03",
        title: "UX Design",
        desc: "Low-fidelity wireframes → user-tested prototypes → high-fidelity designs. Iterative feedback loops with your team at every stage.",
      },
      {
        step: "04",
        title: "Design System",
        desc: "A scalable component library in Figma with variants, auto-layout, semantic tokens, and developer-ready specs for every component.",
      },
    ],
    deliverables: [
      "User research report + persona definitions",
      "Full information architecture document",
      "Interactive prototype (key user flows)",
      "High-fidelity designs for all screens (desktop + mobile)",
      "Figma design system with component library",
      "Developer handoff specs (Figma + Zeplin export)",
      "Usability testing report",
      "Onboarding flow design",
    ],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Notion", "Linear"],
    relatedWork: ["echo-theory", "vision-leap"],
  },
  {
    slug: "creative-dev",
    num: "04",
    title: "Creative Dev",
    tagline: "Code as a creative medium.",
    shortDesc: "Motion-rich frontends built for speed and stability.",
    heroImg:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1600&q=80",
    overview:
      "We write code the way designers think — with intention, craft, and an eye for the details that separate good from great. Our frontend engineers are as comfortable in Figma as in VS Code.",
    challenge:
      "The gap between a beautifully designed mockup and a polished production website is where most projects lose quality. Our team closes that gap completely.",
    approach: [
      {
        step: "01",
        title: "Technical Scoping",
        desc: "We define the tech stack, animation approach, third-party integrations, and performance strategy before any code is written.",
      },
      {
        step: "02",
        title: "Component Architecture",
        desc: "Atomic design principles, reusable component library, TypeScript types, and a clean folder structure that scales with your product.",
      },
      {
        step: "03",
        title: "Motion Implementation",
        desc: "Custom animation systems using Framer Motion, GSAP, or native CSS. Every transition is performance-profiled and falls back gracefully on reduced-motion preferences.",
      },
      {
        step: "04",
        title: "Deployment & CI/CD",
        desc: "Vercel or Netlify deployment with GitHub Actions CI/CD pipeline, automated Lighthouse audits, preview environments, and rollback capability.",
      },
    ],
    deliverables: [
      "Production-ready React/Next.js codebase (TypeScript)",
      "Custom animation system documentation",
      "Component Storybook (if requested)",
      "CI/CD pipeline with GitHub Actions",
      "Automated performance testing suite",
      "Accessibility audit & ARIA implementation",
      "Code documentation & architecture overview",
      "Knowledge transfer session (1h)",
    ],
    tools: ["React", "Next.js", "TypeScript", "GSAP", "Framer Motion", "Three.js", "Storybook", "Vercel"],
    relatedWork: ["vision-leap", "echo-theory"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  CASE STUDIES
// ─────────────────────────────────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    slug: "mint-and-marble",
    num: "01",
    name: "MINT & MARBLE",
    category: "Brand System + Web Experience",
    year: "2026",
    result: "+42% engagement",
    metrics: [
      { value: "+42%", label: "User engagement" },
      { value: "2.1×", label: "Avg session duration" },
      { value: "98", label: "Lighthouse score" },
      { value: "2 weeks", label: "Delivery time" },
    ],
    heroImg:
      "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?auto=format&fit=crop&w=1600&q=80",
    galleryImgs: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
    ],
    overview:
      "Mint & Marble is a luxury lifestyle brand selling curated home objects and personal accessories. They needed a digital presence that matched the physical experience of their boutique — unhurried, tactile, and unmistakably premium.",
    challenge:
      "Their previous website was generic and fast-fashion in feel — high bounce rates and poor conversion despite strong physical retail performance. The brand had equity; the digital presence didn't reflect it.",
    solution:
      "We rebuilt the entire visual identity for digital contexts, then designed and developed a custom editorial website with generous whitespace, slow-pan product photography, and a checkout flow engineered for intent rather than impulse.",
    process: [
      {
        phase: "01",
        title: "Brand Audit & Direction",
        desc: "Week one began with a full audit of existing brand assets, competitor positioning, and customer intercept interviews. We identified the brand's core emotional territory: quiet luxury.",
      },
      {
        phase: "02",
        title: "Visual Identity Refinement",
        desc: "We retained the original wordmark but rebuilt the supporting system — new color palette (cream, slate, warm black), a bespoke type pairing, and a photography language focused on texture and light.",
      },
      {
        phase: "03",
        title: "Website Design",
        desc: "Editorial grid layout with 3-column and full-bleed variations. Product pages designed with zoom-on-hover, material callouts, and storytelling sections per item. Mobile experience prioritized.",
      },
      {
        phase: "04",
        title: "Development & Launch",
        desc: "Built on Next.js with Sanity CMS. The team can update collections, editorial content, and promotions without a developer. Deployed to Vercel with sub-1s LCP on all key pages.",
      },
    ],
    services: ["Brand System", "Web Experience"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Sanity CMS", "Vercel", "Framer Motion"],
  },
  {
    slug: "echo-theory",
    num: "02",
    name: "ECHO THEORY",
    category: "Product Design + Creative Dev",
    year: "2026",
    result: "3.1× dwell time",
    metrics: [
      { value: "3.1×", label: "Avg dwell time" },
      { value: "89%", label: "User satisfaction" },
      { value: "-34%", label: "Support tickets" },
      { value: "5 weeks", label: "Delivery time" },
    ],
    heroImg:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    galleryImgs: [
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    ],
    overview:
      "Echo Theory is a collaborative music production platform for professional beatmakers and producers. The product allows real-time session collaboration, sample management, and AI-assisted composition — but the original UI buried these capabilities under layers of complexity.",
    challenge:
      "Despite powerful features, users described the original interface as 'intimidating' and 'overwhelming.' Activation rates were low, and support tickets for basic features were high. The product needed to feel creative, not clinical.",
    solution:
      "We led a full product redesign — starting with a 3-week research phase, rearchitecting the navigation model, and redesigning every screen with a dark, studio-like aesthetic that matched the creative context of the user.",
    process: [
      {
        phase: "01",
        title: "Research & Problem Framing",
        desc: "10 user interviews, session recordings review, and heuristic evaluation of 14 screens. Key finding: users couldn't find the collaboration features because they were nested 3 levels deep.",
      },
      {
        phase: "02",
        title: "Navigation Redesign",
        desc: "Flattened the hierarchy from 5 navigation levels to 2. Introduced a persistent sidebar for session state and a command palette (⌘K) for power users to access any feature instantly.",
      },
      {
        phase: "03",
        title: "Visual Design",
        desc: "Dark UI with high-contrast interactive elements. Waveform visualizations as primary UI metaphor. Consistent micro-interaction patterns for loading states, errors, and success moments.",
      },
      {
        phase: "04",
        title: "Prototype & Validate",
        desc: "Interactive prototype tested with 8 users, 3 iterations. Post-redesign task completion rates improved from 61% to 94% in unmoderated testing.",
      },
    ],
    services: ["Product Design", "Creative Dev"],
    techStack: ["React", "TypeScript", "Zustand", "TailwindCSS", "WebAudio API", "WebSockets"],
  },
  {
    slug: "vision-leap",
    num: "03",
    name: "VISION LEAP",
    category: "Web Experience + Creative Dev",
    year: "2025",
    result: "+67% lead quality",
    metrics: [
      { value: "+67%", label: "Lead quality score" },
      { value: "-40%", label: "Bounce rate" },
      { value: "4.2×", label: "Demo request rate" },
      { value: "3 weeks", label: "Delivery time" },
    ],
    heroImg:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80",
    galleryImgs: [
      "https://images.unsplash.com/photo-1518769578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    ],
    overview:
      "Vision Leap is a B2B AI platform that helps sales teams identify and engage high-intent leads using behavioral signals. Despite a technically impressive product, their website read like a technical whitepaper — leading to high bounce rates and low-quality demo requests.",
    challenge:
      "Enterprise buyers were landing on the site and leaving within 30 seconds. The homepage led with technical architecture instead of business outcomes. The demo request form had 14 fields. Conversion was suffering from over-explanation.",
    solution:
      "We rebuilt the go-to-market narrative, designed a storytelling-first homepage that led with outcomes not features, and reduced the demo form to 4 fields. The new site felt like a trusted advisor, not a technical manual.",
    process: [
      {
        phase: "01",
        title: "Messaging Architecture",
        desc: "Reviewed 6 months of sales call recordings and win/loss data. Identified the 3 buyer triggers that predicted purchase. Rebuilt the homepage narrative around these triggers.",
      },
      {
        phase: "02",
        title: "Landing Page Design",
        desc: "Designed a long-form homepage with strong above-the-fold value proposition, social proof woven throughout, and a progressive disclosure pattern that reveals technical depth for buyers who want it.",
      },
      {
        phase: "03",
        title: "Conversion Optimization",
        desc: "A/B tested 4 headline variants, 2 CTA button designs, and 3 form lengths. Implemented smart form pre-fill using IP enrichment. Reduced form completion time by 60%.",
      },
      {
        phase: "04",
        title: "Development & Launch",
        desc: "Built with Next.js and deployed to Vercel in 2 days. Integrated with their HubSpot CRM for lead scoring. Full analytics instrumentation with Posthog.",
      },
    ],
    services: ["Web Experience", "Creative Dev"],
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "HubSpot", "PostHog", "Vercel"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  TEAM
// ─────────────────────────────────────────────────────────────────────────────
export const team: TeamMember[] = [
  {
    name: "Ava Chen",
    role: "Creative Director",
    bio: "10 years shaping visual identities for companies across fintech, luxury, and AI. Formerly art director at Wolff Olins. Obsessed with the space between editorial print and digital motion.",
  },
  {
    name: "Noah Kim",
    role: "Product Strategist",
    bio: "Former product lead at a Series B SaaS company. Bridges business outcomes and user experience with a background in cognitive psychology and conversion design.",
  },
  {
    name: "Mia Ortega",
    role: "Design Engineer",
    bio: "Writes CSS the way other people write prose. Builds complex interactions that look effortless. Previously at a motion design studio in Berlin.",
  },
  {
    name: "Leo Park",
    role: "Motion Designer",
    bio: "Specializes in animation systems that feel intentional, not decorative. Every frame serves the narrative. Background in film and broadcast before moving to web.",
  },
  {
    name: "Sara Osei",
    role: "Brand Strategist",
    bio: "Transforms ambiguous positioning problems into clear visual territory. Leads brand workshops and has worked with over 40 companies from pre-seed to Series C.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
//  BLOG POSTS
// ─────────────────────────────────────────────────────────────────────────────
export const blogPosts: BlogPost[] = [
  {
    slug: "editorial-web-design-improves-recall",
    title: "How editorial web design improves brand recall",
    excerpt:
      "The websites people remember aren't the ones with the most features — they're the ones that feel like a coherent world. Editorial layout principles are the key.",
    date: "Apr 08, 2026",
    readTime: "6 min read",
    category: "Design",
    content: [
      {
        type: "p",
        text: "There's a difference between a website that's visited and a website that's remembered. The former gets traffic. The latter gets recalled in conversations, referenced on social media, and returned to without a specific reason. Editorial web design is the discipline that creates the latter.",
      },
      {
        type: "h2",
        text: "What editorial design actually means",
      },
      {
        type: "p",
        text: "Editorial design originates in print — the craft of laying out magazines, books, and newspapers in a way that guides the reader through a hierarchy of importance while communicating a distinct visual personality. When this thinking moves to the web, it means treating every page like a spread: with considered column grids, deliberate negative space, typographic rhythm, and visual anchors that help the eye move through content intentionally.",
      },
      {
        type: "p",
        text: "Most web design does the opposite. It treats pages as utility interfaces — forms to fill, buttons to click, information to consume. The result is websites that function but don't resonate. Editorial design adds the emotional layer that utility design removes.",
      },
      {
        type: "h2",
        text: "The psychology of visual hierarchy",
      },
      {
        type: "p",
        text: "Eye-tracking studies consistently show that humans scan web pages in F-shaped or Z-shaped patterns before reading anything in depth. Editorial designers work with these patterns rather than against them. They place the most critical information in the zones the eye naturally visits first, then use contrast, scale, and positioning to pull attention through a deliberate sequence.",
      },
      {
        type: "quote",
        text: "A great layout doesn't just present information — it tells a story about what matters and in what order.",
      },
      {
        type: "p",
        text: "The scale contrast between headline and body copy, the breathing room around a key statistic, the diagonal tension created by an oversized background numeral — these are compositional decisions that encode meaning beyond words. They signal craft. And craft signals trust.",
      },
      {
        type: "h2",
        text: "Typography as the primary design tool",
      },
      {
        type: "p",
        text: "In editorial design, typography does most of the heavy lifting. Not just in terms of readability, but in terms of personality. A compressed grotesque in all-caps communicates authority. An italic serif with generous leading communicates intimacy. The pairing of a display serif with a geometric sans communicates modern classicism.",
      },
      {
        type: "p",
        text: "The brands with the strongest digital recall tend to have strong typographic identities. When you see a certain weight of a certain typeface at a certain size on a certain background, you know immediately who you're looking at. That kind of typographic signature is built through consistency and discipline — not variety.",
      },
      {
        type: "h2",
        text: "Practical principles you can apply now",
      },
      {
        type: "p",
        text: "Start with a strict type scale. Pick 4-5 sizes maximum and don't deviate. Establish a baseline grid and snap everything to it. Introduce one moment of dramatic scale per section — a single oversized element that anchors the composition and creates visual memory. Use asymmetry deliberately: symmetrical layouts feel stable but forgettable; asymmetric layouts feel dynamic and distinctive.",
      },
      {
        type: "p",
        text: "Most importantly: leave more space than feels comfortable. The instinct when you have content is to use all available space. Editorial designers do the opposite. Empty space is structural — it gives elements room to breathe and communicates confidence in the content that's there.",
      },
    ],
  },
  {
    slug: "designing-dark-interfaces-without-visual-noise",
    title: "Designing dark interfaces without visual noise",
    excerpt:
      "Dark UI is everywhere, but most of it is just a white interface with the colors inverted. True dark design is a different discipline entirely.",
    date: "Mar 30, 2026",
    readTime: "7 min read",
    category: "UI Design",
    content: [
      {
        type: "p",
        text: "Dark mode became mainstream around 2019 when Apple and Google added system-level support. Since then, it's become the default aesthetic for tech products, developer tools, and any brand that wants to signal 'sophisticated.' But most dark interfaces are just light interfaces with inverted colors — and they show it.",
      },
      {
        type: "h2",
        text: "The fundamental mistake: inverting a light design",
      },
      {
        type: "p",
        text: "A well-designed dark interface requires rethinking the visual hierarchy from scratch. Light designs use contrast by going from dark text on a light background. Dark designs can't simply flip this — you end up with bright text that vibrates against a black background, creating visual noise rather than clarity.",
      },
      {
        type: "p",
        text: "The solution is to use white sparingly and strategically. In a well-crafted dark UI, pure white (#FFFFFF) typically appears only for the most critical interactive elements and primary headings. Body copy sits at 60-75% white opacity. Secondary labels at 40-50%. Tertiary information at 25-35%. This opacity-based hierarchy creates depth without visual noise.",
      },
      {
        type: "h2",
        text: "Background layers and elevation",
      },
      {
        type: "p",
        text: "In light design, elevation is typically communicated with drop shadows. In dark design, shadows become invisible — a dark shadow on a dark background reads as nothing. Instead, elevation is communicated through lightness: higher-elevation surfaces are lighter than the base layer.",
      },
      {
        type: "quote",
        text: "In dark UI, light is precious. Use it to signal importance, not to fill space.",
      },
      {
        type: "p",
        text: "A typical dark elevation scale might be: base (#000000), surface-1 (#0A0A0A), surface-2 (#111111), surface-3 (#1A1A1A), surface-4 (#222222). The differences are subtle but perceived. Cards appear to float above the background. Modals feel genuinely elevated. Tooltips read as the topmost layer without needing any shadow.",
      },
      {
        type: "h2",
        text: "The role of borders and dividers",
      },
      {
        type: "p",
        text: "In dark interfaces, borders serve a structural role that they don't always need to in light designs. Because backgrounds are so close in value to each other, a 1px border at 8-12% white opacity can be the only thing separating a card from its background. Getting the opacity exactly right is critical — too little and the card disappears, too much and it creates visual noise.",
      },
      {
        type: "p",
        text: "Dividers between sections should be even more subtle — 4-6% white. The goal is to separate content areas without creating a visual rhythm of their own. If your dividers are noticeable as elements rather than boundaries, they're too strong.",
      },
      {
        type: "h2",
        text: "Choosing an accent color",
      },
      {
        type: "p",
        text: "Dark interfaces let accent colors shine literally — a single vivid color against a dark background has enormous visual impact. This means you can use accent color much more sparingly than on light backgrounds. A well-placed accent on a CTA button, active state indicator, or highlighted data point carries far more weight.",
      },
      {
        type: "p",
        text: "The safest accent colors for dark backgrounds are in the high-saturation, medium-brightness range: electric blue (#4A9EFF), neon mint (#00FFC2), warm yellow (#FFE566), or lime (#C8FF47). Pure red and orange should be reserved for error states — they carry strong semantic weight that conflicts with use as a brand accent.",
      },
    ],
  },
  {
    slug: "motion-systems-for-premium-product-websites",
    title: "Motion systems for premium product websites",
    excerpt:
      "The difference between a website that feels cheap and one that feels premium often comes down to a dozen micro-animation decisions made across 6 months of iteration.",
    date: "Mar 14, 2026",
    readTime: "5 min read",
    category: "Motion",
    content: [
      {
        type: "p",
        text: "Animation on the web has two failure modes: too much, and too little. Too much animation creates a carnival — everything moves, nothing communicates. Too little animation creates a static experience that feels out of sync with users' expectations of what premium digital products should feel like in 2026.",
      },
      {
        type: "h2",
        text: "Define your motion values before you animate anything",
      },
      {
        type: "p",
        text: "Before writing a single keyframe, answer these questions: What emotion should the site convey? (Calm and confident? Energetic and bold?) What is the relationship between animation speed and brand tempo? Are transitions meant to be noticed or invisible? Answers to these questions define your motion values — the north star that every animation decision is measured against.",
      },
      {
        type: "p",
        text: "For premium brands, the answer is almost always: calm, confident, invisible transitions that reward attention without demanding it. This means slow easings (600-900ms), high-quality cubic-bezier curves, and animations that never interrupt the user's primary task.",
      },
      {
        type: "h2",
        text: "The three animation layers",
      },
      {
        type: "p",
        text: "Think of animation in three layers. Layer 1 is structural transitions — page loads, route changes, modal open/close. These are the animations users notice and judge most harshly. They should be fast (300-500ms), directional (elements enter from where they 'come from'), and consistent across the site.",
      },
      {
        type: "quote",
        text: "The best animation is the kind users feel but couldn't describe if asked.",
      },
      {
        type: "p",
        text: "Layer 2 is feedback animations — button presses, hover states, form validation, loading states. These are sub-150ms and serve a functional purpose: confirming that an action was registered. Layer 3 is ambient animation — the slow parallax, the background gradient shift, the counter incrementing as you scroll. These add life to static pages without demanding attention.",
      },
      {
        type: "h2",
        text: "The spring physics rule",
      },
      {
        type: "p",
        text: "For UI elements that users directly interact with — buttons, draggable items, toggles — always use spring physics rather than eased animations. Springs feel physical because they mirror how real objects respond to force. A button that springs slightly when pressed feels responsive in a way that a CSS transition never quite matches.",
      },
      {
        type: "p",
        text: "Libraries like Framer Motion make spring animations trivial to implement. The key parameters to dial in are stiffness (higher = snappier), damping (lower = more bounce), and mass (higher = heavier feel). For UI feedback, high stiffness (300+) and high damping (25+) gives you a fast, crisp response without bounce.",
      },
      {
        type: "h2",
        text: "Performance budgets for animation",
      },
      {
        type: "p",
        text: "The most important rule: only animate transform and opacity. Any animation that triggers layout reflow (width, height, padding, margin, top, left) or paint (background-color, border, box-shadow on regular elements) will create jank on lower-end devices. Transform and opacity are composited on the GPU and can run at 60fps even on mobile.",
      },
      {
        type: "p",
        text: "Always test your animations with Chrome DevTools' 'Rendering' panel enabled, checking for Paint flashing and Layout Shift. And always implement prefers-reduced-motion media query support — some users have vestibular disorders that make motion genuinely uncomfortable.",
      },
    ],
  },
];
