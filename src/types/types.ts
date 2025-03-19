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


//Seleccionando sólo algunos elementos
export type CartItem_2 = Pick<Guitar, 'id' | 'name'> 

// & : le dice a ts que se van a agregar otras propiedades que 
// no están en el type heredado
export type CartItem_3 = Pick<Guitar, 'id' | 'name'> & {
    quantity : number
}

