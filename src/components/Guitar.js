import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
//Este componente es el compornente hijo, su padre es App.jsx
// void : No retorna nada
export default function Guitarra({ guitarra, addToCart }) {
    const { name, image, description, price } = guitarra;
    return (_jsxs("div", { className: "col-md-6 col-lg-4 my-4 row align-items-center", children: [_jsx("div", { className: "col-4", children: _jsx("img", { className: "img-fluid", src: `/img/${image}.jpg`, alt: "imagen guitarra" }) }), _jsxs("div", { className: "col-8", children: [_jsx("h3", { className: "text-black fs-4 fw-bold text-uppercase", children: name }), _jsx("p", { children: description }), _jsxs("p", { className: "fw-black text-primary fs-3", children: ["$", price] }), _jsx("button", { type: "button", className: "btn btn-dark w-100", onClick: () => addToCart(guitarra), children: "Agregar al Carrito" })] })] }));
}
