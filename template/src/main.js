import Vue from 'vue'
import Vuesax from 'vuesax'
import { Vue2Storage } from 'vue2-storage'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import i18n from './plugins/i18n'
import VuejsClipper from 'vuejs-clipper'
import Components from './components/_index'
import Utils from './plugins/utils'
import { inicializarFirebase } from './utils/FirebaseConfig'

import './scss/style.scss'

import * as VueGoogleMaps from '../node_modules/vue2-google-maps/dist/main'

import { createStore } from './appStore'
import { createRouter } from './router/router'

Vue.use(Utils)
Vue.use(VuejsClipper)
Vue.use(Vuesax, {
    theme: {
        colors: {
            primary: '#0984e3',
            success: '#27ae60',
            danger: '#FA3D40',
            warning: '#f1c40f',
            dark: '#2c3e50'
        }
    }
})
Vue.use(Vue2Storage, {
    prefix: 'base-testes_',
    driver: 'local',
    ttl: (60 * 60 * 8 * 1000) // 8 hora
})
Vue.use(VueTheMask)
Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
})

inicializarFirebase()

Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
})

Vue.config.productionTip = false

export const store = createStore()
export const router = createRouter()

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
