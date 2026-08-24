import type { JSX } from 'react';
import type { ProductDocumentEntry } from '../lib/types';
import { StatusBadge } from './StatusBadge';
import { LockSmallIcon } from './icons';

/**
 * Documentation registry. Documents marked `internal` are listed by name and
 * status only — never as public downloads. A `public` document with an `href`
 * renders a real download link (none exist yet in V1).
 */
export function DocumentsSection({ documents }: { documents: ProductDocumentEntry[] }): JSX.Element {
  return (
    <div className="table-scroll">
      <table className="data-table" aria-label="רישום מסמכים וקבצים קשורים">
        <thead>
          <tr>
            <th scope="col">מס׳</th>
            <th scope="col">סוג קובץ</th>
            <th scope="col">שם קובץ / מסמך</th>
            <th scope="col">גרסה</th>
            <th scope="col">סטטוס</th>
            <th scope="col">זמינות</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.num}>
              <td className="data-table__num">{doc.num}</td>
              <td className="data-table__name ltr">{doc.type}</td>
              <td>
                <span className="ltr">{doc.name}</span>
                {doc.notes ? (
                  <>
                    <br />
                    <span className="data-table__muted">{doc.notes}</span>
                  </>
                ) : null}
              </td>
              <td className="ltr">{doc.version}</td>
              <td>
                <StatusBadge status={doc.status} />
              </td>
              <td>
                {doc.visibility === 'public' && doc.href ? (
                  <a href={doc.href} className="product-card__cta" download>
                    הורדה
                  </a>
                ) : (
                  <span className="doc-access-chip">
                    <LockSmallIcon />
                    מנוהל פנימית
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
