import React from 'react';
import type { SlideData } from '../data/slidesData';
import { ExternalLink, Sparkles, Terminal, Shield, Zap, Globe, Cpu, Layers, Eye, Glasses } from 'lucide-react';
import { TiltCard } from './TiltCard';
import { UnoCardDeck } from './UnoCardDeck';
import { AppIconStack } from './AppIconStack';

interface SlideRendererProps {
  slide: SlideData;
  direction: 'right' | 'left';
  onOpenLightbox: (src: string, caption?: string) => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  direction,
  onOpenLightbox
}) => {
  const transitionClass = direction === 'right' ? 'slide-enter-right' : 'slide-enter-left';

  return (
    <article 
      className={`slide-wrapper ${transitionClass}`}
      aria-label={`Slide ${slide.tag}: ${slide.headline}`}
    >
      {/* -------------------------------------------------------------
          LAYOUT: HERO (Slide 1) - Spotlighting DomoDomo x Buddy Logos
          ------------------------------------------------------------- */}
      {slide.layout === 'hero' && (
        <div className="hero-logo-only-container">
          <div className={`anim anim-1 ${slide.secondaryImage ? 'hero-logo-spotlight-dual' : 'hero-logo-spotlight'}`}>
            <TiltCard
              maxTilt={20}
              perspective={900}
              scale={1.06}
              glare={true}
              maxGlare={0.5}
              className="hero-tilt-wrapper"
              onClick={() => {
                if (slide.image) {
                  onOpenLightbox(slide.image.src, slide.image.caption);
                }
              }}
            >
              <div 
                className="hero-monumental-logo-frame"
                title="DomoDomo • Click to view full size • 3D tilt physics & gyro"
              >
                {slide.image && (
                  <img
                    src={slide.image.src}
                    alt={slide.image.alt}
                    className="hero-monumental-logo-img"
                  />
                )}
                <div className="hero-logo-ambient-glow" />
              </div>
            </TiltCard>

            {slide.secondaryImage && (
              <>
                <div className="hero-dual-cross" aria-hidden="true">×</div>
                <TiltCard
                  maxTilt={20}
                  perspective={900}
                  scale={1.06}
                  glare={true}
                  maxGlare={0.5}
                  className="hero-tilt-wrapper"
                  onClick={() => {
                    onOpenLightbox(slide.secondaryImage!.src, slide.secondaryImage!.caption);
                  }}
                >
                  <div 
                    className="hero-monumental-logo-frame hero-frame-buddy"
                    title="Buddy • Click to view full size • 3D tilt physics & gyro"
                  >
                    <img
                      src={slide.secondaryImage.src}
                      alt={slide.secondaryImage.alt}
                      className="hero-monumental-logo-img"
                    />
                    <div className="hero-logo-ambient-glow hero-glow-buddy" />
                  </div>
                </TiltCard>
              </>
            )}
          </div>

          <div className="anim anim-2 hero-logo-brand-info">
            <h1 className="hero-main-title">{slide.headline}</h1>
            {slide.subheadline && (
              <div className="hero-thesis">{slide.subheadline}</div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: APP SHOWCASE (Optional)
          ------------------------------------------------------------- */}
      {slide.layout === 'app-showcase' && (
        <div className="showcase-slide-container">
          <div className="showcase-header">
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">
                <Layers size={12} />
                {slide.eyebrow}
              </span>
            </div>
            <div className="anim anim-2 anim-rule wide" style={{ margin: '0 auto 10px' }} />
            <h2 className="anim anim-3 headline-slide" style={{ textAlign: 'center', marginBottom: '6px' }}>
              {slide.headline}
            </h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 16px' }}>
                {slide.subheadline}
              </p>
            )}
          </div>

          <div className="anim anim-5">
            <UnoCardDeck onOpenLightbox={onOpenLightbox} />
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: CREATOR (Slide 2) - Speaker Intro & Pure App Icons Stack
          ------------------------------------------------------------- */}
      {slide.layout === 'creator' && (
        <div className="grid-two-col creator-slide-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">{slide.eyebrow}</span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '18px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list" style={{ marginTop: '4px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="anim anim-4 creator-showcase-col">
            {slide.image && (
              <div className="creator-profile-wrap">
                <TiltCard
                  maxTilt={14}
                  perspective={800}
                  scale={1.03}
                  onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                >
                  <div 
                    className="profile-frame profile-frame-tilted" 
                    title="Click to view full size • Move cursor for 3D tilt"
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={slide.image.src} alt={slide.image.alt} />
                  </div>
                </TiltCard>
              </div>
            )}

            {/* Pure Raw App Icons Stack - No Card Container */}
            <AppIconStack onOpenLightbox={onOpenLightbox} />
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: BUDDY SHOWCASE (Slides 3 & 4) - Mobile AI & Hardware Glasses
          ------------------------------------------------------------- */}
      {slide.layout === 'buddy-showcase' && (
        <div className="grid-two-col buddy-showcase-grid">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">
                {slide.eyebrow.includes('Hardware') ? <Glasses size={12} /> : <Eye size={12} />}
                {slide.eyebrow}
              </span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '16px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list" style={{ marginTop: '2px', marginBottom: '18px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}

            {slide.tags && slide.tags.length > 0 && (
              <div className="anim anim-6 buddy-tags-row">
                {slide.tags.map((tag, idx) => (
                  <span key={idx} className="buddy-pill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="anim anim-4 buddy-phone-pair-col">
            <div className="buddy-phone-mockup-wrapper">
              {slide.phonePair && slide.phonePair.map((phone, pIdx) => (
                <div key={pIdx} className="buddy-phone-card">
                  <TiltCard
                    maxTilt={13}
                    perspective={800}
                    scale={1.03}
                    glare={true}
                    maxGlare={0.22}
                    onClick={() => onOpenLightbox(phone.src, phone.caption)}
                  >
                    <div 
                      className="buddy-phone-frame"
                      title="Click to view full size • Move cursor for 3D tilt"
                    >
                      {phone.badge && (
                        <div className="buddy-phone-badge">
                          <span>{phone.badge}</span>
                        </div>
                      )}
                      <img 
                        src={phone.src} 
                        alt={phone.alt} 
                        className="buddy-phone-img" 
                      />
                      <div className="buddy-phone-gloss" />
                    </div>
                  </TiltCard>
                  {phone.caption && (
                    <p className="buddy-phone-caption">{phone.caption}</p>
                  )}
                </div>
              ))}
            </div>
            <p className="buddy-hint-label">
              ✦ Click either screen to zoom in • Hover for 3D tilt physics
            </p>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: STORY & HACKATHON (Slide 4)
          ------------------------------------------------------------- */}
      {slide.layout === 'story-hackathon' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">{slide.eyebrow}</span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '20px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.quote && (
              <blockquote className="anim anim-5 lead-quote">
                {slide.quote}
              </blockquote>
            )}

            {slide.bullets && (
              <ul className="anim anim-6 minimal-list" style={{ marginTop: '16px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {slide.image && (
            <div className="anim anim-5" style={{ display: 'flex', justifyContent: 'center' }}>
              <TiltCard
                maxTilt={14}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  className="media-frame" 
                  style={{ width: '100%', aspectRatio: '4/3', cursor: 'pointer' }}
                >
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                </div>
              </TiltCard>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: STORY OF THE CAP (Slide 5)
          ------------------------------------------------------------- */}
      {slide.layout === 'story-cap' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">{slide.eyebrow}</span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '18px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.quote && (
              <blockquote className="anim anim-5 lead-quote">
                {slide.quote}
              </blockquote>
            )}

            {slide.bullets && (
              <ul className="anim anim-6 minimal-list" style={{ marginTop: '16px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>          {slide.image && (
            <div className="anim anim-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <TiltCard
                maxTilt={16}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  style={{ 
                    background: 'var(--bg-card)', 
                    border: '1px solid var(--border-subtle)', 
                    borderRadius: '16px', 
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    width: '100%',
                    maxWidth: '380px',
                    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)'
                  }}
                >
                  <img 
                    src={slide.image.src} 
                    alt={slide.image.alt} 
                    style={{ width: '100%', maxHeight: '320px', objectFit: 'contain', borderRadius: '12px' }}
                  />
                </div>
              </TiltCard>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '14px', textAlign: 'center' }}>
                {slide.image.caption}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: COMMUNITY (Slide 6)
          ------------------------------------------------------------- */}
      {slide.layout === 'community' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">{slide.eyebrow}</span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '20px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.quote && (
              <blockquote className="anim anim-5 lead-quote">
                {slide.quote}
              </blockquote>
            )}

            {slide.bullets && (
              <ul className="anim anim-6 minimal-list" style={{ marginTop: '16px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {slide.image && (
            <div className="anim anim-5" style={{ display: 'flex', justifyContent: 'center' }}>
              <TiltCard
                maxTilt={14}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  className="media-frame" 
                  style={{ width: '100%', aspectRatio: '4/3', cursor: 'pointer' }}
                >
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                </div>
              </TiltCard>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: EVOLUTION UTILITIES (Slide 7)
          ------------------------------------------------------------- */}
      {slide.layout === 'evolution-utilities' && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">
              <Terminal size={12} />
              {slide.eyebrow}
            </span>
          </div>
          <div className="anim anim-2 anim-rule" />
          <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '36px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.bullets && (
            <div className="anim anim-5 grid-equal-col" style={{ marginBottom: '40px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card">
                  {b.label && <div className="card-num">MODULE 0{i + 1} · {b.label}</div>}
                  <div className="card-desc" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {b.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {slide.stats && (
            <div className="anim anim-6" style={{ display: 'flex', gap: '48px', borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
              {slide.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: EVOLUTION AGENTIC & LOCAL AI (Slide 8)
          ------------------------------------------------------------- */}
      {slide.layout === 'evolution-agentic' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">
                <Cpu size={12} />
                {slide.eyebrow}
              </span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '24px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list">
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}

            <div className="anim anim-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              {['Ollama (localhost:11434)', 'Transformers.js (WASM)', 'Zero Cloud GPU Fees', 'WebGPU Accelerated'].map((tech, idx) => (
                <span key={idx} style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '11px', 
                  padding: '4px 10px', 
                  borderRadius: '999px', 
                  background: 'rgba(59, 130, 246, 0.08)', 
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  color: 'var(--accent-blue, #60a5fa)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {slide.image && (
            <div className="anim anim-5">
              <TiltCard
                maxTilt={14}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  className="media-frame" 
                  style={{ aspectRatio: '16/10', cursor: 'pointer' }}
                >
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                </div>
              </TiltCard>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '10px', textAlign: 'center' }}>
                {slide.image.caption}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: 240+ TOOLS ECOSYSTEM (Slide 9)
          ------------------------------------------------------------- */}
      {slide.layout === 'tools-ecosystem' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">
                <Layers size={12} />
                {slide.eyebrow}
              </span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '24px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list">
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}

            <div className="anim anim-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              {['PDF Suite', 'AI Media & Spatial', 'Developer & DevSec', 'Audio/Video WASM', 'Forensics & Privacy', 'Math & Converters'].map((cat, idx) => (
                <span key={idx} style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '11px', 
                  padding: '4px 10px', 
                  borderRadius: '999px', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-secondary)'
                }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          {slide.image && (
            <div className="anim anim-5">
              <TiltCard
                maxTilt={14}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  className="media-frame" 
                  style={{ aspectRatio: '16/10', cursor: 'pointer' }}
                >
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                </div>
              </TiltCard>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '10px', textAlign: 'center' }}>
                {slide.image.caption}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: DOMO AGENT HUB (Slide 10)
          ------------------------------------------------------------- */}
      {slide.layout === 'agent-hub' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="anim anim-1 eyebrow">
              <span className="eyebrow-pill">
                <Terminal size={12} />
                {slide.eyebrow}
              </span>
            </div>
            <div className="anim anim-2 anim-rule" />
            <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
            {slide.subheadline && (
              <p className="anim anim-4 subheadline" style={{ marginBottom: '24px' }}>
                {slide.subheadline}
              </p>
            )}

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list">
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {slide.image && (
            <div className="anim anim-5">
              <TiltCard
                maxTilt={14}
                perspective={900}
                scale={1.03}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <div 
                  className="media-frame" 
                  style={{ aspectRatio: '16/10', cursor: 'pointer' }}
                >
                  <img src={slide.image.src} alt={slide.image.alt} />
                  {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                </div>
              </TiltCard>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '10px', textAlign: 'center' }}>
                {slide.image.caption}
              </div>
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: DOMOSKILLS (Slide 11)
          ------------------------------------------------------------- */}
      {slide.layout === 'domoskills' && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">
              <Zap size={12} />
              {slide.eyebrow}
            </span>
          </div>
          <div className="anim anim-2 anim-rule" />
          <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '28px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.bullets && (
            <div className="anim anim-5 grid-equal-col" style={{ marginBottom: '24px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card">
                  {b.label && <div className="card-num">CAPABILITY 0{i + 1} · {b.label}</div>}
                  <div className="card-desc" style={{ fontSize: '14px', color: 'var(--text-primary)' }}>
                    {b.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Stats Row for DomoSkills */}
          {slide.stats && (
            <div className="anim anim-6" style={{ display: 'flex', gap: '48px', marginBottom: '28px', borderTop: '1px solid var(--border-subtle)', paddingTop: '20px' }}>
              {slide.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Supported coding assistants */}
          <div className="anim anim-7" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
              Native Compatibility: Google Antigravity · Claude Code · Cursor · Codex · OpenCode
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', background: 'var(--bg-color)', padding: '6px 12px', borderRadius: '4px', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
              npx domoskills install
            </span>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: ADVANCED AI STUDIO (Slide 12)
          ------------------------------------------------------------- */}
      {slide.layout === 'advanced-studio' && (
        <div style={{ maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">
              <Cpu size={12} />
              {slide.eyebrow}
            </span>
          </div>
          <div className="anim anim-2 anim-rule" />
          <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '24px' }}>
              {slide.subheadline}
            </p>
          )}

          <div className="grid-equal-col" style={{ marginBottom: '20px' }}>
            {slide.image && (
              <div className="anim anim-5">
                <TiltCard
                  maxTilt={14}
                  perspective={900}
                  scale={1.03}
                  onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                >
                  <div 
                    className="media-frame" 
                    style={{ aspectRatio: '16/10', cursor: 'pointer' }}
                  >
                    <img src={slide.image.src} alt={slide.image.alt} />
                    {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
                  </div>
                </TiltCard>
              </div>
            )}

            {slide.secondaryImage && (
              <div className="anim anim-6">
                <TiltCard
                  maxTilt={14}
                  perspective={900}
                  scale={1.03}
                  onClick={() => onOpenLightbox(slide.secondaryImage!.src, slide.secondaryImage!.caption)}
                >
                  <div 
                    className="media-frame" 
                    style={{ aspectRatio: '16/10', cursor: 'pointer' }}
                  >
                    <img src={slide.secondaryImage.src} alt={slide.secondaryImage.alt} />
                    <div className="frame-badge">Vector RAG</div>
                  </div>
                </TiltCard>
              </div>
            )}
          </div>

          {slide.bullets && (
            <div className="anim anim-7" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card" style={{ padding: '14px 16px' }}>
                  {b.label && <div className="card-num" style={{ fontSize: '10px' }}>{b.label}</div>}
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>{b.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: SIGNIFICANCE (Slide 13)
          ------------------------------------------------------------- */}
      {slide.layout === 'significance' && (
        <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">
              <Shield size={12} />
              {slide.eyebrow}
            </span>
          </div>
          <div className="anim anim-2 anim-rule" />
          <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '32px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.bullets && (
            <div className="anim anim-5 grid-equal-col" style={{ marginBottom: '40px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card">
                  {b.label && <div className="card-num">FOR {b.label.toUpperCase()}</div>}
                  <div className="card-desc" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {b.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {slide.stats && (
            <div className="anim anim-6" style={{ display: 'flex', gap: '48px', borderTop: '1px solid var(--border-subtle)', paddingTop: '28px' }}>
              {slide.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: PHILOSOPHY (Slide 3 & Slide 14)
          ------------------------------------------------------------- */}
      {slide.layout === 'philosophy' && (
        <div style={{ maxWidth: '980px', margin: '0 auto', width: '100%' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">{slide.eyebrow}</span>
          </div>
          <div className="anim anim-2 anim-rule" />
          <h2 className="anim anim-3 headline-slide">{slide.headline}</h2>
          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '24px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.quote && (
            <blockquote className="anim anim-5 lead-quote" style={{ fontSize: 'clamp(20px, 2.6vw, 32px)', margin: '32px 0' }}>
              {slide.quote}
            </blockquote>
          )}

          {slide.bullets && (
            <ul className="anim anim-6 minimal-list" style={{ marginTop: '24px' }}>
              {slide.bullets.map((b, i) => (
                <li key={i}>
                  {b.label && <strong>{b.label}:</strong>} {b.text}
                </li>
              ))}
            </ul>
          )}

          {slide.stats && (
            <div className="anim anim-7" style={{ display: 'flex', gap: '48px', borderTop: '1px solid var(--border-subtle)', paddingTop: '28px', marginTop: '36px' }}>
              {slide.stats.map((s, i) => (
                <div key={i}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {s.value}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: CLOSING & CONNECT (Slide 15)
          ------------------------------------------------------------- */}
      {slide.layout === 'closing-connect' && (
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className="anim anim-1 eyebrow">
            <span className="eyebrow-pill">
              <Globe size={12} />
              {slide.eyebrow}
            </span>
          </div>

          <div className="anim anim-2 anim-rule wide" style={{ margin: '0 auto 28px' }} />

          <h2 className="anim anim-3 headline-hero" style={{ marginBottom: '16px' }}>
            {slide.headline}
          </h2>

          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ marginBottom: '32px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.quote && (
            <div className="anim anim-5" style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '20px', color: 'var(--text-primary)', marginBottom: '36px' }}>
              {slide.quote}
            </div>
          )}

          <div className="anim anim-6" style={{ display: 'flex', gap: '56px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
            {/* Links */}
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginBottom: '6px' }}>
                Connect & Explore
              </div>
              <a 
                href="https://domodomo.site/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
              >
                <span>domodomo.site</span> <ExternalLink size={14} />
              </a>
              <a 
                href="https://github.com/darknecrocities" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
              >
                <span>github.com/darknecrocities</span> <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.linkedin.com/in/arron-parejas/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
              >
                <span>linkedin.com/in/arron-parejas</span> <ExternalLink size={14} />
              </a>
              <a 
                href="https://arronparejas.dev" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: 'var(--text-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px' }}
              >
                <span>arronparejas.dev</span> <ExternalLink size={14} />
              </a>
            </div>

            {/* QR Code */}
            {slide.image && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <TiltCard
                  maxTilt={15}
                  perspective={800}
                  scale={1.05}
                  onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                >
                  <div 
                    style={{ 
                      padding: '12px', 
                      background: '#ffffff', 
                      borderRadius: '8px', 
                      border: '1px solid var(--border-subtle)',
                      cursor: 'pointer'
                    }}
                  >
                    <img 
                      src={slide.image.src} 
                      alt={slide.image.alt} 
                      style={{ width: '120px', height: '120px', display: 'block', objectFit: 'contain' }}
                    />
                  </div>
                </TiltCard>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginTop: '8px' }}>
                  Scan to Connect
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: END CREDITS & THE BUILDERS (Slide 16)
          ------------------------------------------------------------- */}
      {slide.layout === 'end-credits' && (
        <div className="end-credits-container">
          <div className="anim anim-1 eyebrow" style={{ textAlign: 'center' }}>
            <span className="eyebrow-pill">
              <Sparkles size={12} />
              {slide.eyebrow}
            </span>
          </div>

          <div className="anim anim-2 anim-rule wide" style={{ margin: '0 auto 10px' }} />

          <h2 className="anim anim-3 headline-slide" style={{ textAlign: 'center', marginBottom: '4px' }}>
            {slide.headline}
          </h2>

          {slide.subheadline && (
            <p className="anim anim-4 subheadline" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 20px' }}>
              {slide.subheadline}
            </p>
          )}

          <div className="anim anim-5 credits-team-grid">
            {/* Arron Parejas Card */}
            <div className="credit-builder-card">
              <div className="credit-builder-header">
                <div className="credit-avatar-wrapper">
                  <img
                    src="/assets/photos/profile.png"
                    alt="Arron Parejas"
                    className="credit-avatar-img"
                    width="56"
                    height="56"
                    style={{ width: '56px', height: '56px', maxWidth: '56px', maxHeight: '56px', objectFit: 'cover', borderRadius: '50%' }}
                  />
                  <div className="credit-avatar-badge">ML</div>
                </div>
                <div className="credit-builder-meta">
                  <h3 className="credit-builder-name">Arron Parejas</h3>
                  <div className="credit-builder-role">Founder & Machine Learning Engineer Intern</div>
                  <div className="credit-builder-affil">
                    Maintainer of DomoDomo &bull; Former GDGoC Chapter Lead
                  </div>
                </div>
              </div>

              <div className="credit-qr-showcase">
                {/* Website QR */}
                <div className="credit-qr-tile">
                  <TiltCard
                    maxTilt={16}
                    perspective={700}
                    scale={1.04}
                    onClick={() => onOpenLightbox('/assets/qr/qr_arron_website.png', 'Scan to visit Arron Parejas Website (arronparejas.dev)')}
                  >
                    <div className="credit-qr-frame" title="Click to enlarge QR code">
                      <img
                        src="/assets/qr/qr_arron_website.png"
                        alt="QR Code for Arron Website"
                        className="credit-qr-img"
                      />
                    </div>
                  </TiltCard>
                  <div className="credit-qr-label">Personal Website</div>
                  <a
                    href="http://arronparejas.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credit-link-btn"
                  >
                    <Globe size={13} />
                    <span>arronparejas.dev</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* LinkedIn QR */}
                <div className="credit-qr-tile">
                  <TiltCard
                    maxTilt={16}
                    perspective={700}
                    scale={1.04}
                    onClick={() => onOpenLightbox('/assets/qr/qr_arron_linkedin.png', 'Scan to connect with Arron Parejas on LinkedIn')}
                  >
                    <div className="credit-qr-frame" title="Click to enlarge QR code">
                      <img
                        src="/assets/qr/qr_arron_linkedin.png"
                        alt="QR Code for Arron LinkedIn"
                        className="credit-qr-img"
                      />
                    </div>
                  </TiltCard>
                  <div className="credit-qr-label">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/arron-parejas/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credit-link-btn"
                  >
                    <span className="linkedin-custom-badge">in</span>
                    <span>arron-parejas</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Ram Guinto Card */}
            <div className="credit-builder-card">
              <div className="credit-builder-header">
                <div className="credit-avatar-wrapper">
                  <img
                    src="/assets/photos/ram_guinto.jpg"
                    alt="Ram Guinto"
                    className="credit-avatar-img"
                    width="56"
                    height="56"
                    style={{ width: '56px', height: '56px', maxWidth: '56px', maxHeight: '56px', objectFit: 'cover', borderRadius: '50%' }}
                  />
                  <div className="credit-avatar-badge design">UI</div>
                </div>
                <div className="credit-builder-meta">
                  <h3 className="credit-builder-name">Ram Guinto</h3>
                  <div className="credit-builder-role">Front-end & Designer Developer</div>
                  <div className="credit-builder-affil">
                    UI/UX Architecture &bull; Hackathon Champion Co-creator
                  </div>
                </div>
              </div>

              <div className="credit-qr-showcase">
                {/* Website QR */}
                <div className="credit-qr-tile">
                  <TiltCard
                    maxTilt={16}
                    perspective={700}
                    scale={1.04}
                    onClick={() => onOpenLightbox('/assets/qr/qr_ram_website.png', 'Scan to visit Ram Guinto Website (ramguinto.tech)')}
                  >
                    <div className="credit-qr-frame" title="Click to enlarge QR code">
                      <img
                        src="/assets/qr/qr_ram_website.png"
                        alt="QR Code for Ram Website"
                        className="credit-qr-img"
                      />
                    </div>
                  </TiltCard>
                  <div className="credit-qr-label">Personal Website</div>
                  <a
                    href="https://ramguinto.tech/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credit-link-btn"
                  >
                    <Globe size={13} />
                    <span>ramguinto.tech</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                {/* LinkedIn QR */}
                <div className="credit-qr-tile">
                  <TiltCard
                    maxTilt={16}
                    perspective={700}
                    scale={1.04}
                    onClick={() => onOpenLightbox('/assets/qr/qr_ram_linkedin.png', 'Scan to connect with Ram Guinto on LinkedIn')}
                  >
                    <div className="credit-qr-frame" title="Click to enlarge QR code">
                      <img
                        src="/assets/qr/qr_ram_linkedin.png"
                        alt="QR Code for Ram LinkedIn"
                        className="credit-qr-img"
                      />
                    </div>
                  </TiltCard>
                  <div className="credit-qr-label">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/ram-guinto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credit-link-btn"
                  >
                    <span className="linkedin-custom-badge">in</span>
                    <span>ram-guinto</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="anim anim-6 credit-footer-note">
            <span>Scan QR codes with your camera or click direct links &bull; Click any QR code to zoom full screen</span>
          </div>
        </div>
      )}
    </article>
  );
};
