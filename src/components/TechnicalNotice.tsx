import type { JSX } from 'react';

interface TechnicalNoticeProps {
  title?: string;
  text: string;
}

/** The product-file "חשוב" callout — engineering source-of-truth disclaimer. */
export function TechnicalNotice({ title = 'חשוב', text }: TechnicalNoticeProps): JSX.Element {
  return (
    <div className="notice" role="note">
      <span className="notice__icon" aria-hidden="true">
        !
      </span>
      <div>
        <p className="notice__title">{title}</p>
        <p className="notice__text">{text}</p>
      </div>
    </div>
  );
}
