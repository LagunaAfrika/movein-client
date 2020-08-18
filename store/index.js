import Vuex from 'vuex'
import property from './modules/property'
import user from './modules/user'
import search from './modules/search'
import agreement from './modules/agreement'

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      property,
      user,
      search,
      agreement
    },
    state: {

    }
  })
}

export default createStore
