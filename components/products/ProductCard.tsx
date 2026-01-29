import { motion } from 'framer-motion';
import { ShoppingCart, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/components/products/types';
import { useCart } from '@/hooks/useCart';
import { CartItem } from '../carts/types';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart, items } = useCart();
  const isInCart = items.some(
    (item: CartItem) => item.productId === product.id,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300"
    >
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 border border-emerald-500/30">
            <Sparkles className="w-3 h-3" />
            {product.badge}
          </span>
        </div>
      )}

      {/* Discount Badge */}
      {product.originalPrice && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/30">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
            {product.brand}
          </span>
          <span
            className={`text-xs font-medium uppercase tracking-wider ${
              product.category === 'gpu' ? 'text-emerald-400' : 'text-cyan-400'
            }`}
          >
            {product.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-emerald-400 transition-colors">
          {product.name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {Object.entries(product.specs)
            .slice(0, 4)
            .map(([key, value]) => (
              <div key={key} className="text-xs">
                <span className="text-zinc-500">{key}:</span>{' '}
                <span className="text-zinc-300">{value}</span>
              </div>
            ))}
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
          <div className="flex flex-col">
            {product.originalPrice && (
              <span className="text-sm text-zinc-500 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>
          </div>

          <Button
            onClick={() => addToCart(product.id)}
            disabled={isInCart}
            className={`rounded-xl px-4 py-2 transition-all ${
              isInCart
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add
              </>
            )}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
