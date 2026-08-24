import type { Product } from '../../lib/types';

import heroRender from '../../assets/products/smoke-vent-control-box/renders/product-hero.webp';
import frontRender from '../../assets/products/smoke-vent-control-box/renders/product-front.webp';
import explodedRender from '../../assets/products/smoke-vent-control-box/renders/exploded-view.webp';
import lockDetailRender from '../../assets/products/smoke-vent-control-box/renders/lock-detail.webp';
import materialsRender from '../../assets/products/smoke-vent-control-box/renders/materials-reference.webp';
import dimsFrontSide from '../../assets/products/smoke-vent-control-box/diagrams/dimensions-front-side.webp';
import dimsRearMount from '../../assets/products/smoke-vent-control-box/diagrams/rear-mounting.webp';
import galleryFront from '../../assets/products/smoke-vent-control-box/gallery/product-front.webp';
import galleryAngle from '../../assets/products/smoke-vent-control-box/gallery/product-angle.webp';
import gallerySideKey from '../../assets/products/smoke-vent-control-box/gallery/product-side-key.webp';
import galleryKeyAccess from '../../assets/products/smoke-vent-control-box/gallery/key-access-top.webp';
import galleryOpenDoor from '../../assets/products/smoke-vent-control-box/gallery/open-door.webp';
import galleryOpenAngle from '../../assets/products/smoke-vent-control-box/gallery/open-angle.webp';
import galleryInterface from '../../assets/products/smoke-vent-control-box/gallery/internal-interface.webp';
import galleryRear from '../../assets/products/smoke-vent-control-box/gallery/rear-mounting.webp';
import galleryPackaging from '../../assets/products/smoke-vent-control-box/gallery/packaging.webp';

/**
 * Product 01 — SMOKE VENT Control Box.
 * Content source: תיק מוצר — SMOKE VENT Control Box, גרסה 01, 2026.
 * Statuses are carried verbatim from the product file and must not be
 * "upgraded" here; the site presents them as documented.
 */
