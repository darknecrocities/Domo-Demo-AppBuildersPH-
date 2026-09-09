import React from 'react';
import { X, Keyboard } from 'lucide-react';

interface ShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShortcutsModal: React.FC<ShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    { key: '→ / Space', desc: 'Next slide' },
    { key: '←', desc: 'Previous slide' },
    { key: 'Esc / G', desc: 'Toggle Slide Overview Drawer' },
    { key: 'N', desc: 'Toggle Presenter Speaker Notes' },
    { key: 'F', desc: 'Toggle Fullscreen Mode' },
    { key: 'T', desc: 'Toggle Dark / Light Monochrome Theme' },
    { key: 'Home / End', desc: 'First / Last slide' }
  ];

  return (
    <div className="drawer-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label="Keyboard shortcuts">
      <div className="drawer-panel" style={{ maxWidth: '480px' }} onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Keyboard size={18} />
            <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', fontWeight: 600 }}>
              Keyboard Navigation
            </h3>
          </div>
          <button className="nav-btn" onClick={onClose} aria-label="Close shortcuts">
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {shortcuts.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{s.desc}</span>
              <kbd style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '12px', 
                background: 'var(--bg-card)', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)'
              }}>
                {s.key}
              </kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
