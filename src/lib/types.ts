/**
 * Generic product schema for the SHEVTECH site.
 *
 * Every product page is rendered from a `Product` object — adding a future
 * product means adding a data file + assets, not building a new page.
 * The data layer is plain TypeScript today and can be swapped for a CMS or
 * database later without touching the UI components.
 */

/** Lifecycle status of an item, as used in SHEVTECH product files. */
export type ItemStatus =
  | 'approved' // מאושר
  | 'in-review' // בבדיקה
  | 'needs-update' // לעדכון
  | 'missing' // חסר
  | 'draft'; // טיוטה

/** Public information is shown on the site; internal is registry-only. */
export type Visibility = 'public' | 'internal';

export interface ProductImage {
  src: string;
  alt: string;
  /** Short curated caption shown in the gallery. */
  caption?: string;
  /** Free-form category tag (e.g. "חזית", "אריזה"). */
  category?: string;
}

export interface ProductHighlight {
  title: string;
  description: string;
  /** Key of a built-in icon (see components/icons.tsx). */
  icon: 'accessibility' | 'reliability' | 'controlled-access' | 'service';
}

export interface ProductComponentEntry {
  /** Two-digit display number, e.g. "01". */
  num: string;
  name: string;
  role: string;
  material: string;
  status: ItemStatus;
  notes?: string;
}

/** Percent-based marker on the exploded render (0–100 of image box). */
export interface ExplodedMarker {
  /** Must match a `ProductComponentEntry.num`. */
  componentNum: string;
  x: number;
  y: number;
}

export interface ExplodedViewData {
  image: ProductImage;
  markers: ExplodedMarker[];
  /** Optional secondary detail render (e.g. lock mechanism close-up). */
  detail?: ProductImage & { title: string };
  note?: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
  /** Light swatches get a border so they stay visible. */
  light?: boolean;
}

export interface MaterialEntry {
  area: string;
  material: string;
  finish: string;
  status: ItemStatus;
  notes?: string;
  /** Optional swatch hex shown beside the finish. */
  swatchHex?: string;
}

export interface DimensionEntry {
  label: string;
  /** Kept as text so values like "לפי CAD" or "Ø 12 מ״מ" render as-is. */
  value: string;
  status: ItemStatus;
  notes?: string;
}

export interface ProductDocumentEntry {
  num: string;
  /** File/category type, e.g. "CAD 3D", "Drawing", "BOM". */
  type: string;
  name: string;
  version: string;
  status: ItemStatus;
  notes?: string;
  visibility: Visibility;
  /** Download URL — only rendered when present AND visibility is public. */
  href?: string;
}

export interface VersionHistoryEntry {
  version: string;
  year: string;
  change: string;
  updatedBy: string;
  status: ItemStatus;
}

export interface Product {
  id: string;
  slug: string;
  /** Display name (may be Latin script, e.g. "SMOKE VENT Control Box"). */
  name: string;
  /** One-line Hebrew descriptor shown under the name. */
  shortDescription: string;
  version: string;
  year: string;
  /** Product configuration status label, verbatim from the product file. */
  statusLabel: string;
  /** Current usage stage, verbatim from the product file. */
  stageLabel: string;
  /** Document review status of the product file itself. */
  documentStatus: ItemStatus;
  description: string;
  purpose: string;
  mainUse: string;
  highlights: ProductHighlight[];
  hero: ProductImage;
  /** Optional straight-on image for catalog cards; falls back to `hero`. */
  card?: ProductImage;
  /** Curated real-photo gallery, in display order. */
  gallery: ProductImage[];
  exploded: ExplodedViewData;
  components: ProductComponentEntry[];
  componentsNote?: string;
  colors: ColorSwatch[];
  materials: MaterialEntry[];
  materialsReference?: ProductImage;
  materialsNote?: string;
  dimensionDiagrams: ProductImage[];
  dimensions: DimensionEntry[];
  dimensionsNote?: string;
  documents: ProductDocumentEntry[];
  documentsNote?: string;
  versionHistory: VersionHistoryEntry[];
  /** Engineering source-of-truth disclaimer, verbatim from the product file. */
  technicalNotice: string;
  visibility: Visibility;
}
