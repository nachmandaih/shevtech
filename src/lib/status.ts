import type { ItemStatus } from './types';

export const STATUS_LABELS: Record<ItemStatus, string> = {
  approved: 'מאושר',
  'in-review': 'בבדיקה',
  'needs-update': 'לעדכון',
  missing: 'חסר',
  draft: 'טיוטה',
};

/** Visual tone per status — mirrors the product-file badge colors. */
export const STATUS_TONES: Record<ItemStatus, 'positive' | 'caution' | 'alert' | 'neutral'> = {
  approved: 'positive',
  'in-review': 'caution',
  'needs-update': 'alert',
  missing: 'alert',
  draft: 'neutral',
};
