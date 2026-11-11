import React from 'react';
import { Fleuron, type FleuronType } from './Fleuron';

export interface OxfordRuleProps {
  variant?: 'double' | 'single' | 'ornament' | 'title';
  ornament?: FleuronType;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * OxfordRule: Classical double/single hairline divider inspired by
 * 18th-century European typography and academic museum registers.
 */
export const OxfordRule: React.FC<OxfordRuleProps> = ({
  variant = 'ornament',
  ornament = 'leaf',
  title,
  className = '',
  style = {},
}) => {
  if (variant === 'single') {
    return (
      <div
        className={`oxford-rule-single ${className}`}
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'var(--color-border-hairline)',
          margin: 'var(--space-6) 0',
          ...style,
        }}
        role="separator"
      />
    );
  }

  if (variant === 'double') {
    return (
      <div
        className={`oxford-rule-double ${className}`}
        style={{
          width: '100%',
          padding: '2px 0',
          borderTop: '1px solid var(--color-border-medium)',
          borderBottom: '1px solid var(--color-border-hairline)',
          margin: 'var(--space-6) 0',
          ...style,
        }}
        role="separator"
      />
    );
  }

  // Variant: 'ornament' or 'title' with bilateral hairline wings
  return (
    <div
      className={`oxford-rule-ornamental ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 'var(--space-8) 0',
        ...style,
      }}
      role="separator"
    >
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to right, transparent, var(--color-border-medium))',
        }}
      />
      <div
        style={{
          padding: '0 var(--space-4)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          color: 'var(--color-accent-gold)',
        }}
      >
        {variant === 'title' && title ? (
          <span
            style={{
              fontFamily: 'var(--font-ui)',
              fontSize: 'var(--text-meta)',
              letterSpacing: 'var(--tracking-caps)',
              textTransform: 'uppercase',
              color: 'var(--color-text-muted)',
              fontWeight: 500,
            }}
          >
            {title}
          </span>
        ) : (
          <Fleuron name={ornament} size={16} color="var(--color-accent-gold)" />
        )}
      </div>
      <div
        style={{
          flex: 1,
          height: '1px',
          background: 'linear-gradient(to left, transparent, var(--color-border-medium))',
        }}
      />
    </div>
  );
};
