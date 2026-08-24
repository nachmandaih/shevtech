import { useEffect } from 'react';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';
import { getFutureProducts } from '../data/futureProducts';
import { SectionHeading } from '../components/SectionHeading';
import { TechnicalNotice } from '../components/TechnicalNotice';
import { EcosystemDiagram } from '../components/EcosystemDiagram';
import { FutureProductCard } from '../components/FutureProductCard';
import { FutureIntelligenceSection } from '../components/FutureIntelligenceSection';

export function FutureProductsPage(): JSX.Element {
  useEffect(() => {
    document.title = 'העתיד של SHEVTECH — SHEVTECH GUARDIAN Ecosystem';
  }, []);

  const concepts = getFutureProducts();

  return (
    <>
      <section className="future-hero">
        <div className="container future-hero__inner">
          <p className="future-hero__eyebrow">SHEVTECH GUARDIAN Ecosystem</p>
          <h1 className="future-hero__title">העתיד של SHEVTECH</h1>
          <p className="future-hero__subtitle">
            מעבר למוצר בודד — חזון של שכבה טכנית מחוברת המעניקה נראות על מצב, בדיקה ותחזוקה של ציוד
            שחרור עשן על פני מבנה, ובעתיד על פני תיק מבנים שלם.
          </p>
          <TechnicalNotice
            title="חשוב"
            text="כל מה שמוצג בעמוד זה הוא כיוון מוצרי וקונספט עתידי בלבד — לא מוצר קיים, מאושר, מיוצר או זמין מסחרית. יכולות עתידיות כפופות לפיתוח הנדסי, אימות ודרישות הסמכה רלוונטיות ככל שיידרשו."
          />
        </div>
      </section>

      <section className="section" aria-labelledby="ecosystem">
        <div className="container">
          <SectionHeading
            num="01"
            id="ecosystem"
            title="אקוסיסטם Guardian"
            subtitle="מהמוצר הפיזי בשטח ועד לשכבת האינטליגנציה והשירות — כיוון ארכיטקטוני מחובר, עם בקרת חירום עצמאית ו-fail-safe בבסיסו."
          />
          <EcosystemDiagram />
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="concepts">
        <div className="container">
          <SectionHeading
            num="02"
            id="concepts"
            title="חמשת הקונספטים"
            subtitle="לחצו על קונספט להרחבה — יכולות, תפקיד באקוסיסטם ופרטים נוספים."
          />
          <div className="concept-grid">
            {concepts.map((c) => (
              <FutureProductCard key={c.id} product={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="intelligence">
        <div className="container">
          <SectionHeading
            num="03"
            id="intelligence"
            title="ממערכת שמגיבה — למערכת שמבינה את מצבה"
            subtitle="חזון אינטליגנציית התחזוקה ארוכת הטווח של Guardian."
          />
          <FutureIntelligenceSection />
        </div>
      </section>

      <section className="section section--alt future-cta">
        <div className="container future-cta__inner">
          <div>
            <h2 className="future-cta__title">המוצר האמיתי היום, החזון למחר</h2>
            <p className="future-cta__text">
              SMOKE VENT Control Box הוא מוצר 01 הקיים והאמיתי של SHEVTECH כיום. Guardian הוא כיוון
              עתידי אפשרי שנבנה סביבו — לא תחליף לו.
            </p>
          </div>
          <Link to="/products/smoke-vent-control-box" className="btn btn--primary">
            למוצר הקיים
          </Link>
        </div>
      </section>
    </>
  );
}
