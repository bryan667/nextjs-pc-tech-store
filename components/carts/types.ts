export interface CartItem {
  productId: string;
  quantity: number;
}

export type CartItemsMap = Record<string, CartItem>;

export interface CartContextType {
  items: CartItemsMap;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
