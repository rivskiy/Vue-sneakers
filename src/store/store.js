import { createStore } from 'vuex'
import axios from 'axios'
import { URL } from '@/constants'

export default createStore({
  state: {
    products: [],
    cart: [],
    favourites: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    FAVOURITES(state) {
      return state.favourites
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE_CART_ITEM: (state, cartItem) => {
      state.cart = state.cart.filter(el => el !== cartItem)
    },
    SET_FAVOURITES: (state, product) => {
      if (state.favourites.find(el => el === product)) {
        state.favourites = state.favourites.filter(el => el !== product)
      } else {
        state.favourites.push(product)
      }
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios(URL, {
        method: 'GET'
      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    REMOVE_CART_ITEM({commit}, cartItem) {
      commit('REMOVE_CART_ITEM', cartItem)
    },
    ADD_TO_FAVOURITES({commit}, product) {
      commit('SET_FAVOURITES', product)
    },
  },
  modules: {
  }
})
