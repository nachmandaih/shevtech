import type { JSX } from 'react';
import type { ColorSwatch, MaterialEntry, ProductImage } from '../lib/types';
import { StatusBadge } from './StatusBadge';

interface MaterialsSectionProps {
  colors: ColorSwatch[];
  materials: MaterialEntry[];
  reference?: ProductImage;
  referenceNote?: string;
}

export function MaterialsSection({
  colors,
  materials,
  reference,
  referenceNote,
}: MaterialsSectionProps): JSX.Element {
  return (
    <>
      <div className="materials-top">
        <div className="card">
          <h3 className="component-card__name">צבעי מוצר וגימור</h3>
          <div className="swatch-list" style={{ marginBlockStart: '1rem' }}>
            {colors.map((c) => (
              <div className="swatch" key={c.name}>
                <span className="swatch__chip" style={{ background: c.hex }} aria-hidden="true" />
                <span>
                  <span className="swatch__name">{c.name}</span>
                  <br />
                  <span className="swatch__hex ltr">{c.hex.toUpperCase()}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
        {reference ? (
          <figure className="card materials-reference">
            <img src={reference.src} alt={reference.alt} loading="lazy" />
            {referenceNote ? <figcaption>{referenceNote}</figcaption> : null}
          </figure>
        ) : null}
      </div>
      <div className="table-scroll">
        <table className="data-table" aria-label="טבלת חומרים וגימורים">
          <thead>
            <tr>
              <th scope="col">רכיב / אזור</th>
              <th scope="col">חומר / סוג</th>
              <th scope="col">צבע / גימור</th>
              <th scope="col">סטטוס</th>
              <th scope="col">הערות</th>
            </tr>
          </thead>
          <tbody>
            {materials.map((m) => (
              <tr key={m.area}>
                <td className="data-table__name">{m.area}</td>
                <td>{m.material}</td>
                <td>
                  {m.swatchHex ? (
                    <span className="mini-swatch" style={{ background: m.swatchHex }} aria-hidden="true" />
                  ) : null}
                  {m.finish}
                </td>
                <td>
                  <StatusBadge status={m.status} />
                </td>
                <td className="data-table__muted">{m.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
