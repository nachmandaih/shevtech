import { useEffect } from 'react';
import type { JSX } from 'react';
import { getPublicProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';

export function ProductsPage(): JSX.Element {
  useEffect(() => {
    document.title = 'מוצרים — SHEVTECH';
  }, []);

  const products = getPublicProducts();

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="מוצרים"
          subtitle="קטלוג המוצרים של SHEVTECH. כל מוצר מגובה בתיק מוצר מבוקר."
        />
        <div className="product-grid">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </section>
  );
}
