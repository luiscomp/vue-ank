export default {
    data() {
        return {
            menus: [
                { name: 'estatisticas', icon: 'bar_chart', path: '/estatisticas' },
                { name: 'pedidos', icon: 'timer', path: '/pedidos' },
                {
                    name: 'catalogo',
                    submenus: [
                        { name: 'grupos_atributos', icon: 'group_work', path: '/grupoatributos' },
                        { name: 'categorias', icon: 'category', path: '/categorias' },
                        { name: 'produtos', icon: 'fastfood', path: '/produtos' },
                        { name: 'promocoes', icon: 'local_offer', path: '/promocoes' }
                    ]
                },
                {
                    name: 'cadastros',
                    submenus: [
                        { name: 'filiais', icon: 'store_mall_directory', path: '/filiais' },
                        { name: 'formas_pagamento', icon: 'payment', path: '/formaspagamento' },
                        { name: 'perfis', icon: 'how_to_reg', path: '/perfis' },
                        { name: 'usuarios', icon: 'person', path: '/usuarios' }
                    ]
                }
            ]
        }
    },
    methods: {
        sair() {
            this.$vs.dialog({
                type: 'confirm',
                color: 'primary',
                title: this.$t('atencao'),
                text: this.$t('deseja_sair'),
                acceptText: this.$t('sim'),
                cancelText: this.$t('nao'),
                accept: () => {
                    this.$router.push('/')
                    this.$storage.clear(true)
                    this.limparTodosStores()
                }
            })
        },
        limparTodosStores() {
            this.$store.dispatch('loginStore/limparStore')
            this.$store.dispatch('limparStore')
        }
    }
}
