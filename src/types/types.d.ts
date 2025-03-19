export type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
};
export type CartItem = Guitar & {
    quantity: number;
};
export type CartItem_2 = Pick<Guitar, 'id' | 'name'>;
export type CartItem_3 = Pick<Guitar, 'id' | 'name'> & {
    quantity: number;
};
