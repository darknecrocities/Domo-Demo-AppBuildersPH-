import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  LayoutGrid, 
  FileText, 
  Maximize2, 
  Minimize2, 
  Sun, 
  Moon, 
  Keyboard 
} from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  progressPercent: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleDrawer: () => void;
  onToggleNotes: () => void;
  onToggleShortcuts: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  hasNotesOpen: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentSlide,
  totalSlides,
  progressPercent,
  onPrev,
  onNext,
  onToggleDrawer,
  onToggleNotes,
  onToggleShortcuts,
  onToggleFullscreen,
  isFullscreen,
  theme,
  onToggleTheme,
  hasNotesOpen
}) => {
  const formatIndex = (index: number) => String(index).padStart(2, '0');

  return (
    <header className="nav-bar" role="banner" aria-label="Slide deck navigation appbar">
      {/* Progress Bar Line */}
      <div className="progress-line-wrap" role="progressbar" aria-valuenow={progressPercent} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress-line" style={{ width: `${progressPercent}%` }} />
      </div>

      {/* Left controls: Brand & Drawer */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={onToggleDrawer}
          title="Slide Overview (Esc or G)"
          aria-label="Toggle Slide Overview"
        >
          <LayoutGrid size={18} />
        </button>

        <button
          className="nav-btn"
          onClick={onToggleShortcuts}
          title="Keyboard Shortcuts (?)"
          aria-label="View Keyboard Shortcuts"
        >
          <Keyboard size={18} />
        </button>

        <button
          className={`nav-btn ${hasNotesOpen ? 'active' : ''}`}
          onClick={onToggleNotes}
          title="Speaker Notes (N)"
          aria-label="Toggle Speaker Notes"
          style={hasNotesOpen ? { borderColor: 'var(--accent-white)', background: 'var(--bg-card-hover)' } : {}}
        >
          <FileText size={18} />
        </button>
      </div>

      {/* Center: Slide Arrows & Counter */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={onPrev}
          disabled={currentSlide === 1}
          title="Previous Slide (← or PageUp)"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="slide-counter">
          {formatIndex(currentSlide)} / {formatIndex(totalSlides)}
        </div>

        <button
          className="nav-btn"
          onClick={onNext}
          disabled={currentSlide === totalSlides}
          title="Next Slide (→, Space or PageDown)"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Right: Theme & Fullscreen */}
      <div className="nav-controls">
        <button
          className="nav-btn"
          onClick={onToggleTheme}
          title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode (T)`}
          aria-label="Toggle Color Theme"
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button
          className="nav-btn"
          onClick={onToggleFullscreen}
          title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
          aria-label="Toggle Fullscreen"
        >
          {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
      </div>
    </header>
  );
};
