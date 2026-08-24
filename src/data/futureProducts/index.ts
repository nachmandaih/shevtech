import type { FutureProduct } from '../../lib/futureProduct';

/**
 * SHEVTECH GUARDIAN — future ecosystem concepts.
 *
 * These are roadmap ideas, not current commercial products: none are
 * manufactured, certified, or available. Every entry carries
 * status: 'future-concept' and must not claim certification, regulatory
 * compliance, or guaranteed prediction accuracy.
 *
 * To add Concept 06: add an entry here (and to `order` where it belongs).
 * No other file needs to change.
 */
export const futureProducts: FutureProduct[] = [
  {
    id: 'guardian-node',
    slug: 'guardian-node',
    name: 'SHEVTECH GUARDIAN NODE',
    family: 'SHEVTECH GUARDIAN',
    category: 'ניטור שדה / אבחון',
    status: 'future-concept',
    tagline: 'לדעת מה קורה בפועל בחלון שחרור העשן — לא רק בלוח הבקרה.',
    description:
      'צומת שדה קומפקטי המשויך לחלון שחרור עשן, למפעיל (אקטואטור) או לנקודת מערכת רלוונטית. תפקידו העתידי הוא לספק נראות מקומית על המצב וההתנהגות בפועל של אותה נקודה — לא רק אינדיקציה כללית מהלוח המרכזי.',
    capabilities: [
      'ניטור מצב פתוח / סגור',
      'רישום אירועי הפעלה',
      'מדידת זמני פתיחה/סגירה',
      'זיהוי מגמות חריגות בהתנהגות המפעיל',
      'זיהוי ייעודי מול נכס פיזי ספציפי (עתידי: גישה מבוססת QR)',
    ],
    roleInEcosystem: 'שכבת הבסיס — צומת השדה שממנו מתחילה כל שרשרת המידע של Guardian.',
    visualType: 'node',
    order: 1,
  },
  {
    id: 'guardian-hub',
    slug: 'guardian-hub',
    name: 'SHEVTECH GUARDIAN HUB',
    family: 'SHEVTECH GUARDIAN',
    category: 'שער מבנה / איחוד מערכות',
    status: 'future-concept',
    tagline: 'תמונה טכנית אחת של תשתית שחרור העשן על פני כל המבנה.',
    description:
      'יחידת מבנה המיועדת עקרונית לאחד מידע ממספר Guardian Node ומנקודות מערכת תואמות נוספות. במקום ריבוי נקודות בקרה מבודדות, ה-HUB מהווה גשר טכני בין השדה לשכבת התוכנה הגבוהה יותר.',
    capabilities: [
      'איסוף סטטוס מהתקני שדה',
      'ריכוז תמונת מצב ברמת המבנה',
      'אחסון/מטמון אירועים מקומי',
      'תקשורת עתידית עם Guardian Cloud',
      'ממשק תחזוקה ותפעול ברמת המבנה',
    ],
    roleInEcosystem: 'הגשר בין השדה (Node) לבין שכבת התוכנה (Cloud) — ריכוז מבני, לא החלטה קריטית.',
    visualType: 'hub',
    futureNotes:
      'תאימות עתידית אפשרית לממשקי ניהול מבנה (BMS) תיבחן בהמשך ואינה מובטחת או סופית בשלב זה.',
    order: 2,
  },
  {
    id: 'guardian-cloud',
    slug: 'guardian-cloud',
    name: 'SHEVTECH GUARDIAN CLOUD',
    family: 'SHEVTECH GUARDIAN',
    category: 'ניטור צי / אינטליגנציית תחזוקה',
    status: 'future-concept',
    tagline: 'מאלפי רכיבים בודדים — לתמונת מצב אחת וברורה של המערכת.',
    description:
      'פלטפורמת web עתידית המיועדת להעניק לבעלי מבנים, חברות אחזקה וצוותים טכניים מבט מרכזי על מספר מערכות, מבנים ונכסים. החזון הוא תצוגה מרוכזת של סטטוס, היסטוריה ומגמות — לא קבלת החלטות אוטומטית.',
    capabilities: [
      'סקירת תיק מבנים ונכסים',
      'תמונת בריאות מערכת כללית',
      'התראות תחזוקה והיסטוריית אירועים',
      'תיעדוף בעיות ומגמות לאורך זמן',
      'נראות טכנאי/שירות ברמת ריבוי מבנים',
    ],
    roleInEcosystem: 'שכבת האינטליגנציה — מצטרפת מנתוני ה-HUB, ואינה מפעילה או שולטת בציוד קריטי.',
    visualType: 'cloud',
    illustrativeExample: {
      title: 'דוגמה להמחשה בלבד — לא נתונים תפעוליים אמיתיים',
      note: 'תצוגת דשבורד עתידית לדוגמה, להמחשת רעיון ריכוז תיק נכסים בלבד.',
      stats: [
        { label: 'נכסים בתיק', value: '2,000', tone: 'neutral' },
        { label: 'תקינים', value: '1,987', tone: 'positive' },
        { label: 'נדרש שירות', value: '9', tone: 'caution' },
        { label: 'קריטי', value: '4', tone: 'alert' },
      ],
    },
    order: 3,
  },
  {
    id: 'guardian-technician',
    slug: 'guardian-technician',
    name: 'SHEVTECH GUARDIAN TECHNICIAN',
    family: 'SHEVTECH GUARDIAN',
    category: 'הרצה ותחזוקה / אפליקציית שירות',
    status: 'future-concept',
    tagline: 'הטכנאי מגיע לציוד כשהוא כבר יודע מה זה, מה קרה לו, ומה דורש תשומת לב.',
    description:
      'חוויית מובייל/טאבלט עתידית לטכנאים האחראים על התקנה, הרצה, בדיקה ותחזוקה. הרעיון הוא לחבר זיהוי נכס, היסטוריית שירות ותהליך בדיקה מונחה לכלי עבודה אחד, נגיש בשטח.',
    capabilities: [
      'זיהוי נכס (עתידי: סריקת QR)',
      'צפייה במידע טכני ובהיסטוריית שירות',
      'תהליך בדיקה מונחה',
      'תיעוד פעולת שירות והערות טכנאי',
      'תיעוד ראייתי (תמונות) להתקנה/תחזוקה',
    ],
    roleInEcosystem: 'ממשק האדם במערכת — מחבר את שכבת השדה והענן לפעולת שירות בפועל.',
    visualType: 'technician',
    futureNotes: 'מוצג כהמחשה חזותית בלבד; לא נבנתה אפליקציה פונקציונלית בשלב זה.',
    order: 4,
  },
  {
    id: 'shevtech-control',
    slug: 'shevtech-control',
    name: 'SHEVTECH CONTROL',
    family: 'Future Native Control',
    category: 'פלטפורמת בקרה עתידית',
    status: 'future-concept',
    tagline: 'דור עתידי של חומרת בקרת שחרור עשן, מתוכנן מהיסוד כחלק ממערכת מחוברת.',
    description:
      'כיוון עתידי אפשרי לדור הבא של חומרת בקרה מקורית של SHEVTECH, המיועד בטווח הארוך להשתלב באופן טבעי עם אקוסיסטם Guardian הרחב יותר — תוך שמירה על עצמאות ותפקוד fail-safe של הפונקציה הקריטית.',
    capabilities: [
      'בקרה מקומית וממשק מפעיל פיזי וברור',
      'אבחון ומידע אירועים מקומי',
      'אינטגרציה עתידית עם ניטור Guardian',
      'ארכיטקטורה מודולרית',
      'תמיכה בהרצה ושירות',
    ],
    roleInEcosystem:
      'שכבת בקרה עתידית אפשרית — עצמאית ו-fail-safe בפני עצמה, עם חיבור עתידי אפשרי לשכבת הניטור.',
    visualType: 'control',
    safetyCritical: true,
    futureNotes:
      'מוצג SMOKE VENT Control Box הקיים הוא המוצר האמיתי הנוכחי (מוצר 01). SHEVTECH CONTROL אינו מחליף אותו ואינו קיים כיום — זהו כיוון מוצרי עתידי אפשרי בלבד, ואינו מוצג כמאושר, מוסמך או כמחליף ציוד בקרה מאושר.',
    order: 5,
  },
];

export function getFutureProducts(): FutureProduct[] {
  return [...futureProducts].sort((a, b) => a.order - b.order);
}
