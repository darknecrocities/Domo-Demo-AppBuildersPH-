import React from 'react';
import { X } from 'lucide-react';

interface LightboxModalProps {
  imageSrc: string | null;
  caption?: string;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  imageSrc,
  caption,
  onClose
}) => {
  if (!imageSrc) return null;

  return (
    <div className="lightbox-modal" onClick={onClose} role="dialog" aria-modal="true" aria-label="Expanded Image View">
      <button 
        className="nav-btn" 
        style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44 }} 
        onClick={onClose}
        aria-label="Close Lightbox"
      >
        <X size={20} />
      </button>

      <img 
        src={imageSrc} 
        alt={caption || 'Expanded screenshot'} 
        onClick={(e) => e.stopPropagation()} 
      />

      {caption && (
        <div className="lightbox-caption" onClick={(e) => e.stopPropagation()}>
          {caption}
        </div>
      )}
    </div>
  );
};
