export interface SlideData {
  id: number;
  tag: string;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  layout: 
    | 'hero' 
    | 'creator' 
    | 'story-hackathon' 
    | 'story-cap' 
    | 'community' 
    | 'evolution-utilities' 
    | 'evolution-agentic' 
    | 'tools-ecosystem' 
    | 'agent-hub' 
    | 'domoskills' 
    | 'advanced-studio' 
    | 'significance' 
    | 'philosophy' 
    | 'closing-connect';
  quote?: string;
  bullets?: Array<{ label?: string; text: string }>;
  stats?: Array<{ value: string; label: string }>;
  image?: {
    src: string;
    alt: string;
    caption?: string;
    badge?: string;
  };
  secondaryImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  products?: Array<{
    name: string;
    logo: string;
    desc?: string;
  }>;
  notes: string[];
}

export const slides: SlideData[] = [
  // 01 — TITLE
  {
    id: 1,
    tag: '01 / 15',
    eyebrow: 'AppBuildersPH · Keynote Presentation',
    headline: 'DomoDomo',
    subheadline: 'From Student Struggles to Hackathon Glory, and the Evolution from Simple Web Utilities to 240+ Local-First Agentic AI Tools.',
    layout: 'hero',
    bullets: [
      { label: 'Philosophy', text: '100% Client-Side, Zero-Leak Privacy & Local-First Execution' },
      { label: 'Impact', text: 'Empowering students, developers, and builders with zero barriers' },
      { label: 'Agentic Future', text: 'Local Ollama runtimes, MCP servers, and DomoSkills ecosystem' },
    ],
    image: {
      src: '/assets/logos/domodomo_logo (1).jpg',
      alt: 'DomoDomo Official Logo',
      caption: 'DomoDomo: The Open-Source Local-First Toolbox',
      badge: 'Local-First Sandbox'
    },
    notes: [
      'Welcome everyone to today’s presentation for AppBuildersPH.',
      'Introduce the theme: how a genuine student pain point evolved into an open-source movement.',
      'Highlight the key differentiator: 100% client-side, zero cloud dependencies, private by default.'
    ]
  },

  // 02 — THE CREATOR
  {
    id: 2,
    tag: '02 / 15',
    eyebrow: 'Speaker Introduction',
    headline: 'Arron Parejas',
    subheadline: 'Machine Learning Engineer, Community Builder, and Founder of DomoDomo.',
    layout: 'creator',
    bullets: [
      { label: 'Role', text: 'Machine Learning Engineer & Open-Source Maintainer' },
      { label: 'Leadership', text: 'Former GDGoC – Holy Angel University Chapter Lead' },
      { label: 'Competition', text: 'Hackathon Champion (Caffeine.ai Championship Winner)' },
      { label: 'Philosophy', text: '"Technology is more than code—it is about creating opportunities and helping communities grow together."' },
      { label: 'Our Ecosystem', text: 'We offer you an interconnected ecosystem: DomoDomo, Buddy, DomoSkills, AgentDeck, and HireMe.' }
    ],
    products: [
      { name: 'DomoDomo', logo: '/assets/logos/product/domodomo_logo.jpg', desc: '100% Client-Side AI & Toolbox' },
      { name: 'Buddy', logo: '/assets/logos/product/buddy.webp', desc: 'AI Companion & Assistant' },
      { name: 'DomoSkills', logo: '/assets/logos/product/domoskills.png', desc: 'Agentic Skills Marketplace' },
      { name: 'AgentDeck', logo: '/assets/logos/product/agentdeck.webp', desc: 'Autonomous Agent Platform' },
      { name: 'HireMe', logo: '/assets/logos/product/hireme.webp', desc: 'Developer Career Engine' }
    ],
    image: {
      src: '/assets/photos/profile.png',
      alt: 'Arron Parejas',
      caption: 'Arron Parejas — Founder & Machine Learning Engineer'
    },
    notes: [
      'Share personal background as a student engineer and community organizer.',
      'Reflect on the transition from building solo hobby projects to leading developer communities.',
      'Set the stage for why community and open access drive every line of code written.'
    ]
  },

  // 03 — THE STUDENT STRUGGLE
  {
    id: 3,
    tag: '03 / 15',
    eyebrow: 'Genesis & Origin',
    headline: 'The Student Struggle',
    subheadline: 'Before DomoDomo became a platform, it started as a simple frustration born from late-night student life.',
    layout: 'philosophy',
    quote: '"We kept asking ourselves: What if everything people need could exist in one place?"',
    bullets: [
      { label: 'Tab Overload', text: 'Constantly switching between 10–15 websites just to finish a single task.' },
      { label: 'Fragmented Web', text: 'One site for AI, another for coding, one for PDFs, OCR, writing, and image generation.' },
      { label: 'Paywalls & Subscriptions', text: 'Hit with $20/month paywalls, 3-action daily limits, and predatory cloud subscriptions.' },
      { label: 'Privacy Concerns', text: 'Uploading private homework, thesis drafts, code, and documents to random servers.' }
    ],
    stats: [
      { value: '15+', label: 'Tabs open per task' },
      { value: '$0', label: 'Student budget' },
      { value: '100%', label: 'Desire for simplicity' }
    ],
    notes: [
      'Relate directly to the audience: who here has had 30 tabs open just to complete an assignment?',
      'Emphasize the pain of hidden paywalls when students are on a tight budget.',
      'Explain that DomoDomo was born from empathy and real lived experience.'
    ]
  },

  // 04 — THE REUNION & CAFFEINE.AI HACKATHON
  {
    id: 4,
    tag: '04 / 15',
    eyebrow: 'The Turning Point',
    headline: 'The Reunion & The Win',
    subheadline: 'Reunited after almost five years post-pandemic to build with sleepless nights, pure grit, and no expectations.',
    layout: 'story-hackathon',
    quote: '"That very first reunion also became our very first hackathon championship. It reminded us that the best opportunities arrive when you least expect them."',
    bullets: [
      { label: '5-Year Gap', text: 'Reunited with teammate Ram at the Caffeine.ai Hackathon for the first time since the pandemic.' },
      { label: 'All-In Dedication', text: 'Poured wild ideas, caffeine, and endless determination into our prototype.' },
      { label: 'Unforeseen Victory', text: 'Without expecting anything, we walked away as Hackathon Champions.' },
      { label: 'The Spark', text: 'Proved that our vision for unified, local tools resonated with judges and developers alike.' }
    ],
    image: {
      src: '/assets/photos/hackathon.png',
      alt: 'Caffeine.ai Hackathon Championship Moment',
      caption: 'Caffeine.ai Hackathon Champions — Reunited after 5 years',
      badge: 'Hackathon Champion'
    },
    notes: [
      'Speak from the heart about reuniting with Ram.',
      'Describe the atmosphere of the Caffeine.ai hackathon—the pressure, the excitement, and the fun.',
      'Highlight how validation in competition sparked the drive to make DomoDomo a global open platform.'
    ]
  },

  // 05 — THE STORY OF THE SIGNATURE CAP
  {
    id: 5,
    tag: '05 / 15',
    eyebrow: 'Symbolism & Culture',
    headline: 'The Story of the Cap',
    subheadline: 'Many think it is just a mascot accessory. In reality, it is a living tribute to where our journey began.',
    layout: 'story-cap',
    quote: '"When we designed DomoDomo, we gave it a cap as a tribute to that unforgettable experience—a reminder to always stay curious, keep building, and never forget our roots."',
    bullets: [
      { label: 'The Freebie Cap', text: 'During our first hackathon, participants received simple event caps as freebies.' },
      { label: 'The Uniform', text: 'We wore those caps through every sleepless hour, debugging session, and the final pitch.' },
      { label: 'The Mascot Tribute', text: 'When creating DomoDomo the panda, the cap was crowned as its permanent icon.' },
      { label: 'The Message', text: 'Stay humble, remain insatiably curious, build without fear, and remember where you started.' }
    ],
    image: {
      src: '/assets/logos/domodomo_logo.png',
      alt: 'DomoDomo official logo with signature cap',
      caption: 'The signature cap: A symbol of curiosity and humility'
    },
    notes: [
      'Share the story of the free hackathon cap.',
      'Audiences love grounding mascot designs in real human stories.',
      'Connect the cap to the mindset: never let success make you forget your early struggles.'
    ]
  },

  // 06 — COMMUNITY AS THE CATALYST
  {
    id: 6,
    tag: '06 / 15',
    eyebrow: 'Mentorship & Leadership',
    headline: 'Community as Catalyst',
    subheadline: 'Leading Google Developer Groups on Campus taught me that technology is not just about syntax—it is about people.',
    layout: 'community',
    quote: '"Being surrounded by passionate student developers taught me that technology is about creating opportunities, helping others learn, and building spaces where everyone can grow."',
    bullets: [
      { label: 'GDGoC Chapter Lead', text: 'Led student developers, mentors, and builders at Holy Angel University.' },
      { label: 'Mentorship Flywheel', text: 'Mentored junior developers while learning from senior architects.' },
      { label: 'Democratizing Knowledge', text: 'Workshops, hackathons, and open sessions shaped the open vision of DomoDomo.' },
      { label: 'Shared Success', text: 'Seeing peers ship their first software solidified the mission to give back freely.' }
    ],
    image: {
      src: '/assets/photos/achievement.png',
      alt: 'GDGoC Community & Recognition',
      caption: 'Community Leadership & Industry Recognition',
      badge: 'GDGoC Community Lead'
    },
    notes: [
      'Reflect on GDGoC-HAU experiences.',
      'Explain how community leadership shaped DomoDomo: if a student in our club had no money for tools, what could we build for them?',
      'Emphasize that DomoDomo is a tribute to student communities everywhere.'
    ]
  },

  // 07 — EVOLUTION PHASE 1: WEB UTILITIES
  {
    id: 7,
    tag: '07 / 15',
    eyebrow: 'Architecture Evolution · Phase 1',
    headline: 'From Web Utilities to Client Sandbox',
    subheadline: 'How we eliminated the server entirely using modern browser WebAssembly and native APIs.',
    layout: 'evolution-utilities',
    bullets: [
      { label: 'Zero-Server Architecture', text: 'Every PDF merge, video crop, format conversion, and OCR happens inside the browser memory.' },
      { label: 'High-Performance WASM', text: 'Powered by FFmpeg.wasm, pdf-lib, Tesseract.js, and Web Audio API.' },
      { label: 'Zero Data Leaks', text: 'No uploads, no cloud databases, zero telemetry. Files never leave the user’s device.' },
      { label: 'Instant Sandbox', text: 'No login walls, no cookies, no API rate limits. Instant utilities on first page load.' }
    ],
    stats: [
      { value: '0 bytes', label: 'Cloud data sent' },
      { value: '<50ms', label: 'Local execution' },
      { value: '100%', label: 'Offline capability' }
    ],
    notes: [
      'Explain the engineering behind Phase 1.',
      'Explain how WebAssembly changed the game for browser applications.',
      'Emphasize why privacy matters: students and companies cannot risk uploading confidential PDFs.'
    ]
  },

  // 08 — EVOLUTION PHASE 2: LOCAL AGENTIC AI
  {
    id: 8,
    tag: '08 / 15',
    eyebrow: 'Architecture Evolution · Phase 2',
    headline: 'The Leap to Local Agentic AI',
    subheadline: 'Bridging client-side utilities with local Ollama runtimes and browser-embedded neural networks.',
    layout: 'evolution-agentic',
    bullets: [
      { label: 'Direct Ollama Runtimes', text: 'Connects directly to local Ollama on localhost:11434 with CORS-free streaming SSE.' },
      { label: 'Browser Transformers', text: 'Runs @xenova/transformers (all-MiniLM-L6-v2, DistilBERT) purely in WebAssembly.' },
      { label: 'Dynamic Spec Detection', text: 'Inspects CPU cores & RAM to suggest optimal local models (e.g. Llama 3.2 1B, Qwen 2.5).' },
      { label: 'No $20/mo Subscriptions', text: 'Bringing state-of-the-art LLMs, coding assistants, and OCR to any laptop without cloud cost.' }
    ],
    image: {
      src: '/assets/screenshots/ai_hub.png',
      alt: 'DomoDomo AI Hub Interface',
      caption: 'Local AI Hub with direct Ollama streaming & prompt tuning',
      badge: 'Local AI Suite'
    },
    notes: [
      'Trace the transition from simple converters to intelligent AI systems.',
      'Show how DomoDomo connects directly to Ollama without requiring an expensive GPU cluster.',
      'Demonstrate how Transformers.js enables browser-side embeddings without any server.'
    ]
  },

  // 09 — THE 240+ TOOLS ECOSYSTEM
  {
    id: 9,
    tag: '09 / 15',
    eyebrow: 'Product Breakdown',
    headline: '240+ Offline Browser Utilities',
    subheadline: 'Seventeen categorized tool suites engineered for students, engineers, creators, and researchers.',
    layout: 'tools-ecosystem',
    bullets: [
      { label: 'PDF Suite', text: 'Merge, split, compress, watermark, sign, encrypt, and edit PDF documents locally.' },
      { label: 'Photo & Media Suite', text: 'AI background remover, CR2 raw converter, upscaler, and collage studio.' },
      { label: 'Security & Forensics', text: 'File hash checker, password analyzer, metadata stripper, deepfake detection.' },
      { label: 'Developer Suite', text: 'JWT signer, regex tester, Docker Compose builder, JSON parser, subnet calculator.' },
      { label: 'Spatial 3D & Audio', text: '3D model inspector, mesh decimator, point cloud visualizer, spatial audio renderer.' }
    ],
    image: {
      src: '/assets/screenshots/categories.png',
      alt: 'DomoDomo 240+ Categories & Tools Grid',
      caption: 'Comprehensive 17-suite directory running 100% client-side',
      badge: '240+ Utilities'
    },
    notes: [
      'Take the audience through the vast scale of the platform.',
      'Highlight unexpected suites like Spatial 3D and Machine Learning Evaluators.',
      'Reiterate that all 240+ utilities are free, offline, and require no account registration.'
    ]
  },

  // 10 — DEEP DIVE: DOMO AGENT HUB
  {
    id: 10,
    tag: '10 / 15',
    eyebrow: 'Technical Core',
    headline: 'The Domo Agent Hub',
    subheadline: 'Autonomous multi-agent orchestration, MCP integration, and reflective cognitive journaling.',
    layout: 'agent-hub',
    bullets: [
      { label: 'Multi-Agent Personas', text: 'Chain specialized roles: Domo Architect, Hacker, and Auditor executing in sequence or parallel.' },
      { label: 'Local MCP Server', text: 'Model Context Protocol (SSE) granting local LLMs secure filesystem and tool execution capabilities.' },
      { label: 'Cognitive Journaling', text: 'Agents write introspective logs to domo_journal.md detailing reasoning steps and lessons.' },
      { label: 'Browser Memory & RAG', text: 'IndexedDB + SQLite WAL handles semantic vector tables and timeline context natively.' }
    ],
    image: {
      src: '/assets/screenshots/flow_studio.png',
      alt: 'DomoDomo Agent Flow Studio',
      caption: 'Visual Multi-Agent Flow Studio & Persona Pipelines',
      badge: 'Autonomous Agents'
    },
    notes: [
      'Deep dive into the Agentic architecture.',
      'Explain Model Context Protocol (MCP) and why local agents need safe filesystem tools.',
      'Mention the cognitive journaling feature: agents that reflect on their own debugging.'
    ]
  },

  // 11 — DOMOSKILLS: THE AGENT MARKETPLACE
  {
    id: 11,
    tag: '11 / 15',
    eyebrow: 'The Next Frontier',
    headline: 'Introducing DomoSkills',
    subheadline: 'Turning web utilities into callable superpowers for modern AI coding agents.',
    layout: 'domoskills',
    bullets: [
      { label: 'Agentic Ecosystem', text: 'Over 200+ specialized skills tailored for Google Antigravity, Claude Code, Cursor, and Codex.' },
      { label: 'One-Line Installation', text: 'Install verified skills instantly via npx / agy CLI with zero friction.' },
      { label: 'Bridge to Reality', text: 'Allows autonomous agents to manipulate PDFs, test security headers, and parse media on the fly.' },
      { label: 'Open Registry', text: 'Community-driven registry where developers can contribute and publish custom skills.' }
    ],
    stats: [
      { value: '200+', label: 'Agent Skills' },
      { value: '4+', label: 'Supported Agents' },
      { value: '1 CLI', label: 'Zero setup command' }
    ],
    notes: [
      'Introduce DomoSkills—the latest evolution in the DomoDomo ecosystem.',
      'Explain how agent coding tools (like Antigravity and Claude Code) need reliable tools.',
      'DomoSkills bridges the gap between browser utilities and CLI-native agent actions.'
    ]
  },

  // 12 — ADVANCED AI STUDIO
  {
    id: 12,
    tag: '12 / 15',
    eyebrow: 'Advanced Capabilities',
    headline: 'Flow Automation, Fine-Tuning & Local RAG',
    subheadline: 'Professional-grade machine learning workflows executing locally on developer hardware.',
    layout: 'advanced-studio',
    bullets: [
      { label: 'Node-Based Flow Studio', text: 'Visually connect data inputs, prompt generators, formatters, and evaluators.' },
      { label: '6 Fine-Tuning Strategies', text: 'LoRA, QLoRA, Full Fine-Tuning, and DPO with dynamic VRAM calculations.' },
      { label: 'Client-Side Vector RAG', text: 'Semantic document search with in-memory embeddings and chunk re-ranking.' },
      { label: 'Model Benchmarking', text: 'Latency profiling, token-per-second measuring, and confusion matrix evaluators.' }
    ],
    image: {
      src: '/assets/screenshots/finetune.png',
      alt: 'Local Fine-Tuning Studio',
      caption: 'Local Fine-Tuning & Quantization Planning Studio',
      badge: 'ML Studio'
    },
    secondaryImage: {
      src: '/assets/screenshots/rag_studio.png',
      alt: 'Local RAG Vector Search Studio',
      caption: 'Local RAG Search & Chunk Visualizer'
    },
    notes: [
      'Showcase the visual polish of the Fine-Tuning and RAG studios.',
      'Emphasize that advanced AI tools should not require a team of ML PhDs or a cloud enterprise contract.',
      'Highlight visual node-based flow automation.'
    ]
  },

  // 13 — SIGNIFICANCE TO STUDENTS & DEVELOPERS
  {
    id: 13,
    tag: '13 / 15',
    eyebrow: 'Empowerment & Access',
    headline: 'Why DomoDomo Matters',
    subheadline: 'Breaking down barriers to technology for the next generation of builders.',
    layout: 'significance',
    bullets: [
      { label: 'For Students', text: 'Free forever, zero subscription paywalls, no credit card required. A complete toolbox for assignments, study decks, and research.' },
      { label: 'For Developers', text: 'Private sandbox for code conversion, JWT testing, regex prototyping, and local Ollama experimentation.' },
      { label: 'For Privacy Advocates', text: 'Air-gapped safe. Ideal for sensitive medical, legal, and academic documents that cannot touch cloud servers.' },
      { label: 'For Educators', text: 'Clean, safe, reproducible tools for classrooms without software installation hurdles.' }
    ],
    stats: [
      { value: '100%', label: 'Free & Open Source' },
      { value: '0', label: 'Telemetry Trackers' },
      { value: '∞', label: 'Possibilities' }
    ],
    notes: [
      'Remind the room why open source matters.',
      'Talk about accessibility: students in developing countries or underfunded schools deserve top-tier AI tools.',
      'DomoDomo is an equalizer.'
    ]
  },

  // 14 — CORE PHILOSOPHY & LESSONS
  {
    id: 14,
    tag: '14 / 15',
    eyebrow: 'Lessons from the Journey',
    headline: 'Ship Beats Perfection',
    subheadline: 'What building DomoDomo taught us about engineering, growth, and perseverance.',
    layout: 'philosophy',
    quote: '"The student who ships ten imperfect projects will always outpace the one still perfecting their first."',
    bullets: [
      { label: 'Build What You Need', text: 'The best products solve problems you personally feel every single day.' },
      { label: 'Momentum Compounds', text: 'Consistency turns minor weekend experiments into platforms used by thousands.' },
      { label: 'Community Over Code', text: 'Code gets replaced; the friendships, mentorships, and trust you build endure forever.' },
      { label: 'Fail Forward', text: 'Every broken build and rejected pitch is just training data for your next breakthrough.' }
    ],
    notes: [
      'Deliver the key inspirational takeaway.',
      'Encourage every student in the audience to start shipping their ideas immediately.',
      'Remind them that DomoDomo was once just a crazy question between friends.'
    ]
  },

  // 15 — THE FUTURE & CONNECT
  {
    id: 15,
    tag: '15 / 15',
    eyebrow: 'Looking Forward · 2026',
    headline: 'Keep Building.',
    subheadline: 'DomoDomo isn’t just an app—it’s an open invitation to create without limits.',
    layout: 'closing-connect',
    quote: '"Your first project doesn’t have to change the world. It only has to change you."',
    bullets: [
      { label: 'Website', text: 'domodomo.site' },
      { label: 'GitHub', text: 'github.com/darknecrocities' },
      { label: 'LinkedIn', text: 'linkedin.com/in/arron-parejas' },
      { label: 'Portfolio', text: 'arronparejas.dev' }
    ],
    image: {
      src: '/assets/photos/qrcode.png',
      alt: 'QR Code to Connect',
      caption: 'Scan to connect with Arron Parejas'
    },
    notes: [
      'Thank the organizers and audience warmly.',
      'Point to the QR code and invite everyone to connect, contribute, and build together.',
      'End on an inspiring note: "Now go build something people need."'
    ]
  }
];
