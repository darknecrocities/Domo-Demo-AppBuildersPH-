import React, { useRef, useState, useEffect, useCallback } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  maxTilt?: number; // Maximum tilt angle in degrees (default 18)
  perspective?: number; // Perspective distance in px (default 1000)
  scale?: number; // Scale on hover (default 1.03)
  glare?: boolean; // Whether to show specular reflection
  maxGlare?: number; // Maximum glare opacity (default 0.45)
  onClick?: () => void;
  disabled?: boolean;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  style = {},
  maxTilt = 18,
  perspective = 1000,
  scale = 1.03,
  glare = true,
  maxGlare = 0.45,
  onClick,
  disabled = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<{
    rotateX: number;
    rotateY: number;
    scaleVal: number;
    glareX: number;
    glareY: number;
    glareOpacity: number;
    isHovered: boolean;
  }>({
    rotateX: 0,
    rotateY: 0,
    scaleVal: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovered: false,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      // Normalized coordinates from -0.5 to 0.5
      const xPercent = clientX / rect.width - 0.5;
      const yPercent = clientY / rect.height - 0.5;

      const rotateX = -(yPercent * maxTilt * 2);
      const rotateY = xPercent * maxTilt * 2;

      const glareX = (clientX / rect.width) * 100;
      const glareY = (clientY / rect.height) * 100;

      setTiltStyle({
        rotateX,
        rotateY,
        scaleVal: scale,
        glareX,
        glareY,
        glareOpacity: maxGlare,
        isHovered: true,
      });
    },
    [disabled, maxTilt, scale, maxGlare]
  );

  const handleMouseEnter = () => {
    if (disabled) return;
    setTiltStyle((prev) => ({ ...prev, isHovered: true, scaleVal: scale }));
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setTiltStyle({
      rotateX: 0,
      rotateY: 0,
      scaleVal: 1,
      glareX: 50,
      glareY: 50,
      glareOpacity: 0,
      isHovered: false,
    });
  };

  // Device orientation (gyro) physics for mobile/tablet
  useEffect(() => {
    if (disabled) return;
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma === null || e.beta === null) return;
      // gamma: left-to-right tilt in [-90, 90]
      // beta: front-to-back tilt in [-180, 180]
      const clampedGamma = Math.max(-30, Math.min(30, e.gamma));
      const clampedBeta = Math.max(-30, Math.min(30, e.beta - 45)); // assume holding at 45deg

      const rotateY = (clampedGamma / 30) * (maxTilt * 0.75);
      const rotateX = -(clampedBeta / 30) * (maxTilt * 0.75);

      setTiltStyle((prev) => ({
        ...prev,
        rotateX,
        rotateY,
        glareX: 50 + (clampedGamma / 30) * 35,
        glareY: 50 + (clampedBeta / 30) * 35,
        glareOpacity: maxGlare * 0.5,
      }));
    };

    if (window.DeviceOrientationEvent && typeof window.DeviceOrientationEvent !== 'undefined') {
      window.addEventListener('deviceorientation', handleOrientation, true);
      return () => window.removeEventListener('deviceorientation', handleOrientation, true);
    }
  }, [disabled, maxTilt, maxGlare]);

  const transformString = disabled
    ? 'none'
    : `perspective(${perspective}px) rotateX(${tiltStyle.rotateX.toFixed(2)}deg) rotateY(${tiltStyle.rotateY.toFixed(2)}deg) scale3d(${tiltStyle.scaleVal}, ${tiltStyle.scaleVal}, ${tiltStyle.scaleVal})`;

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div
        className="tilt-card-inner"
        style={{
          transform: transformString,
          transition: tiltStyle.isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        {children}

        {glare && (
          <div
            className="tilt-card-glare"
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: 'inherit',
              pointerEvents: 'none',
              zIndex: 30,
              opacity: tiltStyle.glareOpacity,
              background: `radial-gradient(circle at ${tiltStyle.glareX}% ${tiltStyle.glareY}%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.15) 30%, rgba(255, 255, 255, 0) 70%)`,
              transition: tiltStyle.isHovered ? 'opacity 0.15s ease-out' : 'opacity 0.4s ease-out',
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </div>
    </div>
  );
};
