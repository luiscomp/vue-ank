import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import i18n from './plugins/i18n'
import VuejsClipper from 'vuejs-clipper'
import Components from './components/_index'
import Utils from './plugins/utils'

import './scss/style.scss'

import * as VueGoogleMaps from '../node_modules/vue2-google-maps/dist/main'

import { createStore } from './appStore'
import { createRouter } from './router/router'

Vue.use(Utils)
Vue.use(VuejsClipper)
Vue.use(Vuesax)
Vue.use(VueTheMask)
Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
})

Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
})

Vue.config.productionTip = false

var store = createStore()
var router = createRouter()

new Vue({
    i18n,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
