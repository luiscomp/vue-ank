export default {
    install(Vue, options) {
        Vue.prototype.$util = {
            formatarMoeda: (valor, currency = undefined) => {
                return currency
                    ? valor !== undefined ? valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : 0.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                    : valor !== undefined ? valor.toLocaleString('pt-br', { minimumFractionDigits: 2 }) : 0.00.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            }
        }
    }
}
