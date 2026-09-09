import React from 'react';
import type { SlideData } from '../data/slidesData';
import { ExternalLink, Sparkles, Terminal, Shield, Zap, Globe, Cpu, Layers } from 'lucide-react';

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
          LAYOUT: HERO (Slide 1)
          ------------------------------------------------------------- */}
      {slide.layout === 'hero' && (
        <div className="hero-keynote-grid">
          {/* Left Column: Command & Keynote Thesis */}
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
            <div className="anim anim-1" style={{ marginBottom: '14px' }}>
              <div className="hero-kicker">
                <span className="hero-live-indicator" />
                <span>OPEN-SOURCE LOCAL-FIRST AI TOOLBOX // 2026</span>
              </div>
            </div>

            <h1 className="anim anim-2 hero-main-title">
              {slide.headline}
            </h1>

            <div className="anim anim-3 hero-thesis">
              From Student Struggles to Hackathon Glory
            </div>

            <p className="anim anim-4 hero-lead-desc">
              The journey from late-night student tab overload to an ecosystem of 240+ private, client-side tools and autonomous agent superpowers.
            </p>

            {/* Author Credential Badge */}
            <div className="anim anim-5 hero-author-strip">
              <img 
                src="/assets/photos/profile.png" 
                alt="Arron Parejas" 
                className="hero-author-avatar"
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Arron Parejas
                </div>
                <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)' }}>
                  Machine Learning Engineer Intern &bull; Founder of DomoDomo
                </div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <Shield size={12} color="#10b981" />
                <span>CLIENT-SIDE</span>
              </div>
            </div>

            {/* Key Pillars Micro-Cards */}
            {slide.bullets && (
              <div className="anim anim-6 hero-pillars-grid">
                {slide.bullets.map((b, i) => (
                  <div key={i} className="hero-pillar-card">
                    <div className="hero-pillar-label">{b.label}</div>
                    <div className="hero-pillar-text">{b.text}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Hero Keynote Showcase Window */}
          <div className="anim anim-4 hero-keynote-window">
            <div className="hero-window-header">
              <div className="hero-window-dots">
                <span />
                <span />
                <span />
              </div>
              <div>domodomo-core.system // v2.4</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span>ONLINE</span>
              </div>
            </div>

            <div className="hero-logo-stage">
              {slide.image && (
                <img 
                  src={slide.image.src} 
                  alt={slide.image.alt}
                  className="hero-logo-img"
                  onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                  title="Click to view full resolution logo"
                />
              )}

              <div className="hero-terminal-box">
                <div className="hero-terminal-row">
                  <span className="hero-terminal-prompt">&gt;</span>
                  <span><strong>architecture:</strong> 100% Client-Side Sandbox</span>
                </div>
                <div className="hero-terminal-row">
                  <span className="hero-terminal-prompt">&gt;</span>
                  <span><strong>privacy:</strong> Zero Subscriptions / Zero Cloud Leaks</span>
                </div>
                <div className="hero-terminal-row">
                  <span className="hero-terminal-prompt">&gt;</span>
                  <span><strong>ecosystem:</strong> &quot;We offer you an ecosystem&quot;</span>
                </div>
                <div className="hero-terminal-row" style={{ color: 'var(--text-muted)', marginTop: '4px' }}>
                  <span className="hero-terminal-prompt">&gt;</span>
                  <span><em>domodomo · buddy · domoskills · agentdeck · hireme</em></span>
                </div>
              </div>

              <div style={{ marginTop: '14px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '11px', color: 'var(--text-muted)' }}>
                <Sparkles size={12} />
                <span>Click logo to zoom &bull; Use &rarr; to advance slides</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------
          LAYOUT: CREATOR (Slide 2)
          ------------------------------------------------------------- */}
      {slide.layout === 'creator' && (
        <div className="grid-two-col">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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

            {slide.bullets && (
              <ul className="anim anim-5 minimal-list" style={{ marginTop: '8px' }}>
                {slide.bullets.map((b, i) => (
                  <li key={i}>
                    {b.label && <strong>{b.label}:</strong>} {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {slide.image && (
            <div className="anim anim-4" style={{ display: 'flex', justifyContent: 'center' }}>
              <div 
                className="profile-frame profile-frame-tilted" 
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                style={{ cursor: 'pointer' }}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
              </div>
            </div>
          )}
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
              <div 
                className="media-frame" 
                style={{ width: '100%', aspectRatio: '4/3' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
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
          </div>

          {slide.image && (
            <div className="anim anim-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img 
                  src={slide.image.src} 
                  alt={slide.image.alt}
                  style={{ width: '100%', maxHeight: '320px', objectFit: 'contain', borderRadius: '12px' }}
                />
              </div>
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
              <div 
                className="media-frame" 
                style={{ width: '100%', aspectRatio: '4/3' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
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
          </div>

          {slide.image && (
            <div className="anim anim-5">
              <div 
                className="media-frame" 
                style={{ aspectRatio: '16/10' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
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
          </div>

          {slide.image && (
            <div className="anim anim-5">
              <div 
                className="media-frame" 
                style={{ aspectRatio: '16/10' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
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
              <div 
                className="media-frame" 
                style={{ aspectRatio: '16/10' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
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
            <p className="anim anim-4 subheadline" style={{ marginBottom: '32px' }}>
              {slide.subheadline}
            </p>
          )}

          {slide.bullets && (
            <div className="anim anim-5 grid-equal-col" style={{ marginBottom: '36px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card">
                  {b.label && <div className="card-num">CAPABILITY 0{i + 1} · {b.label}</div>}
                  <div className="card-desc" style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {b.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Supported coding assistants */}
          <div className="anim anim-6" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-subtle)', borderRadius: '8px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
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
            <p className="anim anim-4 subheadline" style={{ marginBottom: '28px' }}>
              {slide.subheadline}
            </p>
          )}

          <div className="grid-equal-col" style={{ marginBottom: '24px' }}>
            {slide.image && (
              <div 
                className="anim anim-5 media-frame" 
                style={{ aspectRatio: '16/10' }}
                onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
              >
                <img src={slide.image.src} alt={slide.image.alt} />
                {slide.image.badge && <div className="frame-badge">{slide.image.badge}</div>}
              </div>
            )}

            {slide.secondaryImage && (
              <div 
                className="anim anim-6 media-frame" 
                style={{ aspectRatio: '16/10' }}
                onClick={() => onOpenLightbox(slide.secondaryImage!.src, slide.secondaryImage!.caption)}
              >
                <img src={slide.secondaryImage.src} alt={slide.secondaryImage.alt} />
                <div className="frame-badge">Vector RAG</div>
              </div>
            )}
          </div>

          {slide.bullets && (
            <div className="anim anim-7" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
              {slide.bullets.map((b, i) => (
                <div key={i} className="feature-card" style={{ padding: '16px' }}>
                  {b.label && <div className="card-num" style={{ fontSize: '10px' }}>{b.label}</div>}
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{b.text}</div>
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
                <div 
                  style={{ 
                    padding: '12px', 
                    background: '#ffffff', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer'
                  }}
                  onClick={() => onOpenLightbox(slide.image!.src, slide.image!.caption)}
                >
                  <img 
                    src={slide.image.src} 
                    alt={slide.image.alt} 
                    style={{ width: '120px', height: '120px', display: 'block', objectFit: 'contain' }}
                  />
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', marginTop: '8px' }}>
                  Scan to Connect
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  );
};
