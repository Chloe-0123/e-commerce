import React, { createContext, useState, ReactNode, SetStateAction, Dispatch } from "react";

interface CartProduct {
    cartProducts: object[];
    setCartProducts: Dispatch<SetStateAction<object[]>>;
}

export const CartContext = createContext<CartProduct>({
    cartProducts: [],
    setCartProducts: () => {}
});

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [cartProducts, setCartProducts] = useState<object[]>([]);

    return (
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartContext.Provider>
    );
}
