import type { Product } from '../../lib/types';
import { smokeVentControlBox } from './smoke-vent-control-box';

/**
 * Product registry — the single place a new product is wired in.
 * Adding Product 02 = add its data file + assets and list it here.
 */
export const products: Product[] = [smokeVentControlBox];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.visibility === 'public');
}

export function getPublicProducts(): Product[] {
  return products.filter((p) => p.visibility === 'public');
}
