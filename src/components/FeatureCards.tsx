import type { JSX } from 'react';
import type { ProductHighlight } from '../lib/types';
import { HIGHLIGHT_ICONS } from './icons';

export function FeatureCards({ highlights }: { highlights: ProductHighlight[] }): JSX.Element {
  return (
    <div className="feature-grid">
      {highlights.map((h) => {
        const Icon = HIGHLIGHT_ICONS[h.icon];
        return (
          <div className="card feature-card" key={h.title}>
            <span className="feature-card__icon">
              <Icon />
            </span>
            <h3 className="feature-card__title">{h.title}</h3>
            <p className="feature-card__desc">{h.description}</p>
          </div>
        );
      })}
    </div>
  );
}
