import { useEffect } from 'react';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { getPublicProducts } from '../data/products';
import { SectionHeading } from '../components/SectionHeading';
import { FeatureCards } from '../components/FeatureCards';
import { StatusBadge } from '../components/StatusBadge';
import { GuardianTeaser } from '../components/GuardianTeaser';

export function HomePage(): JSX.Element {
  useEffect(() => {
    document.title = 'SHEVTECH — שחרור עשן | חסמי אש | תאורה טבעית';
  }, []);

  const products = getPublicProducts();
  const featured = products[0];

  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <p className="hero__tagline">שחרור עשן | חסמי אש | תאורה טבעית</p>
            <h1 className="hero__title">
              מוצרי בקרה ובטיחות
              <br />
              בדיוק הנדסי
            </h1>
            <p className="hero__subtitle">
              SHEVTECH מפתחת מוצרים בתחומי שחרור עשן, חסמי אש ותאורה טבעית — מתיק מוצר מבוקר ועד
              מוצר פיזי אמיתי.
            </p>
            <div className="hero__actions">
              {featured ? (
                <Link to={`/products/${featured.slug}`} className="btn btn--primary">
                  לצפייה במוצר
                </Link>
              ) : null}
              <Link to="/products" className="btn btn--ghost">
                כל המוצרים
              </Link>
            </div>
          </div>
          {featured ? (
            <div className="hero__visual">
              <img src={featured.hero.src} alt={featured.hero.alt} fetchPriority="high" />
              <span className="hero__product-chip">
                <strong className="ltr">{featured.name}</strong>
                <span>מוצר 01 · גרסה {featured.version} · {featured.year}</span>
              </span>
            </div>
          ) : null}
        </div>
      </section>

      {featured ? (
        <>
          <section className="section">
            <div className="container">
              <SectionHeading
                num="01"
                title="המוצר הראשון של SHEVTECH"
                subtitle="יחידת בקרת חירום לפתיחת חלון שחרור עשן — מתועדת בתיק מוצר מבוקר."
              />
              <div className="showcase">
                <div className="showcase__media">
                  <img src={featured.hero.src} alt={featured.hero.alt} loading="lazy" />
                </div>
                <div>
                  <p className="showcase__num">PRODUCT 01</p>
                  <h3 className="showcase__title ltr">{featured.name}</h3>
                  <p className="showcase__desc">{featured.description}</p>
                  <div className="showcase__meta">
                    <span className="meta-chip">
                      גרסה <strong className="ltr">{featured.version}</strong>
                    </span>
                    <span className="meta-chip">
                      שנת מסמך <strong className="ltr">{featured.year}</strong>
                    </span>
                    <StatusBadge status={featured.documentStatus} />
                  </div>
                  <div className="showcase__actions">
                    <Link to={`/products/${featured.slug}`} className="btn btn--primary">
                      לעמוד המוצר המלא
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--alt">
            <div className="container">
              <SectionHeading
                title="עקרונות התכנון"
                subtitle="העקרונות המרכזיים המנחים את תצורת המוצר, כפי שהוגדרו בתיק המוצר."
              />
              <FeatureCards highlights={featured.highlights} />
            </div>
          </section>
        </>
      ) : null}

      <section className="section future-teaser-section">
        <div className="container">
          <p className="future-teaser-section__kicker">מה הלאה ב-SHEVTECH?</p>
          <GuardianTeaser
            compact
            heading="SHEVTECH GUARDIAN Ecosystem"
            subtitle="NODE • HUB • CLOUD • TECHNICIAN • CONTROL — חזון טכנולוגי מחובר סביב המוצר הקיים."
          />
        </div>
      </section>
    </>
  );
}
