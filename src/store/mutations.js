import Vue from 'vue'
import * as types from './mutation-types'

export default {
    [types.SET_ACTIVE_TYPE](state, { type }) {
        state.activeType = type
    },
    [types.SET_ITEM](state,{ id, items }){

        
        Vue.set(state.items,id,items)
        console.log(state.items)
    }
}