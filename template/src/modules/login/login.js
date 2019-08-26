import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            loading: false,
            loginVisible: false,
            erroLogin: null,
            iconError: 'wifi'
        }
    },
    mounted() {
        if (!this.seLogado()) {
            setTimeout(() => {
                this.loginVisible = true
            }, 200)
        } else {
            this.exibirTelaPrincipal()
        }
    },
    computed: {
        ...mapState('loginStore', {
            usuario: state => state.usuario
        })
    },
    methods: {
        ...mapActions('loginStore', [
            'login',
            'limparStore'
        ]),
        seLogado() {
            return this.$storage.get('usuario', false)
        },
        signIn() {
            this.loading = true
            this.login(this.usuario).then(resp => {
                this.loading = false
                this.armazenarDadosUsuario()
            }).catch(e => {
                this.loading = false
                if (e.data) {
                    this.iconError = 'desktop_access_disabled'
                    this.erroLogin = e.data.mensagem
                } else {
                    this.iconError = 'wifi'
                    this.erroLogin = this.$t('servico_indisponivel')
                }
            })
        },
        armazenarDadosUsuario() {
            this.$storage.set('usuario', { ...this.usuario })

            this.exibirTelaPrincipal()
        },
        exibirTelaPrincipal() {
            this.$router.push('/estatisticas')
        }
    }
}
