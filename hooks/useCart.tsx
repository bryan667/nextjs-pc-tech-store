'use client';
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import type { CartContextType, CartItemsMap } from '@/components/carts/types';
import { products } from '@/components/products/products-data';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItemsMap>({});

  const addToCart = useCallback((productId: string) => {
    setItems((prev) => {
      const existing = prev[productId];
      if (existing) {
        return {
          ...prev,
          [productId]: { ...existing, quantity: existing.quantity + 1 },
        };
      }
      return { ...prev, [productId]: { productId, quantity: 1 } };
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setItems((prev) => {
      if (!prev[productId]) {
        return prev;
      }
      const { [productId]: _removed, ...rest } = prev;
      return rest;
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => {
        if (!prev[productId]) {
          return prev;
        }
        const { [productId]: _removed, ...rest } = prev;
        return rest;
      });
      return;
    }
    setItems((prev) => ({
      ...prev,
      [productId]: { productId, quantity },
    }));
  }, []);

  const clearCart = useCallback(() => {
    setItems({});
  }, []);

  const totalItems = useMemo(
    () => Object.values(items).reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  const totalPrice = useMemo(
    () =>
      Object.values(items).reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId);
        return sum + (product?.price || 0) * item.quantity;
      }, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
