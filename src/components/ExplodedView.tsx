import { useState } from 'react';
import type { JSX } from 'react';
import type { ExplodedViewData, ProductComponentEntry } from '../lib/types';

interface ExplodedViewProps {
  data: ExplodedViewData;
  components: ProductComponentEntry[];
}

/**
 * Exploded render with percent-positioned markers. Hover/click a marker or a
 * legend row to highlight the matching component. Marker positions live in
 * the product data, so a future product supplies its own render + markers.
 */
export function ExplodedView({ data, components }: ExplodedViewProps): JSX.Element {
  const [active, setActive] = useState<string | null>(null);

  const byNum = new Map(components.map((c) => [c.num, c]));
  // Click selects (it does not toggle off): hover already sets the active
  // component, so a toggle would immediately undo the hover's selection.
  const select = (num: string): void => {
    setActive(num);
  };

  return (
    <div className="exploded">
      <div className="card exploded__stage">
        <div className="exploded__canvas">
          <img src={data.image.src} alt={data.image.alt} loading="lazy" />
          {data.markers.map((m) => {
            const component = byNum.get(m.componentNum);
            if (!component) return null;
            const isActive = active === m.componentNum;
            return (
              <button
                key={m.componentNum}
                type="button"
                className={`exploded__marker${isActive ? ' exploded__marker--active' : ''}`}
                style={{ left: `${m.x}%`, top: `${m.y}%` }}
                onClick={() => select(m.componentNum)}
                onMouseEnter={() => setActive(m.componentNum)}
                onFocus={() => setActive(m.componentNum)}
                aria-pressed={isActive}
                aria-label={`רכיב ${m.componentNum} — ${component.name}`}
              >
                {m.componentNum}
              </button>
            );
          })}
        </div>
        {data.note ? <p className="exploded__note">{data.note}</p> : null}
        {data.detail ? (
          <div className="exploded__detail">
            <div className="exploded__detail-frame">
              <img src={data.detail.src} alt={data.detail.alt} loading="lazy" />
            </div>
            <div>
              <p className="exploded__detail-title">{data.detail.title}</p>
              <p className="exploded__note">{data.detail.alt}</p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="exploded__legend" role="list">
        {data.markers.map((m) => {
          const component = byNum.get(m.componentNum);
          if (!component) return null;
          const isActive = active === m.componentNum;
          return (
            <button
              key={m.componentNum}
              type="button"
              role="listitem"
              className={`exploded__legend-item${isActive ? ' exploded__legend-item--active' : ''}`}
              onClick={() => select(m.componentNum)}
              onMouseEnter={() => setActive(m.componentNum)}
              aria-pressed={isActive}
            >
              <span className="exploded__legend-num" aria-hidden="true">
                {component.num}
              </span>
              <span>
                <span className="exploded__legend-name">{component.name}</span>
                <span className="exploded__legend-desc">{component.role}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
