import { allUniqueCategories } from './product-helpers';
export interface Product {
  id: string;
  name: string;
  brand: string;
  category:
    | 'gpu'
    | 'ram'
    | 'laptop'
    | 'desktop'
    | 'cpu'
    | 'monitor'
    | 'storage';
  price: number;
  originalPrice?: number;
  image: string;
  specs: Record<string, string>;
  inStock: boolean;
  badge?: string;
}

export type SortOption = 'featured' | 'price-low' | 'price-high' | 'name';
export type CategoryFilter = 'all' | (typeof allUniqueCategories)[number];
