# DIKSHA — THE PERSONAL ARCHIVE
## Technical Architecture, Content Engine & Implementation Roadmap (Revised)

---

### 1. Architectural Principles

1. **Simplicity Over Premature Complexity**: Preserve the clean React 19 + TypeScript + Vite baseline. Avoid introducing external databases, backend servers, or CMS dependencies.
2. **Intentional Content Formats**: Choose the appropriate content format based on content nature rather than introducing arbitrary formats:
   * **Structured JSON + TypeScript Schemas**: Used for data-first, catalog-driven collections (The Library, The Cinema, Fragments, and Curiosities). Enables straightforward filtering, sorting, and schema validation.
   * **Markdown with Frontmatter**: Used where long-form prose and rich typography are essential (The Writing Room, The Atelier case studies, and Research).
3. **Modular Content Engine**: Loading, parsing, and searching logic is kept completely decoupled from presentation components.
4. **Tested Search Functionality**: Search will be implemented using a dedicated client-side indexing engine and validated with automated tests rather than relying on speculative performance claims.
5. **Staged Implementation**: The website will be built systematically in discrete, testable stages, starting with the foundation, homepage, and professional archive before expanding into the remaining collections.

---

### 2. Navigation & URL Structure

The navigation uses clear, intuitive primary labels with historical cataloguing subtitles for scholarly atmosphere:

```
/ (The Grand Foyer — Archive Frontispiece)
├── /atelier (The Atelier — Engineering and Projects)
│   └── /atelier/:slug (Technical Monograph / Case Study)
├── /library (The Library — Books and Reading Reviews)
│   ├── /library?shelf=classics|philosophy|systems|all
│   └── /library/:slug (Book Review & Marginalia)
├── /cinema (The Cinema — Films and Series)
│   ├── /cinema?director=:name&medium=:type
│   └── /cinema/:slug (Film Slate & Critique)
├── /writing (The Writing Room — Creative Writing)
│   ├── /writing?category=essays|fiction|poetry
│   └── /writing/:slug (Intimate Editorial Reader)
├── /fragments (Fragments — Commonplace Book)
│   └── /fragments?tag=:keyword (Aphorisms & Quotations)
├── /curiosities (Curiosities — Personal Interests)
│   └── /curiosities/:slug (Art History, Music, Vitrine Plates)
├── /research (Research — Research Journal)
│   └── /research/:slug (Academic Notes & Mathematical Derivations)
├── /search (Archive Catalog Index & Search)
└── /colophon (Provenance, Ex-Libris & Typography)
```

#### Secondary Cataloguing Subtitles (Decorative & Contextual)
* The Atelier $\rightarrow$ *L'Atelier des Systèmes*
* The Library $\rightarrow$ *The Bibliotheca*
* The Cinema $\rightarrow$ *The Cinematheque*
* The Writing Room $\rightarrow$ *The Literary Folio*
* Fragments $\rightarrow$ *The Florilegium*
* Curiosities $\rightarrow$ *The Wunderkammer*
* Research $\rightarrow$ *The Laboratory*

---

### 3. Content Architecture & Formats

Content is organized strictly by collection under `src/content/`. Each format is chosen intentionally based on the nature of the content:

```
src/
└── content/
    ├── atelier/        # Long-form engineering case studies (.md with frontmatter)
    │   ├── distributed-log.md
    │   └── query-optimizer.md
    ├── library/        # Structured book catalogue (books.json)
    │   └── books.json
    ├── cinema/         # Structured film & TV archive (films.json)
    │   └── films.json
    ├── writing/        # Creative essays, fiction, poetry (.md with frontmatter)
    │   ├── on-solitude.md
    │   └── winter-fable.md
    ├── fragments/      # Commonplace quotes & aphorisms (fragments.json)
    │   └── fragments.json
    ├── curiosities/    # Art, music, antique specimens (curiosities.json)
    │   └── curiosities.json
    └── research/       # Formal research papers & math notes (.md with frontmatter)
        └── vector-search.md
```

#### 3.1 Content Format Justification

| Collection | Format | Justification |
| :--- | :--- | :--- |
| **The Library** | `books.json` (Structured JSON) | Catalog-first data: title, author, year, rating, shelf, quotes. Easy to filter and sort. |
| **The Cinema** | `films.json` (Structured JSON) | Specimen-first data: director, year, runtime, aspect ratio, medium, tags. |
| **Fragments** | `fragments.json` (Structured JSON) | Aphorism slips: quote, author, work, tags. Compact and quick to cross-reference. |
| **Curiosities** | `curiosities.json` (Structured JSON) | Museum vitrine items: title, medium, date, museum provenance, notes. |
| **The Atelier** | Markdown (`.md`) | In-depth engineering case studies requiring code blocks, diagrams, and subsections. |
| **The Writing Room** | Markdown (`.md`) | Literary essays and prose requiring drop caps, block quotes, and multi-paragraph layout. |
| **Research** | Markdown (`.md`) | Academic papers requiring math notation, numbered headings, and formal citations. |

