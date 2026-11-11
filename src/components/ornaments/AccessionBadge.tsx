import React from 'react';

export interface AccessionBadgeProps {
  accessionNumber: string;
  collection?: string;
  date?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AccessionBadge: Standardized museum cataloguing badge.
 * Formatted with small-caps tracking and warm antique gold hairline accents.
 */
export const AccessionBadge: React.FC<AccessionBadgeProps> = ({
  accessionNumber,
  collection,
  date,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`accession-badge ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 'var(--space-2)',
        padding: '3px 10px',
        backgroundColor: 'var(--color-bg-elevated)',
        border: '1px solid var(--color-border-hairline)',
        borderLeft: '2px solid var(--color-accent-gold)',
        borderRadius: 'var(--radius-subtle)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-meta)',
        letterSpacing: 'var(--tracking-wide)',
        color: 'var(--color-text-secondary)',
        ...style,
      }}
    >
      <span
        style={{
          color: 'var(--color-accent-gold)',
          fontWeight: 600,
        }}
      >
        {accessionNumber}
      </span>

      {collection && (
        <>
          <span style={{ color: 'var(--color-border-medium)', userSelect: 'none' }}>/</span>
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontSize: '0.6875rem',
            }}
          >
            {collection}
          </span>
        </>
      )}

      {date && (
        <>
          <span style={{ color: 'var(--color-border-medium)', userSelect: 'none' }}>/</span>
          <span style={{ color: 'var(--color-text-muted)' }}>{date}</span>
        </>
      )}
    </div>
  );
};
