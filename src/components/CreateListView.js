import ItemList from './comp1.vue'

const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

import Service from './test/service.js'

export default function createListView (type) {
  return {
    name: `${type}-stories-view`,

    asyncData ({ store, route }) {
      console.log(store)
      return store.dispatch('FETCH_LIST_DATA', { type:type, fun:Service.gamePost, id:route.params.page||1 })
    },

    title: camelize(type),

    render (h) {
      return h(ItemList, { props: { type }})
    }
  }
}
