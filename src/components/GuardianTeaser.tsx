import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { CONCEPT_ICONS } from './futureIcons';
import type { ConceptVisual } from '../lib/futureProduct';

const ICON_ORDER: { key: ConceptVisual; label: string }[] = [
  { key: 'node', label: 'NODE' },
  { key: 'hub', label: 'HUB' },
  { key: 'cloud', label: 'CLOUD' },
  { key: 'technician', label: 'TECHNICIAN' },
  { key: 'control', label: 'CONTROL' },
];

interface GuardianTeaserProps {
  heading: string;
  subtitle: string;
  compact?: boolean;
}

/** Shared Guardian ecosystem teaser — used on Home (restrained) and Products
 * (as the "future systems" half of the current/future split). */
export function GuardianTeaser({ heading, subtitle, compact = false }: GuardianTeaserProps): JSX.Element {
  return (
    <div className={`card guardian-teaser${compact ? ' guardian-teaser--compact' : ''}`}>
      <div className="guardian-teaser__icons" aria-hidden="true">
        {ICON_ORDER.map(({ key, label }) => {
          const Icon = CONCEPT_ICONS[key];
          return (
            <span className="guardian-teaser__icon" key={key}>
              <Icon />
              <span className="guardian-teaser__icon-label ltr">{label}</span>
            </span>
          );
        })}
      </div>
      <h3 className="guardian-teaser__title">{heading}</h3>
      <p className="guardian-teaser__subtitle">{subtitle}</p>
      <Link to="/future-products" className="btn btn--primary">
        לגלות את חזון המוצרים העתידי
      </Link>
    </div>
  );
}
