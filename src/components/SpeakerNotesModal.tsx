import React from 'react';
import { X, Mic } from 'lucide-react';
import type { SlideData } from '../data/slidesData';

interface SpeakerNotesModalProps {
  slide: SlideData;
  isOpen: boolean;
  onClose: () => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  slide,
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  return (
    <aside className="notes-panel" role="complementary" aria-label="Speaker notes">
      <div className="notes-header">
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', gap: '8px' }}>
          <Mic size={14} style={{ color: 'var(--text-muted)' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: 600, color: 'var(--text-secondary)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Presenter Notes · Slide {slide.tag}
          </span>
        </div>
        <button className="nav-btn" style={{ width: '28px', height: '28px' }} onClick={onClose} aria-label="Close notes">
          <X size={14} />
        </button>
      </div>

      <div className="notes-content">
        <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '10px' }}>
          {slide.headline}
        </div>
        <ul>
          {slide.notes.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
