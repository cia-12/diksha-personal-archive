import React from 'react';

export type FleuronType = 'leaf' | 'ivy' | 'asterism' | 'rosette' | 'diamond';

interface FleuronProps {
  name?: FleuronType;
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Scalable SVG vector fleurons & printers' marks.
 * Inspired by 18th-century European typographers (Fournier, Caslon, Bodoni).
 */
export const Fleuron: React.FC<FleuronProps> = ({
  name = 'leaf',
  size = 18,
  color = 'currentColor',
  className = '',
  style = {},
}) => {
  switch (name) {
    case 'leaf':
      // Historical Aldus/Caslon printer's leaf (❧)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className={`fleuron fleuron-leaf ${className}`}
          style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
          aria-hidden="true"
        >
          <path d="M19.5 4.5c-3.2-.8-7.5.3-10.8 3.6-2.5 2.5-3.9 5.8-4.2 9.2-.1 1.2.9 2.2 2.1 2.2 2.8 0 5.6-1 7.7-3.1 3.5-3.5 4.6-8.2 5.2-11.9zM7.2 16.8c.4-2.1 1.4-4.2 3-5.8 2.2-2.2 5.2-3.2 8-3-1.1 3.3-2.9 6.2-5.5 8.1-1.6 1.2-3.6 1.7-5.5 1.7.1-.3 0-.7 0-1z" />
          <path d="M4.5 19.5c1.2-1.2 2.4-1.9 3.8-2.3-.2-.5-.5-1-.9-1.4-1.2.4-2.1 1.3-2.9 2.5v1.2z" />
        </svg>
      );

    case 'ivy':
      // Classical heart-shaped hedged ivy leaf (❦)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className={`fleuron fleuron-ivy ${className}`}
          style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
          aria-hidden="true"
        >
          <path d="M12 3.5C8.5 7.5 4 10 4 14.5 4 18 6.8 20.5 10 20.5c1.2 0 2.4-.4 3.3-1.2-.2 1.2-.8 2.5-1.8 3.5 1.8-.4 3.3-1.5 4.2-3.1.8-1.5 1.1-3.2 1-4.9-.3-3.6-2.5-6.8-4.7-11.3zM10 18.5c-2 0-3.5-1.6-3.5-3.8 0-2.8 2.8-4.8 5.5-7.8 1.4 2.8 2.8 5.2 2.8 7.3 0 2.4-1.8 4.3-4.8 4.3z" />
        </svg>
      );

    case 'asterism':
      // Classical typographic asterism (⁂ - three asterisks in a triangle)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className={`fleuron fleuron-asterism ${className}`}
          style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
          aria-hidden="true"
        >
          <g>
            {/* Top Star */}
            <circle cx="12" cy="6" r="2.2" />
            <line x1="12" y1="2" x2="12" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="8" y1="6" x2="16" y2="6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="9" y1="3" x2="15" y2="9" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
            <line x1="9" y1="9" x2="15" y2="3" stroke={color} strokeWidth="1.2" strokeLinecap="round" />

            {/* Bottom-Left Star */}
            <circle cx="6.5" cy="16.5" r="2.2" />
            <line x1="6.5" y1="12.5" x2="6.5" y2="20.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2.5" y1="16.5" x2="10.5" y2="16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

            {/* Bottom-Right Star */}
            <circle cx="17.5" cy="16.5" r="2.2" />
            <line x1="17.5" y1="12.5" x2="17.5" y2="20.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="13.5" y1="16.5" x2="21.5" y2="16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        </svg>
      );

    case 'rosette':
      // Eight-petaled classical rosetta printer's mark
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
          xmlns="http://www.w3.org/2000/svg"
          className={`fleuron fleuron-rosette ${className}`}
          style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="2" fill={color} />
          <path d="M12 4c1 2.5 1 4 0 6-1-2-1-3.5 0-6z" />
          <path d="M12 20c1-2.5 1-4 0-6-1 2-1 3.5 0 6z" />
          <path d="M4 12c2.5-1 4-1 6 0-2 1-3.5 1-6 0z" />
          <path d="M20 12c-2.5-1-4-1-6 0 2 1 3.5 1 6 0z" />
          <path d="M6.3 6.3c2.5 0 3.5 1.5 4.2 3.2-1.7-.7-3.2-.7-4.2-3.2z" />
          <path d="M17.7 17.7c-2.5 0-3.5-1.5-4.2-3.2 1.7.7 3.2.7 4.2 3.2z" />
          <path d="M17.7 6.3c0 2.5-1.5 3.5-3.2 4.2.7-1.7.7-3.2 3.2-4.2z" />
          <path d="M6.3 17.7c0-2.5 1.5-3.5 3.2-4.2-.7 1.7-.7 3.2-3.2 4.2z" />
        </svg>
      );

    case 'diamond':
    default:
      // Foliate diamond printer's mark (❖)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
          className={`fleuron fleuron-diamond ${className}`}
          style={{ display: 'inline-block', verticalAlign: 'middle', ...style }}
          aria-hidden="true"
        >
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
          <circle cx="12" cy="12" r="2.5" fill="var(--color-bg-base, #faf7f0)" />
        </svg>
      );
  }
};
