import type { JSX } from 'react';
import type { Product } from '../lib/types';
import { StatusBadge } from './StatusBadge';

export function VersionStatus({ product }: { product: Product }): JSX.Element {
  return (
    <div className="version-grid">
      <div className="table-scroll">
        <table className="data-table" aria-label="היסטוריית גרסאות">
          <thead>
            <tr>
              <th scope="col">גרסה</th>
              <th scope="col">שנה</th>
              <th scope="col">שינוי עיקרי</th>
              <th scope="col">עודכן על ידי</th>
              <th scope="col">סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {product.versionHistory.map((v) => (
              <tr key={v.version}>
                <td className="data-table__num ltr">{v.version}</td>
                <td className="ltr">{v.year}</td>
                <td>{v.change}</td>
                <td className="ltr">{v.updatedBy}</td>
                <td>
                  <StatusBadge status={v.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h3 className="component-card__name" style={{ marginBlockEnd: '1rem' }}>
          סטטוס מסמך
        </h3>
        <dl className="version-facts">
          <div className="version-fact">
            <dt>גרסה נוכחית</dt>
            <dd className="ltr">{product.version}</dd>
          </div>
          <div className="version-fact">
            <dt>סטטוס</dt>
            <dd>
              <StatusBadge status={product.documentStatus} />
            </dd>
          </div>
          <div className="version-fact">
            <dt>תצורת מוצר</dt>
            <dd>{product.statusLabel}</dd>
          </div>
          <div className="version-fact">
            <dt>שלב נוכחי</dt>
            <dd>{product.stageLabel}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
