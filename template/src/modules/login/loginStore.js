export default {
    state: {
        usuarioLogin: {}
    },

    mutations: {
        LIMPAR_STORE(state) {
            state.usuarioLogin = {}
        }
    },

    actions: {
        login({ commit }, usuario) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 400)
            })
        },
        reautenticar({ commit, state }) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 400)
            })
        }
    },

    getters: {
        limparStore({ commit }) {
            commit('LIMPAR_STORE')
        }
    }
}
