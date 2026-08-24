# SHEVTECH — Site V1

אתר המוצר של SHEVTECH: אפליקציה סטטית עצמאית (Vite + React + TypeScript),
עברית / RTL-first. מוצר 01: **SMOKE VENT Control Box**.

## הרצה

```bash
npm install
npm run dev        # שרת פיתוח — http://localhost:5173
npm run build      # build ל-dist/
npm run preview    # תצוגת ה-build — http://localhost:4173
npm run typecheck
npm run lint
npm run verify     # typecheck + lint + build
```

## מבנה

```
index.html            RTL, Hebrew-first
src/
  lib/types.ts        Generic Product schema — the extensibility contract
  lib/status.ts       Status labels/tones (מאושר / בבדיקה / לעדכון / חסר / טיוטה)
  data/products/      Product data files + registry (index.ts)
  components/         Reusable UI (Header, ProductHero, ExplodedView, ...)
  pages/              Home / Products / Product[slug] / NotFound
  styles/global.css   SHEVTECH design tokens + components (RTL logical props)
  assets/
    brand/            הלוגו האמיתי שחולץ מתיק המוצר (שקוף)
    products/<slug>/  renders / diagrams / gallery per product
```

## הוספת מוצר חדש (Product 02)

1. הוסיפו assets תחת `src/assets/products/<slug>/`.
2. צרו קובץ נתונים `src/data/products/<slug>.ts` שממלא את סכימת `Product`.
3. הוסיפו אותו למערך שב-`src/data/products/index.ts`.

זהו. עמוד המוצר, הקטלוג ועמוד הבית נגזרים מהנתונים — אין צורך לבנות UI חדש.

## עקרונות תוכן

- הסטטוסים (מאושר / בבדיקה / לעדכון / חסר) מועתקים כלשונם מתיק המוצר — אין
  "לשדרג" סטטוס בקוד.
- מסמכים הנדסיים (CAD, BOM, QC...) מסומנים `visibility: 'internal'` ומוצגים
  כרישום בלבד, ללא הורדה ציבורית.
- האתר הוא שכבת הצגה; המקור המחייב הוא המסמכים ההנדסיים המאושרים.
