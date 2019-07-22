module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

		// minhas configurações
		"no-tabs": 0,
        "indent": [2, 4],
        "vue/html-indent": [2, 4],
        "vue/script-indent": [2, 4, {"SwitchCase": 1}],
        "space-before-function-paren": ["error", "never"],
        "object-curly-spacing": ["error", "always"],
        "array-bracket-spacing": ["error", "always"],
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
