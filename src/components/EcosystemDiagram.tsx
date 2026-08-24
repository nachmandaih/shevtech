import type { JSX } from 'react';
import { ChevronPrevIcon } from './icons';
import { NodeConceptIcon, HubConceptIcon, CloudConceptIcon, TechnicianConceptIcon } from './futureIcons';

const CHAIN: { label: string; sub: string; icon?: (p: { className?: string }) => JSX.Element }[] = [
  { label: 'SMOKE VENT / ACTUATOR', sub: 'המוצר / המפעיל הקיים בשטח' },
  { label: 'GUARDIAN NODE', sub: 'צומת שדה', icon: NodeConceptIcon },
  { label: 'GUARDIAN HUB', sub: 'שער מבנה', icon: HubConceptIcon },
  { label: 'GUARDIAN CLOUD', sub: 'אינטליגנציית תחזוקה', icon: CloudConceptIcon },
  { label: 'GUARDIAN TECHNICIAN', sub: 'ממשק טכנאי', icon: TechnicianConceptIcon },
];

/**
 * FIELD DEVICE → BUILDING HUB → CLOUD INTELLIGENCE → TECHNICIAN, with
 * SHEVTECH CONTROL shown as a related-but-independent future layer
 * (dashed connector, not part of the main data chain) — this is the
 * concrete way the diagram avoids implying critical fire/smoke function
 * depends on cloud connectivity.
 */
export function EcosystemDiagram(): JSX.Element {
  return (
    <div className="ecosystem-diagram">
      <div className="ecosystem-diagram__chain">
        {CHAIN.map((step, i) => (
          <div className="ecosystem-diagram__step" key={step.label}>
            <div className="ecosystem-node">
              {step.icon ? (
                <span className="ecosystem-node__icon" aria-hidden="true">
                  <step.icon />
                </span>
              ) : null}
              <span className="ecosystem-node__label ltr">{step.label}</span>
              <span className="ecosystem-node__sub">{step.sub}</span>
            </div>
            {i < CHAIN.length - 1 ? (
              <span className="ecosystem-diagram__connector" aria-hidden="true">
                <ChevronPrevIcon />
              </span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="ecosystem-diagram__branch">
        <span className="ecosystem-diagram__branch-connector" aria-hidden="true" />
        <div className="ecosystem-node ecosystem-node--control">
          <span className="ecosystem-node__label ltr">SHEVTECH CONTROL</span>
          <span className="ecosystem-node__sub">שכבת בקרה עתידית — עצמאית ו-fail-safe בפני עצמה</span>
        </div>
      </div>

      <p className="ecosystem-diagram__note">
        פעולת חירום קריטית של שחרור עשן חייבת להישאר עצמאית ו-fail-safe, ואינה תלויה בקישוריות ענן.
        שכבות הניטור וה-Cloud מוסיפות נראות ותחזוקה — לא מחליפות את הפעולה הבטיחותית הבסיסית.
      </p>
    </div>
  );
}
