import type { JSX } from 'react';
import type { DimensionEntry, ProductImage } from '../lib/types';
import { StatusBadge } from './StatusBadge';

interface DimensionsSectionProps {
  diagrams: ProductImage[];
  dimensions: DimensionEntry[];
  note?: string;
}

export function DimensionsSection({
  diagrams,
  dimensions,
  note,
}: DimensionsSectionProps): JSX.Element {
  return (
    <>
      {diagrams.length > 0 ? (
        <div className="dimension-diagrams">
          {diagrams.map((d) => (
            <figure className="card" key={d.src}>
              <img src={d.src} alt={d.alt} loading="lazy" />
              {d.caption ? <figcaption>{d.caption}</figcaption> : null}
            </figure>
          ))}
        </div>
      ) : null}
      <div className="table-scroll">
        <table className="data-table" aria-label="טבלת מידות קריטיות">
          <thead>
            <tr>
              <th scope="col">אזור / מידה</th>
              <th scope="col">ערך נוכחי</th>
              <th scope="col">סטטוס</th>
              <th scope="col">הערות</th>
            </tr>
          </thead>
          <tbody>
            {dimensions.map((d) => (
              <tr key={d.label}>
                <td className="data-table__name">{d.label}</td>
                <td>
                  <span className="ltr">{d.value}</span>
                </td>
                <td>
                  <StatusBadge status={d.status} />
                </td>
                <td className="data-table__muted">{d.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note ? (
        <p className="exploded__note" style={{ marginBlockStart: '1rem' }}>
          {note}
        </p>
      ) : null}
    </>
  );
}
