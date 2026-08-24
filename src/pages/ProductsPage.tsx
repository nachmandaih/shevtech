import { useEffect } from 'react';
import type { JSX } from 'react';
import { getPublicProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { GuardianTeaser } from '../components/GuardianTeaser';

export function ProductsPage(): JSX.Element {
  useEffect(() => {
    document.title = 'מוצרים — SHEVTECH';
  }, []);

  const products = getPublicProducts();

  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading
            title="מוצרים קיימים"
            subtitle="קטלוג המוצרים של SHEVTECH. כל מוצר מגובה בתיק מוצר מבוקר."
          />
          <div className="product-grid">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={String(i + 1).padStart(2, '0')} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            title="מערכות עתידיות"
            subtitle="לצד המוצר הקיים, SHEVTECH מגבשת חזון טכנולוגי רחב יותר — קונספטים עתידיים, לא מוצרים זמינים."
          />
          <GuardianTeaser
            heading="SHEVTECH GUARDIAN Ecosystem"
            subtitle="שכבה טכנית מחוברת סביב ניטור, אבחון ותחזוקה של ציוד שחרור עשן — כיוון עתידי אפשרי."
          />
        </div>
      </section>
    </>
  );
}
