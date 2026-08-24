import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../lib/types';
import { StatusBadge } from './StatusBadge';

interface ProductCardProps {
  product: Product;
  /** Catalog position, e.g. "01". */
  index: string;
}

export function ProductCard({ product, index }: ProductCardProps): JSX.Element {
  return (
    <Link to={`/products/${product.slug}`} className="card card--hover product-card">
      <span className="product-card__media">
        <img
          src={(product.card ?? product.hero).src}
          alt={(product.card ?? product.hero).alt}
          loading="lazy"
        />
      </span>
      <span className="product-card__body">
        <span className="product-card__num">מוצר {index}</span>
        <span className="product-card__name ltr">{product.name}</span>
        <span className="product-card__desc">{product.shortDescription}</span>
        <span className="product-card__footer">
          <span className="product-card__cta">לעמוד המוצר ←</span>
          <StatusBadge status={product.documentStatus} />
        </span>
      </span>
    </Link>
  );
}
