import Vue from 'vue'
import Vuex from 'vuex'

import loginStore from './modules/login/loginStore'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            loginStore: { namespaced: true, ...loginStore }
        },

        state: {
            loading: false
        },

        mutations: {
            LIMPAR_STORE(state) {
                state.loading = false
            },
            SHOW_LOADING(state, root) {
                root.$vs.loading({
                    type: 'default'
                })
                state.loading = true
            },
            CLOSE_LOADING(state, root) {
                root.$vs.loading.close()
                state.loading = false
            },
            SHOW_NOTIFY(state, { root, title, text, color, fixed, icon, position }) {
                root.$vs.notify({
                    title: title,
                    text: text,
                    color: color,
                    fixed: fixed,
                    icon: icon,
                    position: position
                })
            },
            SHOW_VALIDATION_NOTIFY(state, { root, msgs }) {
                msgs.forEach(msg => {
                    if (!msg.includes('then')) {
                        root.$vs.notify({
                            title: root.$t('atencao'),
                            text: msg,
                            color: 'warning',
                            fixed: true,
                            icon: 'warning'
                        })
                    }
                })
            },
            SHOW_SUCCESS_NOTIFY(state, { root, msg }) {
                root.$vs.notify({
                    title: root.$t('sucesso'),
                    text: msg,
                    color: 'success',
                    icon: 'check',
                    position: 'top-right'
                })
            },
            SHOW_ERROR_NOTIFY(state, { root, msg }) {
                root.$vs.notify({
                    title: root.$t('falha'),
                    text: msg,
                    color: 'danger',
                    fixed: true,
                    icon: 'error',
                    position: 'bottom-right'
                })
            }
        },

        actions: {
            limparStore({ commit }) {
                commit('LIMPAR_STORE')
            },
            showLoading({ commit }, root) {
                commit('SHOW_LOADING', root)
            },
            closeLoading({ commit }, root) {
                commit('CLOSE_LOADING', root)
            },
            showNotify({ commit }, { root, title, text, color, icon, position }) {
                commit('SHOW_NOTIFY', { root, title, text, color, icon, position })
            },
            showValidationNotify({ commit }, { root, msgs }) {
                commit('SHOW_VALIDATION_NOTIFY', { root, msgs })
            },
            showSuccessNotify({ commit }, { root, msg }) {
                commit('SHOW_SUCCESS_NOTIFY', { root, msg })
            },
            showErrorNotify({ commit }, { root, msg }) {
                commit('SHOW_ERROR_NOTIFY', { root, msg })
            }
        },

        getters: {

        }
    })
}
