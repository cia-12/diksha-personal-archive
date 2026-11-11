import React from 'react';

export interface DropCapProps {
  letter: string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

/**
 * DropCap: Classical illuminated initial letter for literary paragraphs.
 * Typeset in Cormorant Garamond with precise float alignment and warm gold tinting.
 */
export const DropCap: React.FC<DropCapProps> = ({
  letter,
  color = 'var(--color-accent-gold)',
  className = '',
  style = {},
  children,
}) => {
  return (
    <div
      className={`drop-cap-container ${className}`}
      style={{
        position: 'relative',
        ...style,
      }}
    >
      <span
        className="drop-cap-initial"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3.75rem',
          lineHeight: '0.85',
          float: 'left',
          paddingTop: '4px',
          paddingRight: '12px',
          paddingBottom: '2px',
          color,
          fontWeight: 600,
          userSelect: 'none',
        }}
        aria-hidden="true"
      >
        {letter}
      </span>
      {children}
    </div>
  );
};
