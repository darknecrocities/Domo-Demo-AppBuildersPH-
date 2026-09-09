import React from 'react';
import { X } from 'lucide-react';
import type { SlideData } from '../data/slidesData';

interface SlideDrawerProps {
  slides: SlideData[];
  currentSlide: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (slideIndex: number) => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  slides,
  currentSlide,
  isOpen,
  onClose,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Slide overview drawer">
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Slide Deck Overview
            </span>
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginTop: '4px' }}>
              Jump to Slide
            </h3>
          </div>
          <button className="nav-btn" onClick={onClose} aria-label="Close drawer">
            <X size={18} />
          </button>
        </div>

        <div className="drawer-grid">
          {slides.map((s, index) => {
            const isActive = currentSlide === s.id;
            return (
              <div
                key={s.id}
                className={`drawer-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onSelectSlide(s.id);
                  onClose();
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onSelectSlide(s.id);
                    onClose();
                  }
                }}
              >
                <div className="item-num">{String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</div>
                <div className="item-title">{s.headline}</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: 'auto', paddingTop: '6px' }}>
                  {s.eyebrow}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
