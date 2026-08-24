import type { JSX } from 'react';

/**
 * Minimal inline stroke-icon set, matching the product-file's thin line
 * iconography. Generic glyphs only — no brand marks are drawn here.
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
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {path}
    </svg>
  );
}

export function AccessibilityIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <circle cx="12" cy="4.5" r="1.8" />
      <path d="M4.5 8.5c5 1.2 10 1.2 15 0" />
      <path d="M12 9.5v4l-3 6" />
      <path d="M12 13.5l3 6" />
    </>,
    className,
  );
}

export function ReliabilityIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4.5" />
    </>,
    className,
  );
}

export function ControlledAccessIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <rect x="5.5" y="10.5" width="13" height="9" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15" r="1.3" />
    </>,
    className,
  );
}

export function ServiceIcon({ className }: IconProps): JSX.Element {
  return base(
    <path d="M14.5 6.5a4 4 0 0 0-5.3 5L4 16.7a1.8 1.8 0 1 0 2.6 2.6l5.2-5.2a4 4 0 0 0 5-5.3l-2.6 2.6-2.2-.6-.6-2.2z" />,
    className,
  );
}

export function ArrowIcon({ className }: IconProps): JSX.Element {
  // Points in the reading direction; flipped for RTL contexts via CSS.
  return base(<path d="M5 12h14M12 5l-7 7 7 7" />, className);
}

export function CloseIcon({ className }: IconProps): JSX.Element {
  return base(<path d="M6 6l12 12M18 6L6 18" />, className);
}

export function ChevronNextIcon({ className }: IconProps): JSX.Element {
  return base(<path d="M9 5l7 7-7 7" />, className);
}

export function ChevronPrevIcon({ className }: IconProps): JSX.Element {
  return base(<path d="M15 5l-7 7 7 7" />, className);
}

export function LockSmallIcon({ className }: IconProps): JSX.Element {
  return base(
    <>
      <rect x="6" y="11" width="12" height="8" rx="1.8" />
      <path d="M9 11V8.5a3 3 0 0 1 6 0V11" />
    </>,
    className,
  );
}

export const HIGHLIGHT_ICONS = {
  accessibility: AccessibilityIcon,
  reliability: ReliabilityIcon,
  'controlled-access': ControlledAccessIcon,
  service: ServiceIcon,
} as const;
