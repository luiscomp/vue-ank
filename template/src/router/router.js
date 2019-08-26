import Vue from 'vue'
import Router from 'vue-router'

function route(view) {
    return {
        path: view.toLowerCase(),
        name: view,
        component: () => import(`../modules/${view.toLowerCase()}/${view}View.vue`)
    }
}

Vue.use(Router)

export function createRouter() {
    const router = new Router({
        base: __dirname,
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/',
                component: () => import('../modules/login/LoginView.vue')
            },
            {
                path: '/',
                component: () => import('../modules/main/MainView.vue'),
                children: [
                    route('Estatisticas')
                ]
            },
            { path: '*', redirect: '/' }
        ]
    })

    router.beforeEach((to, from, next) => {
        next()
    })

    return router
}
