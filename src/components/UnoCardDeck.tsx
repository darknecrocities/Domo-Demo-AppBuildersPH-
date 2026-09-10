import React, { useState } from 'react';
import { UnoProduct, UnoCardModal } from './UnoCardModal';
import { TiltCard } from './TiltCard';
import { Sparkles, Layers, Maximize2 } from 'lucide-react';

export const UNO_PRODUCTS: UnoProduct[] = [
  {
    id: 'domoskills',
    name: 'DomoSkills',
    tagline: 'Superpowers & CLI Protocol for AI Coding Agents',
    role: 'Agentic Tooling & CLI',
    logo: '/assets/logos/product/domoskills.png',
    colorScheme: 'yellow',
    cardCornerSymbol: '3',
    themeColor: '#EAB308',
    badgeText: 'Developer CLI',
    description: 'Converts client-side utilities and local scripts into instant, callable tool definitions for Antigravity, Claude Code, Cursor, and OpenCode via the Model Context Protocol.',
    highlights: [
      'Instant CLI via npx domoskills install',
      'Native integration with top AI coding assistants',
      'Unified schema for tools, rules, and workflows',
      'Local-first verification and automated testing'
    ],
    techStack: ['Node.js', 'TypeScript', 'MCP Protocol', 'CLI Runner'],
    stats: { label: 'Supported Agents', value: '5+' }
  },
  {
    id: 'buddy',
    name: 'Buddy',
    tagline: 'Visual Impaired Assistant',
    role: 'Visual Impaired Assistant',
    logo: '/assets/logos/product/buddy.webp',
    colorScheme: 'blue',
    cardCornerSymbol: '2',
    themeColor: '#0284C7',
    badgeText: 'Assistive Tech',
    description: 'An AI assistant designed for the visually impaired with real-time audio perception, scene understanding, and offline multimodal assistance.',
    highlights: [
      'Real-time audio perception and scene understanding',
      'High-contrast visual aid and screen comprehension',
      'Local-first multimodal intelligence with zero telemetry',
      'Zero cloud dependency or external subscriptions'
    ],
    techStack: ['Ollama SSE', 'Transformers.js', 'Audio Perception', 'Multimodal'],
    stats: { label: 'Assistance', value: 'Offline' }
  },
  {
    id: 'domodomo',
    name: 'DomoDomo',
    tagline: 'The Open-Source Local-First Ecosystem',
    role: 'Flagship Platform & Utilities',
    logo: '/assets/logos/product/domodomo_logo.jpg',
    colorScheme: 'red',
    cardCornerSymbol: '+240',
    themeColor: '#E11D48',
    badgeText: 'Flagship Platform',
    description: 'The core platform offering 240+ client-side tools across 17 categorized suites. Merges PDFs, processes video, edits photos, and tests code directly in browser memory.',
    highlights: [
      '240+ Offline Browser Utilities',
      '100% Client-Side WebAssembly execution',
      'Zero cloud data uploads & zero telemetry',
      'Seventeen comprehensive tool categories'
    ],
    techStack: ['WebAssembly', 'FFmpeg.wasm', 'pdf-lib', 'Tesseract.js'],
    stats: { label: 'Offline Tools', value: '240+' }
  },
  {
    id: 'agentdeck',
    name: 'AgentDeck',
    tagline: 'Remote Agent Orchestration & Playground',
    role: 'Remote Agent Orchestrator',
    logo: '/assets/logos/product/agentdeck.webp',
    colorScheme: 'green',
    cardCornerSymbol: '+2',
    themeColor: '#10B981',
    badgeText: 'Remote Agent Orchestrator',
    description: 'Visual multi-agent orchestration workbench where specialized personas (Architect, Hacker, Auditor) solve complex tasks with reflective cognitive journaling and MCP tools.',
    highlights: [
      'Multi-agent role specialization & sequencing',
      'Introspective domo_journal.md logs',
      'Native Model Context Protocol (SSE) integration',
      'IndexedDB + SQLite WAL RAG tables'
    ],
    techStack: ['Multi-Agent Flow', 'SQLite WASM', 'SSE Streaming', 'Tailwind/CSS'],
    stats: { label: 'Agent Roles', value: 'Multi' }
  },
  {
    id: 'hireme',
    name: 'HireMe',
    tagline: 'AI Career Platform & Interactive Showcase',
    role: 'Interactive Resume & Talent Engine',
    logo: '/assets/logos/product/hireme.webp',
    colorScheme: 'wild',
    cardCornerSymbol: 'WILD',
    themeColor: '#7C3AED',
    badgeText: 'Career Platform',
    description: 'Next-generation developer showcase engine replacing static PDF resumes with live code playgrounds, verified hackathon projects, and verifiable technical credentials.',
    highlights: [
      'Interactive project showcase & live demos',
      'Verifiable hackathon achievements',
      'Skill assessment and credential verification',
      'Fast modern responsive interface'
    ],
    techStack: ['React', 'TypeScript', 'Vite', 'Lucide Icons'],
    stats: { label: 'Verification', value: '100%' }
  }
];

// Fan geometry parameters matching the Uno card illustration
const FAN_ANGLES = [-18, -9, 0, 9, 18];
const FAN_Y_OFFSETS = [20, 7, 0, 7, 20];
const FAN_X_OFFSETS = [-140, -70, 0, 70, 140];

interface UnoCardDeckProps {
  onOpenLightbox: (src: string, caption?: string) => void;
}

