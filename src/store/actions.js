import API from '@/public/utils/api';
// xyx test
export default {
  FETCH_LIST_DATA({ commit , dispatch ,state },{ type, fun, id }){
    console.log(id)
    commit('SET_ACTIVE_TYPE', { type })
    if(!state.items[id]){
      return fun({
        start: id
      }).then((data) => {
        console.log(data)
        commit('SET_ITEM',{ id: id, items: data.data||data })
      })
    }
    
   
  }
}



