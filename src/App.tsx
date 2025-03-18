
import Header from "./components/Header"
import Guitar from "./components/Guitar"
import { useCart } from "./hooks/useCart"


function App() {

  const { data, cart, addToCart, removeFromCart, decrementQuantity, 
    increaseQuantity, clearCart, isEmpty, cartTotal} = useCart()
     
  return (
    <>    
      <Header //Componente Hijo
        cart = {cart} //prop nombreProp={valorProp}
        removeFromCart = {removeFromCart} 
        increaseQuantity = {increaseQuantity}
        decrementQuantity = {decrementQuantity}
        clearCart = {clearCart}
        isEmpty = {isEmpty}
        cartTotal = {cartTotal}
      /> 
        

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>


        <div className="row mt-5">
          { // {código JS}

            
            data.map( (guitarra) => 
              (<Guitar //Componente hijo
                key = {guitarra.id}
                guitarra = {guitarra} //props nombreProp = {valorProp}                
                addToCart = {addToCart} //prop 
              
              /> ) // ()return implícito
            )
          }                
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
