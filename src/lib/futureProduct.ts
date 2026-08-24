/**
 * Lightweight schema for SHEVTECH GUARDIAN — future/concept products.
 *
 * Deliberately separate from `Product` (lib/types.ts): a concept has no
 * hero photography, no BOM, no approved dimensions — it is a roadmap idea,
 * not a manufactured item. Adding Concept 06 means adding an entry to
 * data/futureProducts/index.ts, not building a new page or route.
 */

/** Single value today; kept as a union so a later stage (e.g. prototype
 * work) can be introduced without changing every concept's shape. */
export type ConceptStatus = 'future-concept';

export type ConceptVisual = 'node' | 'hub' | 'cloud' | 'technician' | 'control';

export interface IllustrativeStat {
  label: string;
  value: string;
  tone: 'positive' | 'caution' | 'alert' | 'neutral';
}

/** A clearly-labeled illustrative UI example (e.g. a mock dashboard row).
 * Never real operational data — see FutureProductCard's rendering. */
export interface IllustrativeExample {
  title: string;
  note: string;
  stats: IllustrativeStat[];
}

export interface FutureProduct {
  id: string;
  slug: string;
  /** Display name, e.g. "SHEVTECH GUARDIAN NODE". */
  name: string;
  /** Product family, e.g. "SHEVTECH GUARDIAN". */
  family: string;
  /** Hebrew category label, e.g. "ניטור שדה / אבחון". */
  category: string;
  status: ConceptStatus;
  /** One-line value proposition. */
  tagline: string;
  /** Concise concept description (2–4 sentences). */
  description: string;
  /** 3–5 conceptual capabilities. */
  capabilities: string[];
  /** Where this sits in the Guardian ecosystem flow. */
  roleInEcosystem: string;
  /** Selects the abstract icon/silhouette — see components/futureIcons.tsx. */
  visualType: ConceptVisual;
  /** Extra conceptual caveat specific to this concept, if needed. */
  futureNotes?: string;
  /** True for concepts touching fire/smoke control itself (e.g. CONTROL). */
  safetyCritical?: boolean;
  /** Optional illustrative UI example (currently used by Guardian Cloud). */
  illustrativeExample?: IllustrativeExample;
  /** Display order in the ecosystem grid/flow. */
  order: number;
}
