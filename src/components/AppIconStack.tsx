import React, { useState } from 'react';
import { TiltCard } from './TiltCard';
import { Sparkles, Maximize2 } from 'lucide-react';

export interface AppIconItem {
  id: string;
  name: string;
  role: string;
  logo: string;
  badge: string;
}

export const PURE_APP_ICONS: AppIconItem[] = [
  {
    id: 'domoskills',
    name: 'DomoSkills',
    role: 'Agent Superpowers CLI',
    logo: '/assets/logos/product/domoskills.png',
    badge: 'Superpowers CLI'
  },
  {
    id: 'buddy',
    name: 'Buddy',
    role: 'Visual Impaired Assistant',
    logo: '/assets/logos/product/buddy.webp',
    badge: 'Assistive Tech'
  },
  {
    id: 'domodomo',
    name: 'DomoDomo',
    role: '240+ Local Web Utilities',
    logo: '/assets/logos/product/domodomo_logo.jpg',
    badge: 'Core Platform'
  },
  {
    id: 'agentdeck',
    name: 'AgentDeck',
    role: 'Remote Agent Orchestrator',
    logo: '/assets/logos/product/agentdeck.webp',
    badge: 'Remote Agent'
  },
  {
    id: 'hireme',
    name: 'HireMe',
    role: 'AI Career & Showcase Engine',
    logo: '/assets/logos/product/hireme.webp',
    badge: 'Career Engine'
  }
];

// Fan geometry parameters for large raw icons (130px size)
const FAN_ANGLES = [-16, -8, 0, 8, 16];
const FAN_X_OFFSETS = [-140, -70, 0, 70, 140];
const FAN_Y_OFFSETS = [18, 6, 0, 6, 18];

interface AppIconStackProps {
  onOpenLightbox: (src: string, caption?: string) => void;
  className?: string;
}

export const AppIconStack: React.FC<AppIconStackProps> = ({
  onOpenLightbox,
  className = ''
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`app-icon-stack-container ${className}`} aria-label="Pure App Icons Stack">
      <div className="app-icon-fan-arc">
        {PURE_APP_ICONS.map((app, index) => {
          const isHovered = hoveredIndex === index;
          const baseRot = FAN_ANGLES[index];
          const baseX = FAN_X_OFFSETS[index];
          const baseY = FAN_Y_OFFSETS[index];

          // When hovered: straightens, elevates upwards and scales
          const transformStyle = isHovered
            ? `translate3d(${baseX}px, ${baseY - 42}px, 60px) rotate(0deg) scale(1.22)`
            : `translate3d(${baseX}px, ${baseY}px, 0px) rotate(${baseRot}deg) scale(1)`;

          const zIndexVal = isHovered ? 50 : 10 + index;

          return (
            <div
              key={app.id}
              className="app-icon-fan-item"
              style={{
                transform: transformStyle,
                zIndex: zIndexVal,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <TiltCard
                maxTilt={20}
                perspective={800}
                scale={1.05}
                glare={true}
                maxGlare={0.45}
                className="app-icon-tilt-wrapper"
                onClick={() => onOpenLightbox(app.logo, `${app.name} — ${app.role}`)}
              >
                <div
                  className={`raw-app-icon-target ${isHovered ? 'hovered' : ''}`}
                  title={`${app.name}: ${app.role} (Click to expand)`}
                  tabIndex={0}
                  role="button"
                  aria-label={`${app.name} App Icon`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(app.logo, `${app.name} — ${app.role}`);
                    }
                  }}
                >
                  <img
                    src={app.logo}
                    alt={app.name}
                    className="raw-app-icon-img"
                  />

                  {isHovered && (
                    <div className="app-icon-hover-expand-pill">
                      <Maximize2 size={13} />
                      <span>Expand</span>
                    </div>
                  )}
                </div>
              </TiltCard>

              {/* Floating Tooltip Pill */}
              {isHovered && (
                <div className="app-icon-floating-tooltip" aria-hidden="true">
                  <div className="app-icon-tooltip-name">{app.name}</div>
                  <div className="app-icon-tooltip-role">{app.role}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="app-icon-stack-hint">
        <Sparkles size={11} />
        <span>5+ Apps Deployed &bull; Click any icon to expand</span>
      </div>
    </div>
  );
};
