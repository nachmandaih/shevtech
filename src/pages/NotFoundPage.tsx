import { useEffect } from 'react';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';

export function NotFoundPage(): JSX.Element {
  useEffect(() => {
    document.title = 'העמוד לא נמצא — SHEVTECH';
  }, []);

  return (
    <div className="container notfound">
      <h1>העמוד לא נמצא</h1>
      <p>הקישור שהגעתם אליו אינו קיים או שהמוצר אינו זמין להצגה.</p>
      <Link to="/" className="btn btn--primary">
        חזרה לעמוד הבית
      </Link>
    </div>
  );
}
