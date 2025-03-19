import { useState, useEffect, useMemo } from "react"
import { db } from "../data/db"
import type { CartItem } from "../types/types"

export const useCart = () => {

  //El local storage le he difícil inferir el tipo de dato
  const initialCart = () : CartItem [] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
  }

  const [data] = useState(db) //Se tiena la información en el state 
  const [cart, setCart] = useState(initialCart)

  const MIN_ITEMS = 1
  const MAX_ITEMS = 5

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]) //Cada vez que el carrito cambia, se manda a llamar localStorage


  function addToCart(item) {
    const itemExist = cart.findIndex(guitarra => guitarra.id === item.id)

    if (itemExist >= 0) {

      if (cart[itemExist].quantity >= MAX_ITEMS) return // No agregar más de 5 desde la tarjeta del carrito

      //console.log("Ya existe en el carrito") 
      const updateCart = [...cart] //Copia del State
      updateCart[itemExist].quantity++
      setCart(updateCart)
    } else {
      console.log("No existe en el carrito...agregando")
      item.quantity = 1 // Se agrega una nueva propiedad al json de cada elemento en el carrito
      setCart([...cart, item])
    }

  }

  function removeFromCart(id) {
    //console.log("removiendo cart ... ", id)
    setCart(prevCart => prevCart.filter(guitarra => guitarra.id !== id))
  }

  function increaseQuantity(id) {
    //console.log("Incrementando", id)
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function decrementQuantity(id) {
    //console.log("Decremento de ... ", id)
    const updateCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updateCart)
  }

  function clearCart() {
    setCart([]) //Resetear carrito
  }

  //State derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]) //Solo se llama cuando el carrito cambia
  const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0))

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    decrementQuantity,
    increaseQuantity,
    clearCart,
    isEmpty,
    cartTotal
  }

}