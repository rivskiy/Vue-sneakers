export default {
  GET_PRODUCTS: (state, products) => state.products = products,

  // CART                           
  GET_CART: (state, products) => state.cart = products,

  ADD_CART_ITEM: (state, product) => {
    state.products.forEach(el => {
      if (el === product) {
        el.inCart = true
      }
    })
    product.id = state.cart.length + 1
    state.cart.push(product)
  },

  REMOVE_CART_ITEM: (state, product) => {
    state.products.forEach(el => {
      if (el === product) {
        el.inCart = false
      }
    })
    state.cart = state.cart.filter(el => el !== product)
  },

  SHOW_CART: state => {
    state.stateCart.isShow = !state.stateCart.isShow
    state.stateCart.isOrdered = false
  },

  CLEAR_CART: state => {
    state.cart = []
    state.products.forEach(el => el.inCart = false)
  },

  // FAVORITES                           
  GET_FAVORITES: (state, products) => {
    products.map(el => el.inFavorites = true)
    state.favorites = products
  },

  ADD_FAVORITES: (state, product) => {
    state.products.forEach(el => {
      if (el === product) {
        el.inFavorites = true
      }
    })
    product.id = state.favorites.length + 1
    state.favorites.push(product)
  },

  REMOVE_FAVORITES: (state, product) => {
    state.products.forEach(el => {
      if (el === product) {
        el.inFavorites = false
      }
    })
    state.favorites = state.favorites.filter(el => el.id !== product.id)
  },

  // ORDERS                           
  GET_ORDERS: (state, products) => state.orders = products,

  ADD_ORDER: (state, orderItems) => {
    state.stateCart.isOrdered = true
    state.orders.push(orderItems)
  },

  CLEAR_ORDERS: (state) => state.orders = [],

  LOADING: (state) => state.isLoading = false
}