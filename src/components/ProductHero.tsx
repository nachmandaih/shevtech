import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../lib/types';
import { StatusBadge } from './StatusBadge';

export function ProductHero({ product }: { product: Product }): JSX.Element {
  return (
    <section className="product-hero">
      <div className="container product-hero__inner">
        <div>
          <nav className="product-hero__breadcrumb" aria-label="פירורי לחם">
            <Link to="/products">מוצרים</Link>
            {' / '}
            <span className="ltr">{product.name}</span>
          </nav>
          <p className="product-hero__num">מוצר 01</p>
          <h1 className="product-hero__title ltr">{product.name}</h1>
          <p className="product-hero__short">{product.shortDescription}</p>
          <div className="product-hero__badges">
            <span className="meta-chip">
              גרסה <strong className="ltr">{product.version}</strong>
            </span>
            <span className="meta-chip">
              שנת מסמך <strong className="ltr">{product.year}</strong>
            </span>
            <span className="meta-chip">{product.statusLabel}</span>
            <StatusBadge status={product.documentStatus} />
          </div>
        </div>
        <div className="product-hero__media">
          <img src={product.hero.src} alt={product.hero.alt} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}