#### 3.2 Data Schemas (TypeScript)

```typescript
// 1. Structured Collections (JSON)
export interface BookItem {
  id: string;
  slug: string;
  accessionNumber: string; // e.g., "LIB-2026-001"
  title: string;
  author: string;
  year: number;
  edition?: string;
  translator?: string;
  shelf: 'classics' | 'philosophy' | 'systems' | 'art-history' | 'poetry' | 'fiction';
  dateRead: string;
  rating: 1 | 2 | 3 | 4 | 5; // Rendered as Roman numerals (I - V)
  status: 'read' | 'reading' | 'referenced';
  coverImage?: string;
  summary: string;
  notableQuotes: string[];
  marginaliaNotes?: string;
}

export interface FilmItem {
  id: string;
  slug: string;
  accessionNumber: string; // e.g., "CIN-2026-001"
  title: string;
  originalTitle?: string;
  director: string;
  year: number;
  country: string;
  runtimeMinutes: number;
  aspectRatio: string; // e.g., "1.37:1", "1.85:1", "2.39:1"
  cinematographer?: string;
  dateWatched: string;
  rating: 1 | 2 | 3 | 4 | 5;
  medium: '35mm' | '70mm' | 'digital' | 'television';
  tags: string[];
  stillImage?: string;
  critiqueSummary: string;
}

export interface FragmentItem {
  id: string;
  accessionNumber: string; // e.g., "FRAG-0042"
  quote: string;
  author: string;
  sourceWork: string;
  year?: string;
  tags: string[];
  reflection?: string;
}

export interface CuriosityItem {
  id: string;
  slug: string;
  accessionNumber: string;
  title: string;
  category: 'art-history' | 'classical-music' | 'botany' | 'architecture' | 'antiquities';
  periodOrEra: string;
  creator?: string;
  provenance?: string;
  description: string;
  plateImage?: string;
  externalLink?: string;
}

// 2. Long-Form Collections (Markdown Frontmatter)
export interface ArticleFrontmatter {
  title: string;
  subtitle?: string;
  accessionNumber: string;
  collection: 'atelier' | 'writing' | 'research';
  category?: string;
  date: string;
  readingTimeMinutes: number;
  abstract: string;
  tags: string[];
  heroImage?: string;
  epigraph?: {
    text: string;
    author: string;
    source?: string;
  };
}
```

---

### 4. Component Architecture & Modular Layout

```
src/
├── assets/
│   └── ornaments/           # SVG fleurons, Oxford dividers, seals
├── components/
│   ├── layout/
│   │   ├── Masthead.tsx     # Archive header with primary labels + subtitles
│   │   ├── Colophon.tsx     # Bibliographic footer with typography credits
│   │   ├── ArchivalFrame.tsx# Neoclassical frame & Oxford border wrapper
│   │   ├── Navigation.tsx   # Seven collections menu
│   │   └── ThemeToggle.tsx  # Daylight (Parchment) / Candlelit (Smoked Walnut)
│   ├── ui/
│   │   ├── AccessionBadge.tsx # Museum inventory tag (ACCESSION NO. ...)
│   │   ├── OxfordRule.tsx     # Double hairline decorative divider
│   │   ├── Fleuron.tsx        # Typographic glyph (❦, ❧, ⁂)
│   │   ├── DropCap.tsx        # Illuminated initial capital
│   │   ├── PullQuote.tsx      # Hanging punctuation editorial quote
│   │   ├── SpecimenPlate.tsx  # Framed archival card with image mat
│   │   ├── RomanRating.tsx    # I–V numeral rating display
│   │   └── SearchBar.tsx      # Archive search input
│   ├── editorial/
│   │   ├── MarkdownArticle.tsx# Renders long-form essays with drop caps
│   │   └── Sidenote.tsx       # Margin gloss / annotation
│   └── search/
│       ├── SearchModal.tsx    # Search dialog across all 7 wings
│       └── SearchResults.tsx  # Grouped results by collection
├── content/                 # JSON files and Markdown records
├── hooks/
│   ├── useTheme.ts          # Daylight / Evening mode switch
│   └── useArchiveSearch.ts  # Client-side multi-wing search query hook
├── layouts/
│   ├── RootLayout.tsx       # Global frame, masthead, content outlet, colophon
│   └── ReaderLayout.tsx     # Intimate single-column layout for essays
├── pages/
│   ├── GrandFoyer.tsx       # Homepage / Archival Frontispiece
│   ├── atelier/
│   │   ├── AtelierIndex.tsx # Engineering project gallery
│   │   └── AtelierDetail.tsx# Technical case study monograph
│   ├── library/
│   │   ├── LibraryIndex.tsx # Bookshelf ledger & filter
│   │   └── LibraryDetail.tsx# Book review & marginalia
│   ├── cinema/
│   │   ├── CinemaIndex.tsx  # Contact sheet grid
│   │   └── CinemaDetail.tsx # Film slate critique
│   ├── writing/
│   │   ├── WritingIndex.tsx # Literary index
│   │   └── WritingDetail.tsx# Essay reader
│   ├── fragments/
│   │   └── FragmentsPage.tsx# Commonplace slip-box index
│   ├── curiosities/
│   │   └── CuriositiesPage.tsx# Vitrine exhibition
│   ├── research/
│   │   ├── ResearchIndex.tsx# Academic notes
│   │   └── ResearchDetail.tsx# Formal paper reader
│   └── ColophonPage.tsx     # Detailed technical & typographic colophon
├── services/
│   ├── contentEngine.ts     # Ingestion & retrieval service
│   └── searchIndex.ts       # In-memory search indexing & querying
├── styles/
│   ├── tokens.css           # Color tokens, fonts, spacing variables
│   ├── typography.css       # Editorial serif rules, drop caps, quotes
│   └── print.css            # Archival print stylesheet
├── types/
│   └── content.ts           # Unified data models
├── main.tsx
└── App.tsx                  # React Router configuration
```

