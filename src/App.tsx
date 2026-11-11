import React from 'react';
import './App.css';
import {
  Fleuron,
  OxfordRule,
  CartoucheFrame,
  AccessionBadge,
  DropCap,
} from './components/ornaments';

export const App: React.FC = () => {
  return (
    <div className="specimen-sheet container">
      {/* ====================================================================
       * MASTHEAD BANNER (STAGE 1 FOUNDATIONS SPECIMEN)
       * ==================================================================== */}
      <header className="specimen-header">
        <div style={{ marginBottom: 'var(--space-2)' }}>
          <AccessionBadge
            accessionNumber="SPECIMEN-STAGE-01"
            collection="FOUNDATIONS & DESIGN TOKENS"
            date="DAYLIGHT THEME"
          />
        </div>

        <h1 className="font-hero" style={{ marginTop: 'var(--space-4)' }}>
          DIKSHA
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'var(--text-title-md)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-4)',
          }}
        >
          The Personal Archive — Design System & Foundations Specimen
        </p>

        <p className="small-caps" style={{ color: 'var(--color-text-muted)' }}>
          [STAGE 1 SPECIMEN SHEET // PLACEHOLDER TEST DATA]
        </p>

        <OxfordRule variant="ornament" ornament="leaf" />
      </header>

      {/* ====================================================================
       * 1. CHROMATIC PALETTE (DAYLIGHT THEME ONLY)
       * ==================================================================== */}
      <section className="specimen-section">
        <div className="specimen-label">
          <Fleuron name="diamond" size={12} color="var(--color-accent-gold)" />
          <span>I. Chromatic Palette (Daylight Architecture)</span>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-4)' }}>
          Warm, organic materials evoking historical library reading rooms: Warm Ivory, Antique Parchment,
          Deep Walnut Brown, and Muted Antique Gold. All cold corporate blues have been eliminated.
        </p>

        <div className="swatch-grid">
          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-bg-base)' }} />
            <span className="swatch-name">Warm Ivory</span>
            <span className="swatch-code">#FAF7F0 · Base</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-bg-surface)' }} />
            <span className="swatch-name">Antique Parchment</span>
            <span className="swatch-code">#F3EDE2 · Surface</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-bg-elevated)' }} />
            <span className="swatch-name">Pressed Vellum</span>
            <span className="swatch-code">#EAE2D5 · Elevated</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-text-primary)' }} />
            <span className="swatch-name" style={{ color: 'var(--color-text-primary)' }}>
              Deep Walnut
            </span>
            <span className="swatch-code">#2C221E · Primary Ink</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-text-secondary)' }} />
            <span className="swatch-name">Muted Walnut</span>
            <span className="swatch-code">#574840 · Secondary Ink</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-accent-gold)' }} />
            <span className="swatch-name">Muted Gold</span>
            <span className="swatch-code">#B89758 · Accent</span>
          </div>

          <div className="swatch-card">
            <div className="swatch-chip" style={{ backgroundColor: 'var(--color-accent-madder)' }} />
            <span className="swatch-name">Venetian Madder</span>
            <span className="swatch-code">#883B37 · Seal Highlight</span>
          </div>
        </div>
      </section>

      <OxfordRule variant="double" />

      {/* ====================================================================
       * 2. TYPOGRAPHIC MATRIX
       * ==================================================================== */}
      <section className="specimen-section">
        <div className="specimen-label">
          <Fleuron name="diamond" size={12} color="var(--color-accent-gold)" />
          <span>II. Typographic Matrix</span>
        </div>

        <div className="container-prose">
          {/* Display Headings (Cormorant Garamond) */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <span className="small-caps" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
              Display Headings — Cormorant Garamond
            </span>
            <h1 style={{ marginBottom: 'var(--space-2)' }}>
              Title H1: Monumental Proportions & Classical Symmetry
            </h1>
            <h2 style={{ marginBottom: 'var(--space-2)' }}>
              Title H2: The Architecture of Enduring Thought
            </h2>
            <h3 style={{ marginBottom: 'var(--space-2)' }}>
              Title H3: Inquiries into Systems, Literature, and Cinema
            </h3>
            <h4 style={{ marginBottom: 'var(--space-4)' }}>
              Title H4: Section Index & Curatorial Classification
            </h4>
          </div>

          {/* Long-form Reading Prose (Newsreader) */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <span className="small-caps" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
              Reading Prose — Newsreader
            </span>

            <p className="lead-paragraph">
              [Placeholder Specimen Lead]: A personal archive is not an ephemeral portfolio. It is an
              intellectual sanctuary built to preserve years of study, engineering practice, and creative
              reflection in an enduring typographic form.
            </p>

            <DropCap letter="T">
              <p>
                [Placeholder Specimen Text]: The typography of classical Europe balanced mathematical
                precision with organic grace. Letters were cut with physical punches into metal, ink was
                pressed into rag vellum, and margins were tuned to the proportions of the Golden Ratio.
                By adopting these principles in modern web design, we resist the disposable visual noise of
                contemporary dashboards in favor of contemplation, clarity, and calm reading.
              </p>
            </DropCap>

            {/* Editorial Pullquote */}
            <blockquote className="editorial-quote">
              <p>
                “Books and archives are the memory of humanity; to typeset them with care is an act of
                reverence.”
              </p>
              <cite>[Placeholder Citation / Specimen Quote]</cite>
            </blockquote>
          </div>

          {/* Technical Metadata & Code (JetBrains Mono & Inter) */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <span className="small-caps" style={{ display: 'block', marginBottom: 'var(--space-2)' }}>
              Technical Metadata & Code — JetBrains Mono & Inter
            </span>

            <p>
              Technical specimens, accession stamps, and code blocks are typeset with{' '}
              <code>JetBrains Mono</code> with slashed zeroes and proportional tabular digits:
            </p>

            <pre>
              <code>{`// [Placeholder Specimen Code]: Distributed State Replication Schema
interface ArchivalEntry {
  accessionNumber: "CAT.2026.ENG.001";
  collection: "The Atelier";
  verified: true;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <OxfordRule variant="double" />

      {/* ====================================================================
       * 3. REUSABLE SVG ORNAMENTS & FRAMES
       * ==================================================================== */}
      <section className="specimen-section">
        <div className="specimen-label">
          <Fleuron name="diamond" size={12} color="var(--color-accent-gold)" />
          <span>III. Reusable Neoclassical Ornaments & Frames</span>
        </div>

        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-6)' }}>
          Scalable inline SVG vectors inspired by 18th-century European printer fleurons and museum
          cataloguing borders.
        </p>

        {/* Fleurons Display Grid */}
        <div className="ornament-grid" style={{ marginBottom: 'var(--space-8)' }}>
          <div className="ornament-cell">
            <Fleuron name="leaf" size={26} color="var(--color-accent-gold)" />
            <span>Leaf (❧)</span>
          </div>

          <div className="ornament-cell">
            <Fleuron name="ivy" size={26} color="var(--color-accent-gold)" />
            <span>Ivy (❦)</span>
          </div>

          <div className="ornament-cell">
            <Fleuron name="asterism" size={26} color="var(--color-accent-gold)" />
            <span>Asterism (⁂)</span>
          </div>

          <div className="ornament-cell">
            <Fleuron name="rosette" size={26} color="var(--color-accent-gold)" />
            <span>Rosette (✦)</span>
          </div>

          <div className="ornament-cell">
            <Fleuron name="diamond" size={26} color="var(--color-accent-gold)" />
            <span>Diamond (❖)</span>
          </div>
        </div>

        {/* Cartouche Frame Specimen */}
        <div style={{ marginTop: 'var(--space-8)' }}>
          <span className="small-caps" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
            Specimen Cartouche Frame with Neoclassical Corner Brackets
          </span>

          <CartoucheFrame>
            <div style={{ textAlign: 'center', padding: 'var(--space-4) 0' }}>
              <AccessionBadge
                accessionNumber="SPECIMEN-VITRINE-01"
                collection="CARTOUCHE FRAME"
                date="FOUNDATIONS"
              />
              <h3 style={{ margin: 'var(--space-3) 0 var(--space-2)' }}>
                [Placeholder Specimen Plate]
              </h3>
              <p
                style={{
                  color: 'var(--color-text-secondary)',
                  maxWidth: '520px',
                  margin: '0 auto',
                  fontSize: 'var(--text-body-caption)',
                }}
              >
                Demonstrating the framed archival border with delicate corner flourishes. Used in upcoming
                stages for museum plates, engineering diagrams, book covers, and cinema stills.
              </p>
            </div>
          </CartoucheFrame>
        </div>
      </section>

      {/* ====================================================================
       * FOOTER COLOPHON (STAGE 1 COMPLETE)
       * ==================================================================== */}
      <footer
        style={{
          textAlign: 'center',
          marginTop: 'var(--space-16)',
          paddingTop: 'var(--space-8)',
          borderTop: '1px solid var(--color-border-hairline)',
        }}
      >
        <OxfordRule variant="title" title="STAGE 1 VERIFICATION COMPLETE" />
        <p className="small-caps" style={{ marginTop: 'var(--space-4)' }}>
          DIKSHA — THE PERSONAL ARCHIVE · STAGE 1: FOUNDATIONS & DESIGN TOKENS
        </p>
      </footer>
    </div>
  );
};

export default App;
