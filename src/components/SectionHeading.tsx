import type { JSX, ReactNode } from 'react';

interface SectionHeadingProps {
  /** Optional section number chip, e.g. "03". */
  num?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  id?: string;
}

export function SectionHeading({ num, title, subtitle, id }: SectionHeadingProps): JSX.Element {
  return (
    <div className="section-heading">
      <div className="section-heading__kicker" aria-hidden="true">
        {num ? <span className="section-heading__num">{num}</span> : null}
        <span className="section-heading__bar" />
      </div>
      <h2 className="section-heading__title" id={id}>
        {title}
      </h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </div>
  );
}
