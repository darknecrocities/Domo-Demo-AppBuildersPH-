import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
import { TiltCard } from './TiltCard';

export interface UnoProduct {
  id: string;
  name: string;
  tagline: string;
  role: string;
  logo: string;
  colorScheme: 'red' | 'blue' | 'yellow' | 'green' | 'wild';
  cardCornerSymbol: string;
  themeColor: string;
  badgeText: string;
  description: string;
  highlights: string[];
  techStack: string[];
  link?: string;
  stats?: { label: string; value: string };
}

interface UnoCardModalProps {
  product: UnoProduct | null;
  allProducts: UnoProduct[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: UnoProduct) => void;
  onOpenLightbox: (src: string, caption?: string) => void;
}

export const UnoCardModal: React.FC<UnoCardModalProps> = ({
  product,
  allProducts,
  isOpen,
  onClose,
  onSelectProduct,
  onOpenLightbox,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopImmediatePropagation();
        onClose();
      } else if (e.key === 'ArrowRight') {
        const currentIndex = allProducts.findIndex((p) => p.id === product.id);
        const nextIndex = (currentIndex + 1) % allProducts.length;
        onSelectProduct(allProducts[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = allProducts.findIndex((p) => p.id === product.id);
        const prevIndex = (currentIndex - 1 + allProducts.length) % allProducts.length;
        onSelectProduct(allProducts[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, [isOpen, product, allProducts, onClose, onSelectProduct]);

  if (!isOpen || !product) return null;

  const currentIndex = allProducts.findIndex((p) => p.id === product.id);

  return (
    <div
      className="uno-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} Details`}
    >
      <div
        className="uno-modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{ borderColor: product.themeColor }}
      >
        {/* Close Button */}
        <button
          className="uno-modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
          title="Close (Esc)"
        >
          <X size={18} />
        </button>

        {/* Navigation Arrows */}
        <button
          className="uno-modal-nav-btn prev"
          onClick={() => {
            const prev = (currentIndex - 1 + allProducts.length) % allProducts.length;
            onSelectProduct(allProducts[prev]);
          }}
          aria-label="Previous product"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="uno-modal-nav-btn next"
          onClick={() => {
            const next = (currentIndex + 1) % allProducts.length;
            onSelectProduct(allProducts[next]);
          }}
          aria-label="Next product"
        >
          <ChevronRight size={20} />
        </button>

        <div className="uno-modal-body">
          {/* Left Column: Interactive 3D Uno Card */}
          <div className="uno-modal-card-col">
            <TiltCard
              maxTilt={22}
              perspective={800}
              scale={1.04}
              className="uno-modal-tilt-wrapper"
              onClick={() => onOpenLightbox(product.logo, `${product.name} — ${product.tagline}`)}
            >
              <div
                className={`uno-card uno-card-large uno-card-${product.colorScheme}`}
                title="Click image to zoom full screen"
              >
                {/* Top Corner Symbol */}
                <div className="uno-corner-symbol top-left">
                  <span className="uno-symbol-val">{product.cardCornerSymbol}</span>
                </div>

                {/* Inner Card Oval */}
                <div className="uno-card-center-oval">
                  <div className="uno-card-oval-inner">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="uno-card-logo-img"
                    />
                  </div>
                </div>

                {/* Card Title Label */}
                <div className="uno-card-brand-label">
                  <div className="uno-card-title">{product.name}</div>
                  <div className="uno-card-role-sub">{product.badgeText}</div>
                </div>

                {/* Bottom Corner Symbol (Inverted) */}
                <div className="uno-corner-symbol bottom-right">
                  <span className="uno-symbol-val">{product.cardCornerSymbol}</span>
                </div>
              </div>
            </TiltCard>
            <div className="uno-modal-zoom-hint">
              <Sparkles size={12} />
              <span>3D Tilt Active &bull; Click card to zoom full image</span>
            </div>
          </div>

          {/* Right Column: Detailed Product Showcase */}
          <div className="uno-modal-info-col">
            <div className="uno-modal-header-badge">
              <span
                className="uno-modal-pill"
                style={{
                  background: `${product.themeColor}22`,
                  borderColor: product.themeColor,
                  color: product.themeColor,
                }}
              >
                <Layers size={12} />
                {product.badgeText} &bull; Card {currentIndex + 1} of {allProducts.length}
              </span>
            </div>

            <h2 className="uno-modal-title">{product.name}</h2>
            <div className="uno-modal-tagline">{product.tagline}</div>

            <p className="uno-modal-desc">{product.description}</p>

            {/* Highlights */}
            <div className="uno-modal-section-label">Key Capabilities</div>
            <ul className="uno-modal-highlights-list">
              {product.highlights.map((h, i) => (
                <li key={i}>
                  <CheckCircle size={15} style={{ color: product.themeColor, flexShrink: 0 }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech Stack Pills */}
            <div className="uno-modal-section-label">Architecture & Stack</div>
            <div className="uno-modal-stack-pills">
              {product.techStack.map((tech, i) => (
                <span key={i} className="uno-modal-tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            {/* Bottom Actions & Dots */}
            <div className="uno-modal-footer">
              <div className="uno-modal-dots">
                {allProducts.map((p, i) => (
                  <button
                    key={p.id}
                    className={`uno-modal-dot ${i === currentIndex ? 'active' : ''}`}
                    onClick={() => onSelectProduct(p)}
                    style={{
                      backgroundColor: i === currentIndex ? p.themeColor : undefined,
                    }}
                    aria-label={`Go to ${p.name}`}
                  />
                ))}
              </div>

              <button
                className="uno-modal-action-btn"
                onClick={() => onOpenLightbox(product.logo, `${product.name}: ${product.tagline}`)}
                style={{ borderColor: product.themeColor }}
              >
                <span>Inspect Full Logo</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
