import React from 'react';
import { X } from 'lucide-react';
import { TiltCard } from './TiltCard';

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
    <div 
      className="lightbox-modal" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Expanded Image View"
    >
      <button 
        className="nav-btn lightbox-close-btn" 
        onClick={onClose}
        aria-label="Close Lightbox"
        title="Close (Esc)"
      >
        <X size={20} />
      </button>

      <div 
        className="lightbox-content-wrap" 
        onClick={(e) => e.stopPropagation()}
      >
        <TiltCard
          maxTilt={16}
          perspective={1100}
          scale={1.03}
          glare={true}
          maxGlare={0.35}
          className="lightbox-tilt-container"
        >
          <div 
            className="lightbox-image-frame"
            title="Move cursor or tilt device for 3D physics"
          >
            <img 
              src={imageSrc} 
              alt={caption || 'Expanded preview'} 
              className="lightbox-expanded-img"
            />
          </div>
        </TiltCard>

        {caption && (
          <div className="lightbox-caption">
            {caption}
          </div>
        )}

        <div className="lightbox-hint-cue">
          ✦ Move cursor or tilt device for 3D gyro effect
        </div>
      </div>
    </div>
  );
};
