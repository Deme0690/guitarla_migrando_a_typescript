import type { Guitar, CartItem } from "../types/types";
export declare const useCart: () => {
    data: Guitar[];
    cart: CartItem[];
    addToCart: (item: Guitar) => void;
    removeFromCart: (id: Guitar["id"]) => void;
    decrementQuantity: (id: Guitar["id"]) => void;
    increaseQuantity: (id: Guitar["id"]) => void;
    clearCart: () => void;
    isEmpty: boolean;
    cartTotal: number;
};
