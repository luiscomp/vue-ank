var i18n = require('../plugins/i18n')
var mensagens = i18n.default.messages[i18n.default.locale]

const schema = {
    type: 'object',
    required: [ 'nome' ],
    properties: {
        nome: { type: 'string', minLength: 1, default: null }
    },
    errorMessage: {
        required: {
            nome: mensagens.nome_obrigatorio
        },
        properties: {
            nome: mensagens.nome_obrigatorio
        }
    }
}

module.exports = schema
