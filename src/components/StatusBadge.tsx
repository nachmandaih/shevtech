import type { JSX } from 'react';
import type { ItemStatus } from '../lib/types';
import { STATUS_LABELS, STATUS_TONES } from '../lib/status';

export function StatusBadge({ status }: { status: ItemStatus }): JSX.Element {
  return (
    <span className={`status-badge status-badge--${STATUS_TONES[status]}`}>
      {STATUS_LABELS[status]}
    </span>
  );
}
