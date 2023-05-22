export default {
  PRODUCTS(state) {
    return state.products
  },

  // CART                           
  CART(state) {
    return state.cart
  },
  CART_SUM(state) {
    let sum = 0
    state.cart.forEach(el => sum = sum + el.price)
    return sum
  },
  CART_QUANTITY(state) {
    return state.cart.length
  },
  // FAVORITES                           
  FAVORITES(state) {
    return state.favorites
  },

  // ORDERS                           
  ORDERS(state) {
    return state.orders
  },
}