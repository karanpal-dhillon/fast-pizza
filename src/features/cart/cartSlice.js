import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload
      state.cart.push(item)
    },
    deleteItem(state, action) {
      console.log(action.payload)
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload)
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.id)
      if (!item || item.quantity < 2) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = []
    }


  }
})

export const { addItem, deleteItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum += item.quantity, 0)
export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum += item.totalPrice, 0)
export default cartSlice.reducer
