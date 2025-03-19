import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
import { useCart } from "./hooks/useCart";
function App() {
    const { data, cart, addToCart, removeFromCart, decrementQuantity, increaseQuantity, clearCart, isEmpty, cartTotal } = useCart();
    return (_jsxs(_Fragment, { children: [_jsx(Header //Componente Hijo
            , { cart: cart, removeFromCart: removeFromCart, increaseQuantity: increaseQuantity, decrementQuantity: decrementQuantity, clearCart: clearCart, isEmpty: isEmpty, cartTotal: cartTotal }), _jsxs("main", { className: "container-xl mt-5", children: [_jsx("h2", { className: "text-center", children: "Nuestra Colecci\u00F3n" }), _jsx("div", { className: "row mt-5", children: // {código JS}
                        data.map((guitarra) => (_jsx(Guitar //Componente hijo
                        , { guitarra: guitarra, addToCart: addToCart }, guitarra.id)) // ()return implícito
                        ) })] }), _jsx("footer", { className: "bg-dark mt-5 py-5", children: _jsx("div", { className: "container-xl", children: _jsx("p", { className: "text-white text-center fs-4 mt-4 m-md-0", children: "GuitarLA - Todos los derechos Reservados" }) }) })] }));
}
export default App;
