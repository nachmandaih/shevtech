import type { JSX } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/brand/shevtech-logo.png';

export function Header(): JSX.Element {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="SHEVTECH — לעמוד הבית">
          <img src={logo} alt="SHEVTECH — שחרור עשן, חסמי אש, תאורה טבעית" />
        </Link>
        <nav className="site-nav" aria-label="ניווט ראשי">
          <NavLink to="/" className="site-nav__link" end>
            בית
          </NavLink>
          <NavLink to="/products" className="site-nav__link">
            מוצרים
          </NavLink>
          <NavLink to="/future-products" className="site-nav__link">
            העתיד
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
