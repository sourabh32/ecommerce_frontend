import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const {items} = useSelector(state => state.cartReducer)
    console.log(items)
  return (
    <div>Cart</div>
  )
}

export default Cart