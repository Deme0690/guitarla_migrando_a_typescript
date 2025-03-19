import type { CartItem, Guitar } from "../types/types";
type HeaderProps = {
    cart: CartItem[];
    removeFromCart: (id: Guitar['id']) => void;
    increaseQuantity: (id: Guitar['id']) => void;
    decrementQuantity: (id: Guitar['id']) => void;
    clearCart: () => void;
    isEmpty: boolean;
    cartTotal: number;
};
export default function Header({ cart, removeFromCart, increaseQuantity, decrementQuantity, clearCart, isEmpty, cartTotal }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
