import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  id: string,
  productName: string,
  inventory: number,
  price: number,
  quantity: number,
  unit: number,
  cover: string,
  description: string
}

export interface CartInfo {
  cartLists: Map<string, CartItem>,
  totalPrice: number,
  currencySymbol: string,
  currency: string,
  unit: number
}

const countTotalPrice = (state) => {
  let totalPrice = 0
  state.cartLists.forEach(i => {
    totalPrice += i.price*i.quantity
  })
  state.totalPrice = totalPrice/state.unit
}
const cartReducer = createSlice({
  name: 'cartInfo',
  initialState: () => {
    const cartLists = new Map<string, CartItem>()
    return {
      cartLists,
      totalPrice: 0,
      currency: '',
      currencySymbol: '',
      unit: 1
    }
  },
  reducers: {
    setCartLists(state, action) {
      const session: CartItem = action.payload
      state.cartLists.set(session.id, session)

      countTotalPrice(state)
    },
    removeCartItem(state, action) {
      const productId = action.payload
      state.cartLists.delete(productId)
      countTotalPrice(state)
    },
    setCurrency(state, action) {
      const {
        unit,
        currency,
        currencySymbol
      } = action.payload
      state.unit = unit
      state.currency = currency
      state.currencySymbol = currencySymbol
    }
  }
})

export const {
  setCartLists,
  setCurrency,
  removeCartItem
} = cartReducer.actions

export default cartReducer.reducer