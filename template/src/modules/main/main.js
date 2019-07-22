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
            this.$router.push('/login')
        }
    }
}
