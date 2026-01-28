export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'gpu' | 'ram' | 'laptop';
  price: number;
  originalPrice?: number;
  image: string;
  specs: Record<string, string>;
  inStock: boolean;
  badge?: string;
}
