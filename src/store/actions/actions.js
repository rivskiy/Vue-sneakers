import axios from 'axios'
import { URL, CART_URL, FAVORITES_URL, ORDERS_URL } from '@/constants'

export default {
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
        .then(({ data }) => commit('GET_ORDERS', data.map(obj => obj.items)))
    }
  },

  ADD_ORDER({ commit }, cartItems) {
    axios.post(ORDERS_URL, { items: cartItems, })
      .then(() => commit('ADD_ORDER', cartItems))
  },

  async CLEAR_ORDERS({ commit }, ids) {
    for (let i = 1; i <= ids; i++) {
      await axios.delete(`${ORDERS_URL}/${i}`)
    }
    commit('CLEAR_ORDERS')
  }
}
