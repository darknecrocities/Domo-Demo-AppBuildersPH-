export interface SlideData {
  id: number;
  tag: string;
  eyebrow: string;
  headline: string;
  subheadline?: string;
  layout: 
    | 'hero' 
    | 'creator' 
    | 'app-showcase'
    | 'buddy-showcase'
    | 'end-credits'
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
  tags?: string[];
  phonePair?: Array<{
    src: string;
    alt: string;
    caption?: string;
    badge?: string;
  }>;
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
  // 01 — TITLE & HERO: DOMODOMO x BUDDY
  {
    id: 1,
    tag: '01 / 14',
    eyebrow: 'AppBuildersPH 2026',
    headline: 'DomoDomo × Buddy',
    subheadline: 'From Student Frustrations to Open-Source Agentic AI & Assistive Vision',
    layout: 'hero',
    image: {
      src: '/assets/logos/domodomo_logo.png',
      alt: 'DomoDomo Official Logo',
      caption: 'DomoDomo: The Open-Source Local-First Platform',
    },
    secondaryImage: {
      src: '/assets/logos/product/buddy.webp',
      alt: 'Buddy Official Mascot App Icon',
      caption: 'Buddy: Seeing Assistant & Edge Vision Glasses',
    },
    notes: [
      'Welcome everyone to today’s presentation for AppBuildersPH.',
      'Introduce the dual story: DomoDomo (local-first browser tools & agentic AI) and Buddy (AI guide dog & smart glasses).',
      'Highlight our core mission: student builders turning daily challenges into free, private, impactful technology.'
    ]
  },

  // 02 — THE CREATOR
  {
    id: 2,
    tag: '02 / 14',
    eyebrow: 'Speaker Introduction',
    headline: 'Arron Parejas',
    subheadline: 'Machine Learning Engineer Intern & Founder of DomoDomo',
    layout: 'creator',
    bullets: [
      { label: 'Role', text: 'Machine Learning Engineer Intern & Open-Source Maintainer' },
      { label: 'Leadership', text: 'Former GDGoC – Holy Angel University Chapter Lead' },
      { label: 'Competition', text: 'Caffeine.ai Hackathon Champion' },
      { label: 'Philosophy', text: '"Technology is about creating opportunities and helping communities grow together."' },
      { label: 'Shipped', text: 'DomoDomo, Buddy, DomoSKills, Codepyne.io, AgentDeck, HireMe' }
    ],
    image: {
      src: '/assets/photos/profile.png',
      alt: 'Arron Parejas',
      caption: 'Arron Parejas — Founder & ML Engineer Intern'
    },
    notes: [
      'Share student background and community leadership with GDGoC-HAU.',
      'Walk through the stacked suite of 5+ deployed products.',
      'Emphasize how community empathy drives every open-source project.'
    ]
  },

  // 03 — THE STUDENT STRUGGLE (GENESIS)
  {
    id: 3,
    tag: '03 / 14',
    eyebrow: 'Genesis & Problem',
    headline: 'The Student Struggle',
    subheadline: 'Before DomoDomo and Buddy existed, it all started as a late-night frustration.',
    layout: 'philosophy',
    quote: '"What if everything a builder needs could exist in one unified, private space?"',
    bullets: [
      { label: 'Tab Overload', text: '15+ single-purpose websites open just to complete one assignment.' },
      { label: 'Paywall Fatigue', text: '$20/month subscriptions and 3-action daily limits on basic tools.' },
      { label: 'Zero Privacy', text: 'Forced to upload homework, thesis drafts, and code to unknown cloud servers.' }
    ],
    stats: [
      { value: '15+', label: 'Tabs open per task' },
      { value: '$2', label: 'Student budget' },
      { value: '100%', label: 'Desire for simplicity' }
    ],
    notes: [
      'Relate directly to the room: who hasn’t had 20 tabs open just to convert a PDF or test regex?',
      'Emphasize the financial and privacy burden on students and indie builders.',
      'Set up DomoDomo as the local-first antidote.'
    ]
  },

  // 04 — THE REUNION & THE WIN
  {
    id: 4,
    tag: '04 / 14',
    eyebrow: 'The Turning Point',
    headline: 'The Reunion & The Win',
    subheadline: 'Reunited after 5 years at Caffeine.ai Hackathon with pure grit and no expectations.',
    layout: 'story-hackathon',
    quote: '"That very first reunion became our championship—and gave DomoDomo its signature cap."',
    bullets: [
      { label: '5-Year Reunion', text: 'Teamed up with Ram Guinto post-pandemic to build with sleepless determination.' },
      { label: 'Hackathon Champions', text: 'Walked away with 1st place, proving the power of unified local tooling.' },
      { label: 'The Signature Cap', text: 'The freebie event cap we wore during the pitch became Domo’s permanent mascot crown.' }
    ],
    image: {
      src: '/assets/photos/hackathon.png',
      alt: 'Caffeine.ai Hackathon Championship Moment',
      caption: 'Caffeine.ai Hackathon Champions — Reunited after 5 years',
      badge: 'Hackathon Champion'
    },
    notes: [
      'Share the emotional story of reuniting with Ram after five years.',
      'Explain the mascot’s signature cap: a reminder to stay humble and remember where we started.',
      'Validation in competition sparked the mission to build an open platform for the world.'
    ]
  },

  // 05 — ARCHITECTURE: ZERO-SERVER SANDBOX
  {
    id: 5,
    tag: '05 / 14',
    eyebrow: 'Architecture · Phase 1',
    headline: '100% Client-Side Sandbox',
    subheadline: 'Eliminating the server completely with modern WebAssembly and browser APIs.',
    layout: 'evolution-utilities',
    bullets: [
      { label: 'Zero Cloud Uploads', text: 'Every conversion, merge, and edit executes in browser RAM. Zero telemetry.' },
      { label: 'WASM Performance', text: 'Powered by FFmpeg.wasm, pdf-lib, Tesseract.js, and Web Audio APIs.' },
      { label: 'Instant & Offline', text: 'No logins, no cookies, no rate limits. Fully operational without internet.' }
    ],
    stats: [
      { value: '0 bytes', label: 'Data sent to servers' },
      { value: '<50ms', label: 'Local execution' },
      { value: '100%', label: 'Offline capability' }
    ],
    notes: [
      'Explain the architectural revolution: why move processing from cloud servers to the user’s device?',
      'Detail WebAssembly: compiling C/C++ libraries like FFmpeg and Tesseract directly into the browser.',
      'Highlight total privacy: confidential student and corporate documents never touch the wire.'
    ]
  },

  // 06 — FEATURE 1: 240+ WEB TOOLS ECOSYSTEM
  {
    id: 6,
    tag: '06 / 14',
    eyebrow: 'Domo Feature 01 · Utility Ecosystem',
    headline: '240+ Offline Browser Utilities',
    subheadline: 'Seventeen categorized tool suites engineered for students, engineers, and creators.',
    layout: 'tools-ecosystem',
    bullets: [
      { label: 'PDF & Documents', text: 'Merge, split, compress, watermark, sign, encrypt, and redact.' },
      { label: 'Media & Spatial', text: 'AI background remover, CR2 raw converter, upscaler, 3D model viewer.' },
      { label: 'Developer Suite', text: 'JWT debugger, regex playground, Docker Compose builder, JSON parser.' },
      { label: 'Security & Forensics', text: 'File hash checker, password analyzer, metadata stripper, deepfake detection.' }
    ],
    image: {
      src: '/assets/screenshots/categories.png',
      alt: 'DomoDomo 240+ Categories & Tools Grid',
      caption: '17-suite directory running 100% client-side',
      badge: '240+ Utilities'
    },
    notes: [
      'Showcase the enormous breadth of the platform across 17 distinct suites.',
      'Emphasize that every tool is completely free with zero accounts or daily quotas.',
      'Show how this eliminates the need for 15+ disparate commercial subscription tools.'
    ]
  },

  // 07 — FEATURE 2: LOCAL AI HUB
  {
    id: 7,
    tag: '07 / 14',
    eyebrow: 'Domo Feature 02 · Local AI Intelligence',
    headline: 'The Domo AI Hub',
    subheadline: 'Private, offline LLMs and embeddings running directly on your laptop.',
    layout: 'evolution-agentic',
    bullets: [
      { label: 'Direct Ollama Runtimes', text: 'Connects directly to localhost:11434 via streaming SSE with zero cloud GPU fees.' },
      { label: 'Browser Transformers', text: 'Runs WASM embeddings (@xenova/transformers) purely on the client with zero telemetry.' },
      { label: 'Dynamic Spec Detection', text: 'Inspects CPU cores & RAM to suggest optimal local models (Llama 3.2 1B, Qwen 2.5).' }
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

  // 08 — FEATURE 3: DOMOSKILLS (SKILLS MARKETPLACE)
  {
    id: 8,
    tag: '08 / 14',
    eyebrow: 'Domo Feature 03 · SKills Marketplace',
    headline: 'Introducing DomoSKills',
    subheadline: 'The decentralized skills marketplace and superpower engine turning web utilities into callable actions for AI coding agents.',
    layout: 'domoskills',
    bullets: [
      { label: 'SKills Marketplace', text: 'Over 1k+ specialized skills tailored for Google Antigravity, Claude Code, Cursor, and Codex.' },
      { label: 'One-Line Installation', text: 'Install verified skills instantly via npx / agy CLI with zero friction.' },
      { label: 'Bridge to Reality', text: 'Allows autonomous agents to manipulate PDFs, test security headers, and parse media on the fly.' }
    ],
    stats: [
      { value: '1k+', label: 'Agent Skills' },
      { value: '5+', label: 'Supported Agents' },
      { value: '1 CLI', label: 'Zero setup command' }
    ],
    notes: [
      'Introduce DomoSkills—the latest evolution in the DomoDomo ecosystem.',
      'Explain how agent coding tools (like Antigravity and Claude Code) need reliable tools.',
      'DomoSkills bridges the gap between browser utilities and CLI-native agent actions.'
    ]
  },

  // 09 — FEATURE 4: FLOW STUDIO & ADVANCED ML
  {
    id: 9,
    tag: '09 / 14',
    eyebrow: 'Domo Feature 04 · Visual Workflows',
    headline: 'Flow Studio & Local RAG',
    subheadline: 'Visual multi-agent orchestration, client-side vector search, and fine-tuning planning.',
    layout: 'advanced-studio',
    bullets: [
      { label: 'Visual Flow Pipelines', text: 'Node-based canvas chaining data inputs, prompt generators, formatters, and evaluators.' },
      { label: 'Client-Side Vector RAG', text: 'Semantic document search with in-memory chunking, cosine similarity, and re-ranking.' },
      { label: 'Prompt Tuning Lab', text: 'Benchmark prompts locally across quantization levels with real-time latency and token metrics.' },
      { label: 'Fine-Tuning Planner', text: 'Calculate VRAM requirements for LoRA, QLoRA, and DPO before executing.' }
    ],
    image: {
      src: '/assets/screenshots/flow_studio.png',
      alt: 'Local Flow Studio',
      caption: 'Visual Node-Based Agent Pipeline Studio',
      badge: 'Flow Studio'
    },
    secondaryImage: {
      src: '/assets/screenshots/rag_studio.png',
      alt: 'Local RAG Vector Search Studio',
      caption: 'Local RAG Search & Chunk Visualizer'
    },
    notes: [
      'Showcase the visual polish of the Flow Studio and Local RAG search.',
      'Emphasize that advanced AI workflows should not require cloud enterprise subscriptions.',
      'Demonstrate visual node-based multi-agent coordination.'
    ]
  },

  // 10 — BUDDY: AN AI GUIDE DOG IN YOUR POCKET
  {
    id: 10,
    tag: '10 / 14',
    eyebrow: 'Thesis Spotlight · Assistive Tech',
    headline: 'Buddy: An AI Guide Dog in Your Pocket',
    subheadline: 'A friendly seeing assistant mobile app designed for visually impaired and neurodivergent users.',
    layout: 'buddy-showcase',
    bullets: [
      { label: 'Sees The World Live', text: 'Uses your phone camera to spot chairs, doors, and obstacles so you can walk with total confidence.' },
      { label: 'Speaks Like a Friend', text: 'Conversational guide in English and native Tagalog that gives turn-by-turn directions and reads nearby text.' },
      { label: '100% Private On-Device', text: 'Runs Gemma 2B AI completely offline inside your phone—no internet or cloud servers needed.' }
    ],
    tags: [
      'Local Gemma 2B AI',
      'English & Filipino Voice',
      'Turn-by-Turn Voice Nav',
      'Nearby Text OCR',
      'Emergency SOS'
    ],
    phonePair: [
      {
        src: '/assets/logos/buddy/buddy_onboarding.jpeg',
        alt: 'Buddy Accessible Onboarding',
        caption: 'Friendly accessible onboarding',
        badge: 'Buddy Mascot'
      },
      {
        src: '/assets/logos/buddy/buddy_dashboard.jpeg',
        alt: 'Buddy Voice Dashboard',
        caption: 'Voice dashboard & navigation controls',
        badge: 'Voice Dashboard'
      }
    ],
    notes: [
      'Introduce Buddy (EasyLens)—our undergraduate thesis at Holy Angel University.',
      'Explain the ELI5 mission: What if anyone who has trouble seeing could carry a digital guide dog on their phone?',
      'Highlight on-device Gemma 2B and native Filipino language support.'
    ]
  },

  // 11 — BUDDY: SMART GLASSES & EDGE VISION
  {
    id: 11,
    tag: '11 / 14',
    eyebrow: 'Wearable Edge AI · ESP32 Hardware',
    headline: 'Smart Glasses That See For You',
    subheadline: 'Pairing 3D-printed wearable camera glasses with real-time obstacle detection.',
    layout: 'buddy-showcase',
    bullets: [
      { label: 'Hands-Free ESP32 Glasses', text: 'A mini wireless camera mounted on 3D-printed frames streams what you face directly to your phone.' },
      { label: 'Instant Hazard Alerts', text: 'Spots objects in milliseconds (laptops, stairs, doors) and warns you with gentle sounds & vibration.' },
      { label: 'Emergency Lifeline', text: 'Shake the phone or tap SOS to immediately dispatch your location via emergency SMS.' }
    ],
    tags: [
      'ESP32-CAM Smart Glasses',
      'Live Bounding Boxes',
      'Low-Latency Audio Cues',
      'Haptic Proximity',
      'Shake-to-Alert'
    ],
    phonePair: [
      {
        src: '/assets/logos/buddy/buddy_glasses.jpeg',
        alt: 'EasyLens 3D-Printed Smart Glasses',
        caption: '3D-printed wearable frame with ESP32-CAM module',
        badge: 'Smart Glasses Hardware'
      },
      {
        src: '/assets/logos/buddy/buddy_hud.jpeg',
        alt: 'Buddy Real-Time Detection HUD',
        caption: 'Live vision HUD with bounding box hazard scoring',
        badge: 'Live Detection HUD'
      }
    ],
    notes: [
      'Explain the hardware side: We built custom 3D-printed glasses with an ESP32-CAM to keep users hands-free.',
      'Explain the live HUD: The phone analyzes the camera stream in milliseconds and draws bounding boxes around hazards.',
      'Connect back to the theme: Students building end-to-end edge AI systems that solve real human challenges.'
    ]
  },

  // 12 — SIGNIFICANCE & IMPACT
  {
    id: 12,
    tag: '12 / 14',
    eyebrow: 'Empowerment & Access',
    headline: 'Why DomoDomo & Buddy Matter',
    subheadline: 'Breaking down technological and physical accessibility barriers for everyone.',
    layout: 'significance',
    bullets: [
      { label: 'For Students', text: 'Free forever. Zero paywalls or credit cards for school, research, and coding.' },
      { label: 'For Accessibility', text: 'Buddy provides an on-device digital seeing guide for visually impaired and neurodivergent users.' },
      { label: 'For Privacy Advocates', text: '100% offline & client-side. Zero cloud telemetry for sensitive files and live video streams.' }
    ],
    stats: [
      { value: '100%', label: 'Free & Open Source' },
      { value: '0', label: 'Telemetry Trackers' },
      { value: '∞', label: 'Possibilities' }
    ],
    notes: [
      'Speak passionately about accessibility and digital equity.',
      'Students in developing regions and underfunded institutions deserve access to premier tools.',
      'DomoDomo and Buddy are equalizers: private, open, and accessible to anyone.'
    ]
  },

  // 13 — SHIP BEATS PERFECTION
  {
    id: 13,
    tag: '13 / 14',
    eyebrow: 'Core Philosophy',
    headline: 'Ship Beats Perfection',
    subheadline: 'What building DomoDomo and Buddy taught us about engineering, growth, and community.',
    layout: 'philosophy',
    quote: '"The student who ships ten imperfect projects will always outpace the one still perfecting their first."',
    bullets: [
      { label: 'Build What You Need', text: 'The best products solve problems you personally face every day.' },
      { label: 'Momentum Compounds', text: 'Weekend experiments quietly compound into platforms used by thousands.' },
      { label: 'Community Over Code', text: 'Code gets rewritten; the trust, friendships, and mentorship you build endure.' }
    ],
    notes: [
      'Deliver the central inspirational takeaway for every student and developer in the room.',
      'Encourage everyone to stop waiting for perfection and start shipping.',
      'Remind them that DomoDomo was once just a crazy conversation between friends.'
    ]
  },

  // 14 — END CREDITS & THE BUILDERS
  {
    id: 14,
    tag: '14 / 14',
    eyebrow: 'End Credits · The Builders',
    headline: 'Credits & Connect',
    subheadline: 'Crafted with grit, caffeine, and open-source dedication by the Domo team.',
    layout: 'end-credits',
    notes: [
      'Thank Ram Guinto for exceptional front-end & design leadership.',
      'Thank the audience, organizers, and AppBuildersPH community.',
      'Invite everyone to scan the QR codes to connect on LinkedIn and explore their websites.'
    ]
  }
];
