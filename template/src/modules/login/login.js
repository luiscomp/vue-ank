import { mapState, mapActions } from 'vuex'
export default {
    data() {
        return {
            usuario: {
                cpf: '123.456.789-00',
                senha: '123456',
                empresa: {
                    codigo: 1
                }
            },
            loading: false,
            loginVisible: false,
            erroLogin: null,
            iconError: 'wifi'
        }
    },
    mounted() {
        setTimeout(() => {
            this.loginVisible = true
        }, 200)
    },
    computed: {
        ...mapState('loginStore', {

        })
    },
    methods: {
        ...mapActions('loginStore', [
            'login'
        ]),
        signIn() {
            this.loading = true
            this.login(this.usuario).then(resp => {
                this.loading = false
                this.$router.push('/estatisticas')
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
        }
    }
}
