import type { JSX } from 'react';
import type { FutureProduct } from '../lib/futureProduct';
import { ConceptBadge } from './ConceptBadge';
import { ChevronNextIcon } from './icons';
import { CONCEPT_ICONS } from './futureIcons';

export function FutureProductCard({ product }: { product: FutureProduct }): JSX.Element {
  const Icon = CONCEPT_ICONS[product.visualType];
  const example = product.illustrativeExample;

  return (
    <details className="card concept-card">
      <summary className="concept-card__summary">
        <span className="concept-card__visual" aria-hidden="true">
          <Icon />
        </span>
        <span className="concept-card__heading">
          <span className="concept-card__category">{product.category}</span>
          <span className="concept-card__name ltr">{product.name}</span>
          <span className="concept-card__tagline">{product.tagline}</span>
        </span>
        <span className="concept-card__aside">
          <ConceptBadge status={product.status} />
          <span className="concept-card__toggle" aria-hidden="true">
            <ChevronNextIcon />
          </span>
        </span>
      </summary>

      <div className="concept-card__body">
        <p className="concept-card__desc">{product.description}</p>

        {product.safetyCritical ? (
          <p className="concept-card__safety">
            מוצר קריטי לבטיחות: אינו קיים כיום, אינו מוסמך ואינו מחליף ציוד בקרה מאושר בשימוש.
          </p>
        ) : null}

        <h4 className="concept-card__subheading">יכולות עתידיות אפשריות</h4>
        <ul className="concept-capabilities">
          {product.capabilities.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <p className="concept-card__role">
          <strong>מיקום באקוסיסטם: </strong>
          {product.roleInEcosystem}
        </p>

        {product.futureNotes ? <p className="concept-card__futurenotes">{product.futureNotes}</p> : null}

        {example ? (
          <div className="concept-illustrative">
            <p className="concept-illustrative__title">{example.title}</p>
            <div className="concept-illustrative__stats">
              {example.stats.map((s) => (
                <div className={`concept-stat concept-stat--${s.tone}`} key={s.label}>
                  <span className="concept-stat__value ltr">{s.value}</span>
                  <span className="concept-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
            <p className="concept-illustrative__note">{example.note}</p>
          </div>
        ) : null}
      </div>
    </details>
  );
}
