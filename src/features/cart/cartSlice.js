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
      state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
    },
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.pizzaId === action.payload)
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.id)
      item.quantity--;
      if (item.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action)
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
export const getQuantityById = (id) => state => state.cart.cart.find(item => item.pizzaId === id)?.quantity || 0
export default cartSlice.reducer
