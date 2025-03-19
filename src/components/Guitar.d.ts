import type { Guitar } from "../types/types";
type GuitarProps = {
    guitarra: Guitar;
    addToCart: (item: Guitar) => void;
};
export default function Guitarra({ guitarra, addToCart }: GuitarProps): import("react/jsx-runtime").JSX.Element;
export {};