export const UnoCardDeck: React.FC<UnoCardDeckProps> = ({ onOpenLightbox }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<UnoProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleCardClick = (product: UnoProduct) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="uno-deck-wrapper" aria-label="Domo App Ecosystem Uno Cards Showcase">
      {/* -------------------------------------------------------------
          TOP SECTION: FANNED UNO CARDS DECK
          ------------------------------------------------------------- */}
      <div className="uno-fanned-stage">
        <div className="uno-fanned-arc">
          {UNO_PRODUCTS.map((product, index) => {
            const isHovered = hoveredIndex === index;
            const baseRot = FAN_ANGLES[index];
            const baseY = FAN_Y_OFFSETS[index];
            const baseX = FAN_X_OFFSETS[index];

            // When hovered: card straightens, elevates upwards and scales
            const transformStyle = isHovered
              ? `translate3d(${baseX}px, ${baseY - 48}px, 60px) rotate(0deg) scale(1.12)`
              : `translate3d(${baseX}px, ${baseY}px, 0px) rotate(${baseRot}deg) scale(1)`;

            const zIndexVal = isHovered ? 50 : 10 + index;

            return (
              <div
                key={product.id}
                className="uno-fanned-item"
                style={{
                  transform: transformStyle,
                  zIndex: zIndexVal,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <TiltCard
                  maxTilt={16}
                  perspective={900}
                  scale={1.03}
                  className="uno-card-tilt-box"
                  onClick={() => handleCardClick(product)}
                >
                  <div
                    className={`uno-card uno-card-stage uno-card-${product.colorScheme} ${isHovered ? 'hovered' : ''}`}
                    tabIndex={0}
                    role="button"
                    aria-label={`Open ${product.name} Uno Card`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCardClick(product);
                      }
                    }}
                  >
                    {/* Top-Left Corner Badge */}
                    <div className="uno-corner-symbol top-left">
                      <span className="uno-symbol-val">{product.cardCornerSymbol}</span>
                    </div>

                    {/* Center Oval with Logo */}
                    <div className="uno-card-center-oval">
                      <div className="uno-card-oval-inner">
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="uno-card-logo-img"
                        />
                      </div>
                    </div>

                    {/* Card Title Banner */}
                    <div className="uno-card-brand-label">
                      <div className="uno-card-title">{product.name}</div>
                      <div className="uno-card-role-sub">{product.role}</div>
                    </div>

                    {/* Bottom-Right Corner Badge (Rotated 180deg) */}
                    <div className="uno-corner-symbol bottom-right">
                      <span className="uno-symbol-val">{product.cardCornerSymbol}</span>
                    </div>

                    {/* Expand Click Cue on Hover */}
                    {isHovered && (
                      <div className="uno-card-expand-cue">
                        <Maximize2 size={13} />
                        <span>Click to Expand</span>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

        {/* -------------------------------------------------------------
            BOTTOM SECTION: UNO TUCK BOX CONTAINER
            (Inspired by reference illustration: Red tuck box with cards)
            ------------------------------------------------------------- */}
        <div className="uno-tuck-box-stage">
          <TiltCard
            maxTilt={14}
            perspective={800}
            scale={1.02}
            className="uno-tuck-box-tilt"
          >
            <div className="uno-tuck-box">
              {/* Package Hanger Hole */}
              <div className="uno-box-hanger">
                <div className="uno-box-hole" />
              </div>

              {/* Box Front Cover */}
              <div className="uno-box-face">
                <div className="uno-box-brand">DOMODOMO</div>
                <div className="uno-box-title">ECOSYSTEM CARDS</div>
                <div className="uno-box-badge">5 SUITES &bull; 1 PLATFORM</div>

                {/* Peeking Mini Uno Cards inside box cutout */}
                <div className="uno-box-peeking-cards" aria-hidden="true">
                  <div className="uno-mini-card mini-yellow" />
                  <div className="uno-mini-card mini-blue" />
                  <div className="uno-mini-card mini-red" />
                  <div className="uno-mini-card mini-green" />
                  <div className="uno-mini-card mini-wild" />
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Interactive Instructions */}
          <div className="uno-deck-caption">
            <Sparkles size={13} style={{ color: '#E11D48' }} />
            <span>
              <strong>Uno Cards Deck:</strong> Hover for 3D tilt physics &bull; Click any card to expand full product specs
            </span>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
          BOTTOM INTERACTIVE PRODUCT CHIPS
          ------------------------------------------------------------- */}
      <div className="uno-product-chips-strip">
        {UNO_PRODUCTS.map((prod, i) => (
          <button
            key={prod.id}
            className={`uno-chip-btn ${hoveredIndex === i ? 'active' : ''}`}
            onClick={() => handleCardClick(prod)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              borderColor: hoveredIndex === i ? prod.themeColor : undefined,
              boxShadow: hoveredIndex === i ? `0 0 16px ${prod.themeColor}33` : undefined,
            }}
          >
            <img src={prod.logo} alt={prod.name} className="uno-chip-icon" />
            <div className="uno-chip-text">
              <span className="uno-chip-name">{prod.name}</span>
              <span className="uno-chip-badge" style={{ color: prod.themeColor }}>
                {prod.cardCornerSymbol}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded Uno Card Modal */}
      <UnoCardModal
        product={selectedProduct}
        allProducts={UNO_PRODUCTS}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onOpenLightbox={onOpenLightbox}
      />
    </div>
  );
};
