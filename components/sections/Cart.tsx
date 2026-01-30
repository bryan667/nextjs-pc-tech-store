import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/useCart';
import { products } from '@/components/products/products-data';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Cart({ isOpen, onClose }: CartProps) {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  const cartProducts = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    Your Cart
                  </h2>
                  <p className="text-sm text-zinc-500">{totalItems} item(s)</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5 text-zinc-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cartProducts.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-10 h-10 text-zinc-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-zinc-500 mb-6">
                    Start shopping to add items to your cart.
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-0"
                  >
                    Continue Shopping
                  </Button>
                </motion.div>
              ) : (
                <div className="space-y-4">
                  {cartProducts.map(({ product, quantity }, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-zinc-950 flex-shrink-0">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="text-xs text-zinc-500 uppercase tracking-wider">
                              {product.brand}
                            </p>
                            <h4 className="text-sm font-medium text-white truncate">
                              {product.name}
                            </h4>
                          </div>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-1.5 rounded-lg hover:bg-zinc-800 transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-zinc-500 hover:text-red-400" />
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity - 1)
                              }
                              className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                            >
                              <Minus className="w-3 h-3 text-zinc-400" />
                            </button>
                            <span className="w-8 text-center text-sm text-white">
                              {quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                              className="w-7 h-7 rounded-lg bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors"
                            >
                              <Plus className="w-3 h-3 text-zinc-400" />
                            </button>
                          </div>

                          {/* Price */}
                          <span className="text-sm font-semibold text-white">
                            ${(product.price * quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartProducts.length > 0 && (
              <div className="p-6 border-t border-zinc-800 space-y-4">
                {/* Clear Cart */}
                <button
                  onClick={clearCart}
                  className="text-sm text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear Cart
                </button>

                {/* Subtotal */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Subtotal</span>
                    <span className="text-zinc-300">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-zinc-500">Shipping</span>
                    <span className="text-emerald-400">Free</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-zinc-800">
                    <span className="text-white font-medium">Total</span>
                    <span className="text-2xl font-bold text-white">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 py-6 text-lg rounded-xl group">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="outline"
                  onClick={onClose}
                  className="w-full border-zinc-700 text-zinc-500 hover:text-white hover:bg-zinc-900"
                >
                  Continue Shopping
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
