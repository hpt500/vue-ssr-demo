import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router)

const createListView = id => () => import("R/CreateListView").then(m => m.default(id))

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'comp1',
                path: '/comp1/:page(\\d+)?',
                component: createListView('comp1')
            },
            {
                name: 'comp2',
                path: '/comp2',
                component: ()=> import("R/comp2.vue")
            },
            { path: '/', redirect: '/comp1' }
        ]
    })
}
