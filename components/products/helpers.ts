import type { CategoryFilter } from '@/components/products/types';
import {
  Laptop,
  Gpu,
  MemoryStick,
  Filter,
  Cpu,
  Monitor,
  HardDrive,
  PcCase,
} from 'lucide-react';
import { products } from './products-data';

const setOfCategories = new Set(products.map((product) => product.category));
export const allUniqueCategories = [...setOfCategories] as const;

export const categoryChoices: {
  value: CategoryFilter;
  label: string;
  icon: React.ElementType;
}[] = [{ value: 'all', label: 'All Products', icon: Filter }];

const categoryMap: Partial<
  Record<CategoryFilter, { label: string; icon: React.ElementType }>
> = {
  cpu: { label: 'CPUs', icon: Cpu },
  gpu: { label: 'Graphics Cards', icon: Gpu },
  ram: { label: 'Memory', icon: MemoryStick },
  laptop: { label: 'Laptops', icon: Laptop },
  monitor: { label: 'Monitors', icon: Monitor },
  storage: { label: 'Storage', icon: HardDrive },
  desktop: { label: 'Desktops', icon: PcCase },
};

for (const uniqueCategory of allUniqueCategories) {
  if (categoryMap[uniqueCategory]) {
    categoryChoices.push({
      value: uniqueCategory,
      label: categoryMap[uniqueCategory].label,
      icon: categoryMap[uniqueCategory].icon,
    });
  }
}
