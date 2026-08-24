import type { JSX } from 'react';
import type { ProductComponentEntry } from '../lib/types';
import { StatusBadge } from './StatusBadge';

export function ComponentsSection({
  components,
}: {
  components: ProductComponentEntry[];
}): JSX.Element {
  return (
    <>
      <div className="component-grid">
        {components.map((c) => (
          <div className="card card--hover component-card" key={c.num}>
            <div className="component-card__head">
              <span className="component-card__num">{c.num}</span>
              <StatusBadge status={c.status} />
            </div>
            <h3 className="component-card__name">{c.name}</h3>
            <p className="component-card__role">{c.role}</p>
          </div>
        ))}
      </div>
      <div className="table-scroll">
        <table className="data-table" aria-label="טבלת רכיבים מרכזיים">
          <thead>
            <tr>
              <th scope="col">מס׳</th>
              <th scope="col">שם רכיב</th>
              <th scope="col">תפקיד</th>
              <th scope="col">חומר / סוג</th>
              <th scope="col">סטטוס</th>
              <th scope="col">הערות</th>
            </tr>
          </thead>
          <tbody>
            {components.map((c) => (
              <tr key={c.num}>
                <td className="data-table__num">{c.num}</td>
                <td className="data-table__name">{c.name}</td>
                <td>{c.role}</td>
                <td>{c.material}</td>
                <td>
                  <StatusBadge status={c.status} />
                </td>
                <td className="data-table__muted">{c.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
