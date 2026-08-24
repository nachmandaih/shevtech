import type { JSX } from 'react';
import type { ConceptVisual } from '../lib/futureProduct';

/**
 * Abstract technical silhouettes for SHEVTECH GUARDIAN concepts.
 * Deliberately schematic line icons — not renders, not photorealistic
 * hardware — because no real industrial design exists yet for these
 * concepts (see brief §19: no fake product photography).
 */

interface IconProps {
  className?: string;
}

function base(path: JSX.Element, className?: string): JSX.Element {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {path}
    </svg>
  );
}

export function NodeConceptIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
    </>,
    className,
  );
}

export function HubConceptIcon({ className }: IconProps): JSX.Element {
  // Three-spoke hub — deliberately not an X or a + (both read as
  // error/add glyphs at small sizes).
  return base(
    <>
      <circle cx="12" cy="13" r="2.3" />
      <circle cx="12" cy="4" r="1.5" />
      <circle cx="19.5" cy="17.5" r="1.5" />
      <circle cx="4.5" cy="17.5" r="1.5" />
      <path d="M12 10.7V5.5M13.9 14.6l5 2.4M10.1 14.6l-5 2.4" />
    </>,
    className,
  );
}

export function CloudConceptIcon({ className }: IconProps): JSX.Element {
  return base(
    <path d="M7.5 18h9.2a3.8 3.8 0 0 0 .5-7.57 5.2 5.2 0 0 0-10-1.53A4.3 4.3 0 0 0 7.5 18z" />,
    className,
  );
}

export function TechnicianConceptIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <rect x="6" y="3" width="12" height="18" rx="2.2" />
      <path d="M9.3 12.2l1.9 1.9 3.4-3.9" />
    </>,
    className,
  );
}

export function ControlConceptIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <rect x="5" y="4" width="14" height="16" rx="2.2" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8.3 8h.9M14.8 8h.9M8.3 16h.9M14.8 16h.9" />
    </>,
    className,
  );
}

export const CONCEPT_ICONS: Record<ConceptVisual, (props: IconProps) => JSX.Element> = {
  node: NodeConceptIcon,
  hub: HubConceptIcon,
  cloud: CloudConceptIcon,
  technician: TechnicianConceptIcon,
  control: ControlConceptIcon,
};
