import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    'pt-br': {
        app_name: '{{ name }}',
        corporacao: '© 2019 {{ name }}. Todos os direitos reservados',
        login: 'Login',
        email: 'E-mail',
        codigo: 'Código',
        senha: 'Senha',
        entrar: 'Entrar',
        sair: 'Sair',
        cpf: 'CPF',
        esqueceu_sua_senha: 'Esqueceu sua senha?',
        estatisticas: 'Estatísticas',
        cadastros: 'Cadastros',
        catalogo: 'Catálogo',
        categorias: 'Categorias',
        produtos: 'Produtos',
        promocoes: 'Promoções',
        pedidos: 'Pedidos',
        grupos_atributos: 'Grupos/Atributos',
        filiais: 'Filiais',
        formas_pagamento: 'Formas de Pagamento',
        perfis: 'Perfis',
        usuarios: 'Usuarios',
        mes: 'Mês',
        visao_global: 'Visão Global',
        total_pedidos: 'Total de Pedidos',
        ticket_medio: 'Ticket Médio',
        faturamento_total: 'Faturamento Total',
        pedidos_com_cupom: 'Pedidos com Cupom'
    },
    'en': {
        app_name: '{{ name }}',
        corporacao: '© 2019 {{ name }}. All Rights Reserved',
        login: 'Login',
        email: 'E-mail',
        codigo: 'Code',
        senha: 'Password',
        entrar: 'Sign In',
        sair: 'Logout',
        cpf: 'CPF',
        esqueceu_sua_senha: 'Forgot your password?',
        estatisticas: 'Dashboard',
        cadastros: 'Registrations',
        catalogo: 'Menu',
        categorias: 'Categories',
        produtos: 'Products',
        promocoes: 'Special Offers',
        pedidos: 'Orders',
        grupos_atributos: 'Groups/Attributes',
        filiais: 'Branches',
        formas_pagamento: 'Payment methods',
        perfis: 'Profiles',
        usuarios: 'Users',
        mes: 'Month',
        visao_global: 'Overview',
        total_pedidos: 'Total Orders',
        ticket_medio: 'Average Ticket',
        faturamento_total: 'Total Billing',
        pedidos_com_cupom: 'Orders with Voucher'
    }
}

const i18n = new VueI18n({
    locale: 'pt-br', // set locale
    fallbackLocale: 'pt-br', // set fallback locale
    messages // set locale messages
})

export default i18n
