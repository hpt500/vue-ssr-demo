import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)
export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            {
                name: 'comp1',
                path: '/comp1',
                component: ()=> import("R/comp1.vue")
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
