import type { JSX } from 'react';

const OPENING_TIME_TREND = ['6.1 שנ׳', '7.0 שנ׳', '8.2 שנ׳', '9.4 שנ׳'];

/**
 * "ממערכת שמגיבה — למערכת שמבינה את מצבה": the long-term maintenance-
 * intelligence vision, framed as condition trends over time — never as a
 * guaranteed failure-prediction claim.
 */
export function FutureIntelligenceSection(): JSX.Element {
  return (
    <div className="intelligence">
      <div className="intelligence__example card">
        <p className="intelligence__example-label">דוגמה להמחשה בלבד — לא נתונים נמדדים בפועל</p>

        <div className="intelligence__trend">
          <span className="intelligence__trend-title">זמן פתיחה</span>
          <div className="intelligence__trend-values">
            {OPENING_TIME_TREND.map((v, i) => (
              <span className="intelligence__trend-item" key={v}>
                <span className="ltr">{v}</span>
                {i < OPENING_TIME_TREND.length - 1 ? (
                  <span className="intelligence__trend-arrow" aria-hidden="true">
                    ←
                  </span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        <div className="intelligence__trend">
          <span className="intelligence__trend-title">התנהגות מפעיל (אקטואטור)</span>
          <div className="intelligence__trend-values">
            <span className="intelligence__trend-item">תקין</span>
            <span className="intelligence__trend-arrow" aria-hidden="true">
              ←
            </span>
            <span className="intelligence__trend-item intelligence__trend-item--flag">
              מגמת עלייה במאמץ הפעלה
            </span>
          </div>
        </div>

        <div className="intelligence__recommendation">
          <span className="intelligence__recommendation-dot" aria-hidden="true" />
          בדיקה מומלצת
        </div>
      </div>

      <div className="intelligence__copy">
        <p>
          מערכות כיום נוטות לציין האם משהו תקין (OK) או בתקלה (Fault). החזון העתידי של Guardian הוא
          לספק לאורך זמן מידע עשיר יותר על מצב הציוד — לא רק תמונת מצב רגעית.
        </p>
        <p>
          Guardian Cloud עשוי בעתיד לנתח שינויים כגון עלייה בזמן הפעלה, תקלות חוזרות, שינוי בהתנהגות
          המפעיל או דפוסים חריגים, כדי לסייע באיתור ציוד שעשוי לדרוש בדיקה.
        </p>
        <p className="intelligence__disclaimer">
          זהו כיוון של אינטליגנציית תחזוקה ומגמות מצב — לא מערכת המבטיחה חיזוי תקלות.
        </p>
      </div>
    </div>
  );
}
