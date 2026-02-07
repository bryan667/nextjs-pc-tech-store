import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { CartProvider, useCart } from './useCart';
import { products } from '@/components/products/products-data';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe('useCart', () => {
  it('throws if used outside CartProvider', () => {
    expect(() => renderHook(() => useCart())).toThrow(
      'useCart must be used within a CartProvider',
    );
  });

  it('adds items and increments quantity', () => {
    const productId = products[0].id;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => result.current.addToCart(productId));
    expect(result.current.items[productId]?.quantity).toBe(1);
    expect(result.current.totalItems).toBe(1);

    act(() => result.current.addToCart(productId));
    expect(result.current.items[productId]?.quantity).toBe(2);
    expect(result.current.totalItems).toBe(2);
  });

  it('removes items from the cart', () => {
    const productId = products[0].id;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => result.current.addToCart(productId));
    expect(result.current.items[productId]).toBeDefined();

    act(() => result.current.removeFromCart(productId));
    expect(result.current.items[productId]).toBeUndefined();
    expect(result.current.totalItems).toBe(0);
  });

  it('updates quantity and removes when quantity <= 0', () => {
    const productId = products[0].id;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => result.current.updateQuantity(productId, 3));
    expect(result.current.items[productId]?.quantity).toBe(3);
    expect(result.current.totalItems).toBe(3);

    act(() => result.current.updateQuantity(productId, 0));
    expect(result.current.items[productId]).toBeUndefined();
    expect(result.current.totalItems).toBe(0);
  });

  it('clears the cart', () => {
    const productId = products[0].id;
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => result.current.addToCart(productId));
    act(() => result.current.clearCart());

    expect(Object.keys(result.current.items)).toHaveLength(0);
    expect(result.current.totalItems).toBe(0);
  });

  it('calculates total price correctly', () => {
    const productA = products[0];
    const productB = products[2];
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => result.current.updateQuantity(productA.id, 2));
    act(() => result.current.updateQuantity(productB.id, 1));

    const expectedTotal = productA.price * 2 + productB.price * 1;
    expect(result.current.totalPrice).toBe(expectedTotal);
  });
});
