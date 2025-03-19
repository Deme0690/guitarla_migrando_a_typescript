// Es recomendable hacer un archivo aparte
//  porque esta función se usa varios componentes

export type Guitar={
    id: number
    name: string
    image: string
    description: string
    price: number
}

export type CartItem={
    id: number
    name: string
    image: string
    description: string
    price: number
    quantity: number
}