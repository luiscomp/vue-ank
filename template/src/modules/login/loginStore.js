export default {
    state: {

    },

    mutations: {

    },

    actions: {
        login({ commit }, usuario) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve()
                }, 400)
            })
        }
    },

    getters: {

    }
}
