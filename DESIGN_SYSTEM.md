# DIKSHA — THE PERSONAL ARCHIVE
## Design System & Visual Specification (Revised)

---

### 1. Aesthetic Philosophy & Visual Identity

The design system translates the visual culture of **antique European museum catalogues**, **neoclassical architecture**, **historical literary quarterlies**, and **18th-century bookbinding** into a refined editorial digital environment.

#### Core Tenets
1. **Warmth & Tactility**: Evokes rag paper, aged parchment, leather bindings, and gall-nut ink. Cold blues, saturated neon accents, and sterile corporate dark modes are strictly avoided.
2. **Neoclassical Balance**: Grounded in symmetry, harmonic proportions, Oxford rules, and architectural spacing.
3. **Large Literary Serif Typography**: Headings and titles celebrate high-contrast, graceful serif letterforms, supported by legible, humane book typefaces for long reading sessions.
4. **Section-Specific Editorial Personalities**: While sharing a unified typographic and chromatic foundation, each curatorial collection expresses its own unique character (e.g., The Cinema feels cinematic, The Library feels bookish, The Atelier feels architectural).

---

### 2. Chromatic System: "Ivory, Parchment & Walnut"

The color architecture is built entirely upon warm, organic historical materials:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CORE CHROMATIC SPECTRUM                         │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ Warm Ivory         │ #FAF7F0            │ Primary daylight canvas      │
│ Antique Parchment  │ #F3EDE2            │ Elevated surfaces, card base │
│ Warm Linen         │ #E8DFC $\rightarrow$ #E5DCD0 │ Borders, dividers, subtle mats│
│ Deep Walnut Brown  │ #2C221E            │ Primary text & headings      │
│ Muted Walnut Ink   │ #574840            │ Secondary text & summaries   │
│ Aged Umber         │ #87786E            │ Metadata, dates, accession   │
│ Muted Antique Gold │ #B89758            │ Refined accents, seals, caps │
│ Venetian Madder    │ #883B37            │ Critical marks, highlights   │
└────────────────────┴────────────────────┴──────────────────────────────┘
```

#### 2.1 Daylight Reading Palette: "Antique Parchment & Deep Walnut"
The primary reading experience, styled after rare book archives and museum reading rooms:

| Token | Hex Value | Natural Reference | Role / Application |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `#FAF7F0` | Warm Ivory Paper | Page background canvas |
| `--bg-surface` | `#F3EDE2` | Antique Parchment | Specimen cards, pullout boxes |
| `--bg-elevated` | `#EAE2D5` | Pressed Vellum | Active tabs, hover states, badges |
| `--text-primary` | `#2C221E` | Deep Walnut Brown | Main headlines, body prose, titles |
| `--text-secondary` | `#574840` | Muted Walnut Ink | Secondary summaries, subheadings |
| `--text-muted` | `#87786E` | Aged Umber / Dust | Dates, accession numbers, tags |
| `--border-hairline`| `#E5DCD0` | Ruled Hairline | Single separation lines, grids |
| `--border-medium` | `#CBBFB0` | Bookbinder Board | Oxford double rules, card borders |
| `--accent-gold` | `#B89758` | Muted Antique Gold | Emblems, drop caps, active lines |
| `--accent-madder` | `#883B37` | Venetian Madder Red | Curatorial highlights, rare accents |

> [!NOTE]
> *Color Correction*: All prominent Sèvres blue tones have been removed in favor of warm, bibliophilic earth pigments (Deep Walnut and Antique Gold) to prevent any cold or corporate feel.

#### 2.2 Evening / Candlelit Reading Palette: "Smoked Walnut & Aged Gold"
A warm, atmospheric evening mode reminiscent of a private library lit by lamplight:

| Token | Hex Value | Natural Reference | Role / Application |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `#181412` | Smoked Walnut Wood | Dark canvas (warm, never cold black) |
| `--bg-surface` | `#221C18` | Dark Calfskin | Cards, drawers, elevated surfaces |
| `--bg-elevated` | `#2D2520` | Aged Leather Folio | Active items, search modal |
| `--text-primary` | `#EDE6DA` | Warm Bone Parchment | High-contrast reading typography |
| `--text-secondary` | `#B8AD9E` | Soft Vellum Dust | Secondary summaries, captions |
| `--text-muted` | `#807567` | Aged Ash | Dates, inventory codes, colophon |
| `--border-hairline`| `#352C25` | Dark Thread Rule | Hairline borders, dividers |
| `--border-medium` | `#4D4036` | Embossed Leather | Double borders, outer frames |
| `--accent-gold` | `#C8A86B` | Burnished Antique Brass| Drop caps, active indicators |
| `--accent-madder` | `#A8504B` | Spiced Terracotta | Curatorial marks, seals |

---

### 3. Typography Architecture

Typography is the heart of the archive's identity. It uses large literary serifs for display, humanistic book typefaces for reading, and letterspaced small caps for museum classification.

#### 3.1 Font Families

* **Primary Display & Titling**:
  * **Cormorant Garamond** (Google Fonts; classical Garamond with high stroke contrast, elegant Roman capitals, and graceful, slanted italics) or **Cinzel** (for Roman stone-carved catalog headings).
