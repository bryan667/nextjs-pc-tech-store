import { motion, AnimatePresence } from 'framer-motion';
import { ProductCard } from '@/components/products/ProductCard';
import { Button } from '@/components/ui/button';
import { Filter, Grid3X3, LayoutList } from 'lucide-react';
import { useState } from 'react';
import { products } from '@/components/products/products-data';
import { categoryChoices } from './products/helpers';
import { CategoryFilter, SortOption } from './products/types';

export default function ProductGridMotion() {
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = products
    .filter((product) => {
      if (category === 'all') return true;
      return product.category === category;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Premium Components
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Handpicked selection of the finest GPUs and RAM modules for
          enthusiasts and professionals alike.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8"
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categoryChoices.map((cat) => (
            <Button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              variant={category === cat.value ? 'default' : 'outline'}
              className={`rounded-xl gap-2 ${
                category === cat.value
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0'
                  : 'border-zinc-700 text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Sort & View */}
        <div className="flex items-center gap-4">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-emerald-500/50"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A-Z</option>
          </select>

          <div className="flex items-center gap-1 bg-zinc-900 rounded-xl p-1 border border-zinc-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list'
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Results Count */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6"
      >
        <span className="text-sm text-zinc-500">
          Showing {filteredProducts.length} product
          {filteredProducts.length !== 1 ? 's' : ''}
        </span>
      </motion.div>

      {/* Product Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={category + sortBy + viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.1 }}
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
              : 'flex flex-col gap-4'
          }
        >
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4">
            <Filter className="w-8 h-8 text-zinc-600" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No products found
          </h3>
          <p className="text-zinc-500">
            Try adjusting your filters to see more results.
          </p>
        </motion.div>
      )}
    </>
  );
}
