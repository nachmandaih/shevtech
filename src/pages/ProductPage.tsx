import { useEffect } from 'react';
import type { JSX } from 'react';
import { useParams } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { ProductHero } from '../components/ProductHero';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCards } from '../components/FeatureCards';
import { ExplodedView } from '../components/ExplodedView';
import { ComponentsSection } from '../components/ComponentsSection';
import { GallerySection } from '../components/GallerySection';
import { MaterialsSection } from '../components/MaterialsSection';
import { DimensionsSection } from '../components/DimensionsSection';
import { DocumentsSection } from '../components/DocumentsSection';
import { VersionStatus } from '../components/VersionStatus';
import { TechnicalNotice } from '../components/TechnicalNotice';
import { NotFoundPage } from './NotFoundPage';

/**
 * Generic product page — rendered entirely from the Product data model.
 * Adding Product 02 requires data + assets only, not a new page.
 */
export function ProductPage(): JSX.Element {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — SHEVTECH`;
    }
  }, [product]);

  if (!product) {
    return <NotFoundPage />;
  }

  return (
    <>
      <ProductHero product={product} />

      <section className="section" aria-labelledby="overview">
        <div className="container">
          <SectionHeading
            num="01"
            id="overview"
            title="סקירת מוצר"
            subtitle="הגדרה כללית של תפקיד המוצר, אופן השימוש והעקרונות המרכזיים בתצורה הנוכחית."
          />
          <div className="overview-grid">
            <div className="card">
              <h3>תיאור מוצר</h3>
              <p>{product.description}</p>
            </div>
            <div className="card">
              <h3>שימוש עיקרי</h3>
              <p>{product.mainUse}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="principles">
        <div className="container">
          <SectionHeading
            num="02"
            id="principles"
            title="עקרונות מרכזיים"
            subtitle="ארבעת עקרונות התכנון המנחים את תצורת המוצר."
          />
          <FeatureCards highlights={product.highlights} />
        </div>
      </section>

      <section className="section" aria-labelledby="architecture">
        <div className="container">
          <SectionHeading
            num="03"
            id="architecture"
            title="מבנה ותצורת המוצר"
            subtitle="חלוקה כללית של המוצר לתת־מערכות וחלקים מרכזיים בתצורה המאושרת. בחרו רכיב להדגשה."
          />
          <ExplodedView data={product.exploded} components={product.components} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="components">
        <div className="container">
          <SectionHeading
            num="04"
            id="components"
            title="רכיבים מרכזיים"
            subtitle={product.componentsNote}
          />
          <ComponentsSection components={product.components} />
        </div>
      </section>

      <section className="section" aria-labelledby="gallery">
        <div className="container">
          <SectionHeading
            num="05"
            id="gallery"
            title="המוצר בפועל"
            subtitle="צילומים אמיתיים של אב־הטיפוס — חזית, פתיחה, ממשק פנימי, התקנה ואריזה."
          />
          <GallerySection images={product.gallery} />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="materials">
        <div className="container">
          <SectionHeading
            num="06"
            id="materials"
            title="חומרים וגימורים"
            subtitle="הגדרת חומרי המוצר, צבעים, גימורים ואזורים רגישים לשינוי בתצורה המאושרת."
          />
          <MaterialsSection
            colors={product.colors}
            materials={product.materials}
            reference={product.materialsReference}
            referenceNote={product.materialsNote}
          />
        </div>
      </section>

      <section className="section" aria-labelledby="dimensions">
        <div className="container">
          <SectionHeading
            num="07"
            id="dimensions"
            title="מידות קריטיות"
            subtitle="ריכוז מידות עיקריות ואזורים קריטיים המשפיעים על תצורת המוצר, התקנה והתאמת רכיבים."
          />
          <DimensionsSection
            diagrams={product.dimensionDiagrams}
            dimensions={product.dimensions}
            note={product.dimensionsNote}
          />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="documents">
        <div className="container">
          <SectionHeading
            num="08"
            id="documents"
            title="מסמכים וקבצים קשורים"
            subtitle="ריכוז הקבצים המשמשים כמקורות מידע לתצורת המוצר. קבצים הנדסיים מנוהלים פנימית ואינם זמינים להורדה ציבורית."
          />
          <DocumentsSection documents={product.documents} />
          {product.documentsNote ? (
            <p className="exploded__note" style={{ marginBlockStart: '1rem' }}>
              {product.documentsNote}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section" aria-labelledby="version">
        <div className="container">
          <SectionHeading
            num="09"
            id="version"
            title="גרסה וסטטוס"
            subtitle="מעקב אחר גרסאות תיק המוצר וסטטוס המסמך הנוכחי."
          />
          <VersionStatus product={product} />
          <div style={{ marginBlockStart: '1.5rem' }}>
            <TechnicalNotice text={product.technicalNotice} />
          </div>
        </div>
      </section>
    </>
  );
}
