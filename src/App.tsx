import React, { useState, useEffect, useCallback, useRef } from 'react';
import { slides } from './data/slidesData';
import { Navigation } from './components/Navigation';
import { SlideDrawer } from './components/SlideDrawer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { ShortcutsModal } from './components/ShortcutsModal';
import { LightboxModal } from './components/LightboxModal';
import { SlideRenderer } from './components/SlideRenderer';

export const App: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(1);
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; caption?: string } | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const totalSlides = slides.length;
  const currentSlide = slides[currentSlideIndex - 1];
  const progressPercent = Math.round((currentSlideIndex / totalSlides) * 100);

  // Sync theme to DOM
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const goToNextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides) {
      setSlideDirection('right');
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    if (currentSlideIndex > 1) {
      setSlideDirection('left');
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  const goToSlide = useCallback((targetIndex: number) => {
    if (targetIndex >= 1 && targetIndex <= totalSlides) {
      setSlideDirection(targetIndex > currentSlideIndex ? 'right' : 'left');
      setCurrentSlideIndex(targetIndex);
    }
  }, [currentSlideIndex, totalSlides]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore when typing inside any input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        goToNextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(totalSlides);
      } else if (e.key === 'Escape') {
        if (lightboxData) {
          setLightboxData(null);
        } else if (isShortcutsOpen) {
          setIsShortcutsOpen(false);
        } else if (isNotesOpen) {
          setIsNotesOpen(false);
        } else {
          setIsDrawerOpen((prev) => !prev);
        }
      } else if (e.key === 'g' || e.key === 'G') {
        setIsDrawerOpen((prev) => !prev);
      } else if (e.key === 'n' || e.key === 'N') {
        setIsNotesOpen((prev) => !prev);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      } else if (e.key === '?') {
        setIsShortcutsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    goToNextSlide, 
    goToPrevSlide, 
    goToSlide, 
    totalSlides, 
    lightboxData, 
    isShortcutsOpen, 
    isNotesOpen, 
    toggleFullscreen, 
    toggleTheme
  ]);

  // Touch swipe support
  const touchStartX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNextSlide();
      else goToPrevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <main 
      className="presentation-viewport"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-live="polite"
    >
      {/* Slide Container */}
      <SlideRenderer
        key={currentSlide.id}
        slide={currentSlide}
        direction={slideDirection}
        onOpenLightbox={(src, caption) => setLightboxData({ src, caption })}
      />

      {/* Persistent Navigation Controls */}
      <Navigation
        currentSlide={currentSlideIndex}
        totalSlides={totalSlides}
        progressPercent={progressPercent}
        onPrev={goToPrevSlide}
        onNext={goToNextSlide}
        onToggleDrawer={() => setIsDrawerOpen(true)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        onToggleShortcuts={() => setIsShortcutsOpen(true)}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
        theme={theme}
        onToggleTheme={toggleTheme}
        hasNotesOpen={isNotesOpen}
      />

      {/* Modals & Overlays */}
      <SlideDrawer
        slides={slides}
        currentSlide={currentSlideIndex}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelectSlide={goToSlide}
      />

      <SpeakerNotesModal
        slide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
      />

      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <LightboxModal
        imageSrc={lightboxData?.src || null}
        caption={lightboxData?.caption}
        onClose={() => setLightboxData(null)}
      />
    </main>
  );
};