* **Body & Long-Form Reading**:
  * **Newsreader** (Google Fonts; crafted specifically for continuous reading with optical size axes) or **EB Garamond**.
* **Archival Accession & Taxonomy**:
  * **Inter** (set in small caps with wide tracking: `letter-spacing: 0.1em`, clean and legible at 11–13px) or **Cinzel Decorative**.
* **Technical Code & Scientific Specimens**:
  * **Courier Prime** or **JetBrains Mono** (scholarly typewriter/print aesthetic for code blocks and equations).

#### 3.2 Fluid Typographic Scale

```css
/* Responsive Typography Tokens */
--font-title-hero:    clamp(2.75rem, 5vw + 1rem, 4.5rem);  /* The Grand Foyer */
--font-title-section: clamp(2.1rem, 3.5vw + 0.5rem, 3.2rem);/* Collection Titles */
--font-title-card:    clamp(1.35rem, 1.5vw + 0.3rem, 1.75rem);/* Monograph & Book Titles */
--font-title-sub:     clamp(1.1rem, 1vw + 0.2rem, 1.35rem);  /* Subtitles & Headers */

--font-body-lead:     1.25rem;   /* Lead introductions (20px) */
--font-body-main:     1.0625rem; /* Continuous reading prose (17px, line-height: 1.75) */
--font-body-caption:  0.9375rem; /* Marginalia, plate notes (15px) */
--font-meta:          0.75rem;   /* Accession codes, timestamps (12px, tracked) */
```

---

### 4. Distinct Personalities by Curatorial Wing

While every page shares the same palette and typography, each section expresses a distinct editorial layout tailored to its subject matter:

```
┌──────────────────┬─────────────────────────────┬─────────────────────────────────┐
│ Collection       │ Editorial Personality       │ Specific Visual & Layout Traits │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ The Atelier      │ Technical & Structured      │ Architectural grid, schematic   │
│ (Engineering)    │                             │ borders, tabular spec sheets,   │
│                  │                             │ monospace code blocks, diagrams │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ The Library      │ Literary & Bookish          │ Shelf classifications, ex-libris│
│ (Books & Reviews)│                             │ labels, Roman ratings (I–V),    │
│                  │                             │ marginalia quotes, cover plates │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ The Cinema       │ Cinematic & Atmospheric     │ Archival contact sheet layout,  │
│ (Films & Series) │                             │ 35mm frame ratio mats, director │
│                  │                             │ title cards, aspect ratio badges│
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ The Writing Room │ Intimate & Typographic      │ Focused single-column reader,   │
│ (Creative Prose) │                             │ illuminated drop caps, indent   │
│                  │                             │ paragraphs, pull quotes         │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ Fragments        │ Aphoristic & Slip-Box       │ Index-card catalog grid, author │
│ (Commonplace)    │                             │ tags, cross-referenced epigrams │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ Curiosities      │ Eclectic & Exploratory      │ Vitrine showcase, varied plate  │
│ (Interests & Art)│                             │ proportions, museum specimen    │
│                  │                             │ tags, antique engravings        │
├──────────────────┼─────────────────────────────┼─────────────────────────────────┤
│ Research         │ Formal & Academic           │ Two-column / wide margin,       │
│ (Research Notes) │                             │ abstract box, numbered equations│
│                  │                             │ (LaTeX), formal bibliographies  │
└──────────────────┴─────────────────────────────┴─────────────────────────────────┘
```

---

### 5. Borders, Ornaments & Architectural Details

* **The Oxford Rule**:
  A signature visual motif throughout the site—a primary hairline rule paired with a secondary parallel hairline:
  ```css
  /* Oxford Double Rule */
  border-top: 1px solid var(--border-medium);
  border-bottom: 1px solid var(--border-hairline);
  padding: 3px 0;
  ```
* **Printers’ Marks & Fleurons**:
  Classical typographic glyphs used sparingly as section dividers:
  * `❦` (Ivy leaf)
  * `❧` (Fleuron leaf)
  * `⁂` (Asterism, for transitions between essay segments)
* **Museum Accession Stamp**:
  A standardized header stamp for every record:
  ```
  ┌────────────────────────────────────────────────────────┐
  │  ACCESSION NO. 2026.ENG.001       COL. I : THE ATELIER │
  │  ACQUISITION DATE: NOVEMBER 2026   CLASSIFICATION: SYS │
  └────────────────────────────────────────────────────────┘
  ```
* **Illuminated Drop Caps**:
  Opening paragraphs in The Writing Room and long monographs feature a 3-line drop cap in `Cormorant Garamond` tinted with `--accent-gold`.

---

### 6. Restrained Motion & Transitions

* **Philosophy**: Motion should feel like turning pages in a well-bound book—calm, imperceptible, and organic.
* **Transitions**:
  * Page views crossfade gently with a subtle vertical settling effect (`250ms ease-out`).
  * Links feature an animated center-out underline transition (`transform: scaleX`).
  * Cards subtly lift on hover (`translateY(-2px)`) with a warm, soft shadow expansion.
* **No Jarring Animations**: No bouncy physics, 3D rotations, or distracting parallax effects.