---

### 5. Content Engine & Search Implementation

#### 5.1 Content Loading Service (`contentEngine.ts`)
* Uses Vite’s compile-time `import.meta.glob` to import JSON datasets and Markdown files without runtime fetch requests.
* Provides typed getter functions:
  * `getBooks()`, `getBookBySlug(slug)`
  * `getFilms()`, `getFilmBySlug(slug)`
  * `getFragments()`, `getFragmentsByTag(tag)`
  * `getCuriosities()`
  * `getAtelierProjects()`, `getWritingEssays()`, `getResearchNotes()`

#### 5.2 Real Search Engine (`searchIndex.ts`)
Instead of assuming or claiming unmeasured performance, search will be implemented and tested cleanly:
* **Index Construction**: At runtime initialization, all records across the 7 collections are mapped into a unified search index containing:
  * `id`, `title`, `collection`, `subtitle`, `keywords`, `summary`, `url`.
* **Query Matching**: Evaluates queries against normalized tokens, matching titles, authors, directors, tags, and summary text.
* **Testing & Verification**: An automated unit test suite will verify search accuracy, tag filtering, case-insensitivity, and performance across all seven collections.

---

### 6. Staged Implementation Roadmap

Work will proceed strictly in eight sequential, testable stages:

```
STAGE 1: Foundations & Design Tokens
  ├── Establish CSS custom properties (Warm Ivory, Antique Parchment, Deep Walnut, Muted Gold)
  ├── Configure web typography (Cormorant Garamond, Newsreader, Inter, Courier Prime)
  └── Create core SVG ornaments (Oxford rules, fleurons, printers' marks)

STAGE 2: Global Navigation & Homepage (The Grand Foyer)
  ├── Configure React Router with clean URL routing
  ├── Build ArchivalFrame, Masthead (primary labels + historical subtitles), and Colophon
  ├── Implement ThemeToggle (Daylight Parchment vs. Smoked Walnut Evening)
  └── Develop The Grand Foyer (`/`) featuring curatorial statement and accession highlights

STAGE 3: Professional Archive (The Atelier)
  ├── Build structured technical monograph layout for engineering projects
  ├── Implement architectural schematic borders, tabular specs, and code blocks
  └── Populate initial engineering case studies via Markdown with frontmatter

STAGE 4: The Library & The Cinema
  ├── Implement The Library: shelf categorization, book cards, Roman ratings, marginalia
  ├── Implement The Cinema: archival 35mm contact sheet grid, film slate details
  └── Populate seed data in `books.json` and `films.json`

STAGE 5: The Writing Room
  ├── Build intimate, typography-focused reading layout
  ├── Implement illuminated drop caps, indent paragraphs, and pull quotes
  └── Populate inaugural essays and creative prose in Markdown

STAGE 6: Curiosities & Fragments
  ├── Build Fragments commonplace slip-box index with tag filtering
  ├── Build Curiosities eclectic museum vitrine layout
  └── Populate seed data in `fragments.json` and `curiosities.json`

STAGE 7: The Research Journal
  ├── Build formal academic paper layout with abstract box and numbered sections
  └── Add initial technical/mathematical research treatises in Markdown

STAGE 8: Search, Refinements & Verification
  ├── Implement unified client-side search engine and SearchModal
  ├── Author and run test suite to verify search accuracy and route navigation
  └── Final accessibility, responsive breakpoint, and print styling audit
```
