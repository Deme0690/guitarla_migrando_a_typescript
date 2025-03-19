// Es recomendable hacer un archivo aparte
//  porque esta función se usa varios componentes

export type Guitar={
    id: number
    name: string
    image: string
    description: string
    price: number
}

//Heredar y extender un type (Guitar &)
export type CartItem = Guitar &{    
    quantity: number
}

/*
//Puede ser un interface
export interface CartItem extends Guitar {    
    quantity: number
}
*/
