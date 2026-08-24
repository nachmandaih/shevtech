import type { JSX } from 'react';
import logo from '../assets/brand/shevtech-logo.png';

export function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <img src={logo} alt="SHEVTECH" />
        </div>
        <p className="site-footer__meta">
          מוצרי בקרה ובטיחות בתחומי שחרור עשן, חסמי אש ותאורה טבעית.
        </p>
        <div className="site-footer__legal">
          <span>SHEVTECH © 2026</span>
          <span>
            המידע באתר מיועד להצגת המוצר; המקור המחייב הוא המסמכים ההנדסיים המאושרים.
          </span>
        </div>
      </div>
    </footer>
  );
}
