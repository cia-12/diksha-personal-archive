import React from 'react';

interface CornerFlourishProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Classical neoclassical corner bracket for specimen frames,
 * bookplates, and architectural case study vitrines.
 */
export const CornerFlourish: React.FC<CornerFlourishProps> = ({
  position = 'top-left',
  size = 20,
  color = 'var(--color-border-strong)',
  className = '',
  style = {},
}) => {
  // Rotate according to position
  let transform: string;
  switch (position) {
    case 'top-right':
      transform = 'rotate(90deg)';
      break;
    case 'bottom-right':
      transform = 'rotate(180deg)';
      break;
    case 'bottom-left':
      transform = 'rotate(270deg)';
      break;
    case 'top-left':
    default:
      transform = 'rotate(0deg)';
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      className={`corner-flourish ${position} ${className}`}
      style={{
        display: 'block',
        transform,
        transformOrigin: 'center',
        ...style,
      }}
      aria-hidden="true"
    >
      {/* Outer L-bracket */}
      <path d="M2 14V2H14" />
      {/* Inner parallel hairline */}
      <path d="M5 11V5H11" strokeWidth="0.8" strokeOpacity="0.7" />
      {/* Delicate corner rosetta dot */}
      <circle cx="8" cy="8" r="1" fill={color} stroke="none" />
      <path d="M2 2L6 6" strokeWidth="0.8" />
    </svg>
  );
};

interface CartoucheFrameProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  cornerSize?: number;
}

/**
 * CartoucheFrame: Wraps content in an antique framed border
 * with delicate neoclassical corner flourishes.
 */
export const CartoucheFrame: React.FC<CartoucheFrameProps> = ({
  children,
  className = '',
  style = {},
  cornerSize = 18,
}) => {
  return (
    <div
      className={`cartouche-frame ${className}`}
      style={{
        position: 'relative',
        padding: 'var(--space-6)',
        backgroundColor: 'var(--color-bg-surface)',
        border: '1px solid var(--color-border-hairline)',
        ...style,
      }}
    >
      {/* Four Neoclassical Corner Flourishes */}
      <div style={{ position: 'absolute', top: 4, left: 4 }}>
        <CornerFlourish position="top-left" size={cornerSize} />
      </div>
      <div style={{ position: 'absolute', top: 4, right: 4 }}>
        <CornerFlourish position="top-right" size={cornerSize} />
      </div>
      <div style={{ position: 'absolute', bottom: 4, left: 4 }}>
        <CornerFlourish position="bottom-left" size={cornerSize} />
      </div>
      <div style={{ position: 'absolute', bottom: 4, right: 4 }}>
        <CornerFlourish position="bottom-right" size={cornerSize} />
      </div>

      {children}
    </div>
  );
};
