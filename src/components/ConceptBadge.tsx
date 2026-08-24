import type { JSX } from 'react';
import type { ConceptStatus } from '../lib/futureProduct';
import { CONCEPT_STATUS_LABELS } from '../lib/futureStatus';

/**
 * Visually distinct from StatusBadge (product review status) on purpose:
 * a roadmap concept and a document-review state are different kinds of
 * "status" and should never look interchangeable.
 */
export function ConceptBadge({ status }: { status: ConceptStatus }): JSX.Element {
  return <span className="concept-badge">{CONCEPT_STATUS_LABELS[status]}</span>;
}
