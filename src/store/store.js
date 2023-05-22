import { createStore } from 'vuex'
import axios from 'axios'
import { URL, CART_URL, FAVORITES_URL, ORDERS_URL } from '@/constants'

export default createStore({
  state: {
    products: [],
    cart: [],
    favorites: [],
    orders: [],
    showCart: false,
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
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
    SHOW_CART(state) {
      return state.showCart
    },
    FAVORITES(state) {
      return state.favorites
    },
    ORDERS(state) {
      return state.orders
    },
    SEARCH_VALUE(state) {
      return state.searchValue
    }
  },
  mutations: {
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

    SHOW_CART: state => state.showCart = !state.showCart,

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



    //                        ORDERS                           

    GET_ORDERS: (state, products) => state.orders = products,

    ADD_ORDER: (state, orderItems) => {
      state.orders.push(orderItems)
    },
  },




  actions: {
    GET_PRODUCTS({ commit, state }) {
      if (state.products.length < 1) {
        axios.get(URL)
          .then((products) => commit('GET_PRODUCTS', products.data))
          .catch((error) => console.log(error))
      }
    },



    // CART                           
    GET_CART({ commit }) {
      axios.get(CART_URL)
        .then((products) => commit('GET_CART', products.data))
        .catch((error) => console.log(error))
    },

    ADD_CART_ITEM({ commit, state }, product) {
      if (state.cart.find(el => el === product)) {
        axios.delete(`${CART_URL}/${product.id}`)
          .then(() => commit('REMOVE_CART_ITEM', product))
      } else {
        axios.post(CART_URL, product)
          .then(() => commit('ADD_CART_ITEM', product))
          .catch((error) => console.log(error))
      }
    },

    REMOVE_CART_ITEM({ commit }, product) {
      axios.delete(`${CART_URL}/${product.id}`)
        .then(() => commit('REMOVE_CART_ITEM', product))
        .catch((error) => console.log(error))
    },

    // у mockAPI нет replace, по-этому удаляем адементы по отдельности
    async CLEAR_CART({ commit }, ids) {
      for (let i = 1; i <= ids; i++) {
        await axios.delete(`${CART_URL}/${i}`)
      }
      commit('CLEAR_CART')
    },



    // FAVORITES                           

    GET_FAVORITES({ commit, state }) {
      if (state.favorites.length < 1) {
        axios.get(FAVORITES_URL)
          .then((response) => commit('GET_FAVORITES', response.data))
      }
    },

    ADD_FAVORITES({ commit, state }, product) {
      if (state.favorites.find(el => el === product)) {
        axios.delete(`${FAVORITES_URL}/${product.id}`)
          .then(() => commit('REMOVE_FAVORITES', product))
      } else {
        axios.post(FAVORITES_URL, product)
          .then(() => commit('ADD_FAVORITES', product))
      }
    },




    // ORDERS                           

    GET_ORDERS({ commit, state }) {
      if (state.orders.length < 1) {
        axios.get(ORDERS_URL)
          .then(({ data }) => commit('GET_ORDERS', data.map(obj => obj.items )))
      }
    },

    ADD_ORDER({ commit }, cartItems) {
      axios.post(ORDERS_URL, { items: cartItems, })
        .then(() => commit('ADD_ORDER', cartItems))
    },
  },


  modules: {
  }
})
