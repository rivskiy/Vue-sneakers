import { createStore } from 'vuex'
import getters from '@/store/getters/getters'
import mutations from '@/store/mutations/mutations'
import actions from '@/store/actions/actions'


export default createStore({
  state: {
    products: [],
    cart: [],
    favorites: [],
    orders: [],
    stateCart: {
      isShow: false,
      isOrdered: false
    },
    isLoading: true
  },

  getters,

  mutations,

  actions,
})