export const smokeVentControlBox: Product = {
  id: 'smoke-vent-control-box',
  slug: 'smoke-vent-control-box',
  name: 'SMOKE VENT Control Box',
  shortDescription: 'יחידת בקרת חירום לפתיחת חלון שחרור עשן',
  version: '01',
  year: '2026',
  statusLabel: 'תצורת מוצר ראשונית',
  stageLabel: 'פיתוח / ייצור אב־טיפוס / תיאום ספקים',
  documentStatus: 'in-review',
  description:
    'SMOKE VENT Control Box היא יחידת בקרה ייעודית המותקנת בסמוך למערכת שחרור עשן, ומאפשרת הפעלה, סגירה וניטור בסיסי של מצב המערכת מתוך נקודת גישה ברורה ומבוקרת.',
  purpose:
    'מיועד לשמש כיחידת בקרה נגישה להפעלה, סגירה וניטור של מערכת פתיחת חלון שחרור עשן במצב חירום או תחזוקה.',
  mainUse:
    'המוצר מיועד לשימוש במצבי חירום, בדיקות תחזוקה ותפעול מבוקר של חלון שחרור עשן. התכנון שם דגש על נגישות, זיהוי ברור של פעולות, והפרדה בין הפעלה ראשית לפעולות שירות או בקרה.',
  highlights: [
    {
      title: 'נגישות',
      description:
        'הפעולות המרכזיות צריכות להיות ברורות ונגישות למשתמש בזמן אמת, ללא צורך בפירוק או חיפוש נקודת הפעלה.',
      icon: 'accessibility',
    },
    {
      title: 'אמינות',
      description:
        'המוצר מיועד לפעול לאורך זמן עם מינימום התעסקות, תוך שמירה על מבנה פשוט, חלקים מוגדרים וממשקים ברורים.',
      icon: 'reliability',
    },
    {
      title: 'גישה מבוקרת',
      description:
        'רכיבים פנימיים, חיווט ונקודות שירות צריכים להיות מוגנים מגישה לא רצויה, אך זמינים בעת תחזוקה מוסמכת.',
      icon: 'controlled-access',
    },
    {
      title: 'שירות ותחזוקה',
      description:
        'התצורה צריכה לאפשר בדיקה, החלפת חלקים ותיעוד שינויים בצורה מסודרת וברורה לצוות הטכני.',
      icon: 'service',
    },
  ],
  hero: {
    src: heroRender,
    alt: 'רנדר תלת־ממדי של SMOKE VENT Control Box — קופסה כתומה עם חלון שקוף וכפתור פתיחה אדום',
  },
  card: {
    src: frontRender,
    alt: 'מבט קדמי על SMOKE VENT Control Box — דלת כתומה עם חלון שקוף וכפתור פתיחה אדום',
  },
  gallery: [
    {
      src: galleryFront,
      alt: 'SMOKE VENT Control Box — מבט קדמי של המוצר האמיתי עם מפתח בפתח העליון',
      caption: 'מבט קדמי',
      category: 'חזית',
    },
    {
      src: galleryAngle,
      alt: 'SMOKE VENT Control Box — מבט זווית על המוצר האמיתי',
      caption: 'מבט זווית',
      category: 'זווית',
    },
    {
      src: galleryKeyAccess,
      alt: 'הכנסת מפתח ייעודי לפתח העליון של הקופסה',
      caption: 'מפתח ופתח עליון',
      category: 'גישה',
    },
    {
      src: gallerySideKey,
      alt: 'מבט צד על המוצר עם המפתח במנגנון פתיחת הדלת',
      caption: 'פתיחת הדלת באמצעות המפתח',
      category: 'גישה',
    },
    {
      src: galleryOpenDoor,
      alt: 'המוצר עם דלת קדמית פתוחה החושפת את פאנל הממשק הפנימי',
      caption: 'דלת קדמית פתוחה',
      category: 'פתיחה',
    },
    {
      src: galleryOpenAngle,
      alt: 'מבט זווית על המוצר הפתוח — פאנל ממשק, ציר הדלת וחלון הזכוכית',
      caption: 'מבט פנימי בזווית',
      category: 'פתיחה',
    },
    {
      src: galleryInterface,
      alt: 'לחיצה על כפתור הפתיחה האדום בפאנל הממשק הפנימי',
      caption: 'ממשק הפעלה פנימי',
      category: 'ממשק',
    },
    {
      src: galleryRear,
      alt: 'גב גוף הקופסה — נקודות קיבוע וכניסות כבל, לצד אריזת המוצר',
      caption: 'מבט אחורי ונקודות התקנה',
      category: 'התקנה',
    },
    {
      src: galleryPackaging,
      alt: 'אריזת קרטון ממותגת של SMOKE VENT לצד המוצר',
      caption: 'אריזת המוצר',
      category: 'אריזה',
    },
  ],
  exploded: {
    image: {
      src: explodedRender,
      alt: 'תצורת exploded של SMOKE VENT Control Box — גוף קופסה, פאנל ממשק, דלת קדמית וחלון זכוכית בנפרד',
    },
    markers: [
      { componentNum: '01', x: 14, y: 40 },
      { componentNum: '02', x: 84, y: 40 },
      { componentNum: '03', x: 94, y: 55 },
      { componentNum: '04', x: 40, y: 56 },
      { componentNum: '05', x: 58, y: 58 },
      { componentNum: '06', x: 43.5, y: 9 },
      { componentNum: '07', x: 27, y: 91 },
      { componentNum: '08', x: 24, y: 8 },
    ],
    detail: {
      src: lockDetailRender,
      alt: 'תקריב של מנגנון הנעילה הפנימי על מסגרת הדלת',
      title: 'פרט אזור נעילה',
    },
    note: 'המחשה כללית של מבנה המוצר. זיהוי רכיבים מפורט מופיע בטבלת הרכיבים המרכזיים.',
  },
  components: [
    {
      num: '01',
      name: 'גוף קופסה',
      role: 'בסיס אחורי המחזיק את מכלולי המוצר, נקודות הקיבוע וכניסות הכבל.',
      material: 'פלסטיק / PC-ABS',
      status: 'needs-update',
      notes: 'תצורה לפי קובץ CAD מאושר.',
    },
    {
      num: '02',
      name: 'דלת קדמית',
      role: 'חלק קדמי נפתח המאפשר גישה מבוקרת לממשק ולרכיבים פנימיים.',
      material: 'פלסטיק / PC-ABS',
      status: 'approved',
      notes: 'כוללת אזור לחלון קדמי.',
    },
    {
      num: '03',
      name: 'חלון זכוכית',
      role: 'אזור שקוף/שביר המגן על הממשק ומגדיר את נקודת הגישה החזיתית.',
      material: 'זכוכית / חומר שקוף',
      status: 'approved',
      notes: 'עובי וסוג סופי מאושר.',
    },
    {
      num: '04',
      name: 'ממשק / PCB',
      role: 'כרטיס הבקרה והחיווי הכולל כפתורים, נורות וממשקי הפעלה.',
      material: 'רכיבים אלקטרוניים + PCB',
      status: 'needs-update',
      notes: 'גרפיקה ועוצמת לדים באישור.',
    },
    {
      num: '05',
      name: 'מנגנון נעילה',
      role: 'מנגנון המגביל פתיחה לא רצויה ושומר על גישה מבוקרת למוצר.',
      material: 'פלסטיק / PC-ABS',
      status: 'needs-update',
      notes: 'כולל מכסה ותושבת פנימית.',
    },
    {
      num: '06',
      name: 'ציר ופין',
      role: 'אזור חיבור הדלת לגוף הקופסה, כולל ציר ופין חיבור.',
      material: 'פין מתכתי מנירוסטה',
      status: 'approved',
      notes: 'פין מתכתי לפי תצורה סופית.',
    },
    {
      num: '07',
      name: 'פקק גומי / פתח תחתון',
      role: 'סגירת הפתח התחתון בגוף הקופסה והכנה למעבר כבל לפי תצורת ההתקנה.',
      material: 'גומי',
      status: 'in-review',
      notes: 'מיקום וגודל לפי תצורת קופסה.',
    },
    {
      num: '08',
      name: 'מפתח / פקק עליון',
      role: 'פתח ייעודי לפתיחת הדלת, ממוקם בפתח העליון של הקופסה ומשמש כסגירת הפתח כאשר אינו בשימוש.',
      material: 'פלסטיק / PC-ABS',
      status: 'needs-update',
      notes: 'יש לוודא התאמה לפתח מפתח בדלת ולמנגנון הנעילה.',
    },
  ],
  componentsNote: 'זיהוי רכיבי המוצר המרכזיים והגדרת תפקידם בתצורת המוצר המאושרת.',
  colors: [
    { name: 'כתום גוף / RAL 2011', hex: '#C4620E' },
    { name: 'אדום פעולה', hex: '#DC0C15' },
    { name: 'פלסטיק בהיר / פאנל', hex: '#F8FAFC', light: true },
    { name: 'פרטים לא פעילים', hex: '#CBD5E1', light: true },
    { name: 'כהה / Slate', hex: '#334155' },
  ],
  materials: [
    {
      area: 'גוף קופסה',
      material: 'פלסטיק / PC-ABS',
      finish: 'RAL 2011 / Deep Orange, גימור מט / סאטן',
      status: 'approved',
      notes: 'אין לשנות צבע גוף ללא אישור גרסה.',
      swatchHex: '#C4620E',
    },
    {
      area: 'דלת קדמית',
      material: 'פלסטיק / PC-ABS',
      finish: 'RAL 2011 / Deep Orange, זהה לגוף הקופסה',
      status: 'approved',
      notes: 'יש לשמור התאמת צבע וגימור לגוף.',
      swatchHex: '#C4620E',
    },
    {
      area: 'פאנל פנימי / ממשק',
      material: 'PCB / משטח מודפס',
      finish: 'בהיר #F8FAFC / #E5E7EB',
      status: 'in-review',
      notes: 'גרפיקה, טקסטים ומיקום רכיבים באישור.',
      swatchHex: '#F8FAFC',
    },
    {
      area: 'כפתור ראשי',
      material: 'פלסטיק / רכיב אלקטרוני',
      finish: 'אדום פעולה #DC0C15',
      status: 'in-review',
      notes: 'הכפתור הראשי חייב להישאר ברור ובולט.',
      swatchHex: '#DC0C15',
    },
    {
      area: 'נורות / חיווי',
      material: 'עדשת חיווי / LED',
      finish: 'עדשות ניטרליות במצב כבוי',
      status: 'in-review',
      notes: 'עוצמת הלדים והנראות הסופית באישור.',
    },
    {
      area: 'חלון זכוכית',
      material: 'זכוכית / חומר שקוף',
      finish: 'שקוף, עם השתקפות עדינה בלבד',
      status: 'approved',
      notes: 'עובי, סוג זכוכית ושיטת התקנה לאישור.',
    },
    {
      area: 'מפתח',
      material: 'פלסטיק / PC-ABS',
      finish: 'לפי חומר F3437',
      status: 'needs-update',
      notes: 'יש להימנע משחור מוחלט אם אינו נדרש חומרית.',
    },
  ],
  materialsReference: {
    src: materialsRender,
    alt: 'רנדר רפרנס חומריות — SMOKE VENT Control Box בגימור הכתום המאושר',
  },
  materialsNote: 'הרנדר משמש כרפרנס חזותי לחומריות וגימור בלבד. הגדרות מחייבות מופיעות בטבלת החומרים.',
  dimensionDiagrams: [
    {
      src: dimsFrontSide,
      alt: 'שרטוט מידות — מבט קדמי ומבט צד של הקופסה עם מידות במילימטרים',
      caption: 'מבט קדמי ומבט צד',
    },
    {
      src: dimsRearMount,
      alt: 'שרטוט מבט אחורי — נקודות התקנה וקיבוע של גוף הקופסה',
      caption: 'מבט אחורי / נקודות התקנה',
    },
  ],
  dimensions: [
    {
      label: 'מידות כלליות',
      value: '120 × 120 × 45 מ״מ',
      status: 'approved',
      notes: 'יש לעדכן לפי קובץ CAD סופי.',
    },
    {
      label: 'חלון קדמי',
      value: '94 × 80 מ״מ',
      status: 'approved',
      notes: 'מידת אזור גלוי בחזית הדלת.',
    },
    {
      label: 'ממשק / PCB',
      value: '100 × 100 מ״מ',
      status: 'in-review',
      notes: 'גודל כרטיס בסיסי לפי תצורת ממשק נוכחית.',
    },
    {
      label: 'פתח עליון / מפתח',
      value: 'Ø 12 מ״מ',
      status: 'approved',
      notes: 'פתח ייעודי לאחסון המפתח וסגירת הפתח העליון.',
    },
    {
      label: 'פתח תחתון / פקק גומי',
      value: 'Ø 20 מ״מ',
      status: 'needs-update',
      notes: 'פתח ייעודי למעבר כבל או סגירה באמצעות פקק גומי.',
    },
    {
      label: 'כניסת כבל אחורית',
      value: 'Ø 20 מ״מ',
      status: 'needs-update',
      notes: 'זהה לפתח התחתון, לפי תצורת הקופסה.',
    },
    {
      label: 'חורי קיבוע אחוריים',
      value: 'לפי CAD',
      status: 'needs-update',
      notes: 'כולל מיקום, קוטר ומרחקי מרכזים.',
    },
    {
      label: 'עובי חלון זכוכית',
      value: '0.8 מ״מ',
      status: 'approved',
      notes: 'עובי סופי לאישור לפי חומר ושיטת התקנה.',
    },
  ],
  dimensionsNote:
    'המידות מיועדות לריכוז ובקרה בלבד. המידע המחייב נקבע לפי קובץ CAD ושרטוטים מאושרים.',
  documents: [
    {
      num: '01',
      type: 'CAD 3D',
      name: 'SMOKE VENT Control Box — Assembly',
      version: '01',
      status: 'approved',
      notes: 'קובץ הרכבה ראשי של תצורת המוצר.',
      visibility: 'internal',
    },
    {
      num: '02',
      type: 'CAD 3D',
      name: 'Body / Back Box',
      version: '01',
      status: 'approved',
      notes: 'קובץ מקור לגוף הקופסה, נקודות התקנה וכניסות כבל.',
      visibility: 'internal',
    },
    {
      num: '03',
      type: 'CAD 3D',
      name: 'Front Door Assembly',
      version: '01',
      status: 'approved',
      notes: 'כולל דלת, חלון, ציר, מנגנון נעילה ומפתח.',
      visibility: 'internal',
    },
    {
      num: '04',
      type: 'Drawing',
      name: 'Critical Dimensions Drawing',
      version: '01',
      status: 'in-review',
      notes: 'שרטוט מידות קריטיות לעדכון לפי CAD סופי.',
      visibility: 'internal',
    },
    {
      num: '05',
      type: 'Drawing',
      name: 'Manufacturing Drawings',
      version: '01',
      status: 'in-review',
      notes: 'שרטוטי ייצור לחלקים מרכזיים לפי תצורה מאושרת.',
      visibility: 'internal',
    },
    {
      num: '06',
      type: 'PDF',
      name: 'Factory Assembly Guide',
      version: '01',
      status: 'approved',
      notes: 'מסמך הוראות הרכבה למפעל.',
      visibility: 'internal',
    },
    {
      num: '07',
      type: 'PDF',
      name: 'Product File',
      version: '01',
      status: 'in-review',
      notes: 'מסמך תיק מוצר נוכחי.',
      visibility: 'internal',
    },
    {
      num: '08',
      type: 'BOM',
      name: 'Main Components BOM',
      version: '01',
      status: 'in-review',
      notes: 'רשימת רכיבים מרכזיים וכמויות, ללא נתוני ספקים ועלויות.',
      visibility: 'internal',
    },
    {
      num: '09',
      type: 'QC',
      name: 'Final QC Checklist',
      version: '01',
      status: 'approved',
      notes: 'נדרש להכין מסמך בדיקת איכות סופית.',
      visibility: 'internal',
    },
    {
      num: '10',
      type: 'Packaging',
      name: 'Packaging Reference',
      version: '01',
      status: 'missing',
      notes: 'מסמך אריזה, תוויות והנחיות משלוח לא הושלם.',
      visibility: 'internal',
    },
  ],
  documentsNote:
    'מידע מסחרי, ספקים ועלויות מנוהלים במסמך פנימי נפרד ואינם חלק מתיק מוצר זה.',
  versionHistory: [
    {
      version: '01',
      year: '2026',
      change:
        'יצירת תיק מוצר ראשוני עבור SMOKE VENT Control Box, כולל סקירת מוצר, רכיבים, חומרים, מידות וקבצים קשורים.',
      updatedBy: 'SHEVTECH',
      status: 'in-review',
    },
  ],
  technicalNotice:
    'תיק מוצר זה אינו מחליף שרטוטים הנדסיים, קבצי CAD, הוראות הרכבה או מסמכי QC. במקרה של סתירה בין מסמכים, יש לאמת מול הגרסה המאושרת האחרונה.',
  visibility: 'public',
};
