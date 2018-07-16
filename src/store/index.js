// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
// import modules from './modules/index'
Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      activeType: null,
      itemsPerPage: 20,
      items: {},
      lists: {
        
      }
    },
    actions,
    getters,
    mutations,
    // modules,
    strict: false
  })
}
