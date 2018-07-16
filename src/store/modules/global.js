import _ from 'lodash'
import Vue from 'vue'
import * as types from '../mutation-types'

const state = {
  activeType: null,
  itemsPerPage: 20,
  items: {},
  lists: {
    comp1: []
  }
}

const mutations = {
  [types.SET_ACTIVE_TYPE](state, { type }) {
    state.activeType = type
  },
  // 测试文件
  [types.TEST_FN](state, { items }) {
    console.log(items) 
    items.forEach(item => {
      if(item){
        Vue.set(state.items,item.id,item)
        // item.forEach(it => {
        //   Vue.set(state.items,it.id,it)
        // })
      }
    })
    console.log(state.items)
  }
  // end
}

export default {
  state,
  mutations
}
