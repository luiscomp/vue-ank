# {{ name }}
![document version 1.0](https://img.shields.io/badge/vers%C3%A3o-1.0-green.svg)

{{ description }}

> #### Project Organization:
```
.
├── public
├── src
|   ├── assets
|   |   ├── fonts ---------------- Folder of fonts
|   |   └── imagens -------------- Folter of imagens
|   ├── components
|   |   ├── modals --------------- Folder to modal components
|   |   ├── templates ------------ Folder to generic components
|   |   └── _index.js ------------ File to import all modals components and generics components
|   ├── modules
|   |   ├── estatisticas --------- Dashboard module example
|   |   ├── login ---------------- Login module example
|   |   └── main ----------------- Main module
|   ├── plugins
|   |   ├── i18n.js -------------- Internationalization file with plugin i18n
|   |   └── utils.js ------------- Plugin of utils methods
|   ├── router
|   |   └── router.js ------------ Router file
|   ├── schemas
|   |   ├── Categoria.js --------- Schema example
|   |   └── Validador.js --------- Validator module for schemas
|   ├── scss
|   |   └── base ----------------- Folder of variables of scss
|   |   └── pages ---------------- Folder to pages with scss
|   |   └── theme ---------------- Folder of theme base scss file
|   |   └── style.scss------------ Style file
|   └── utils
|       ├── Constantes.json ------ Constants file
|       ├── Requests.json -------- Configuration file of requests
|       ├── Responses.json ------- Response codes requests file
|       └── Utils.json ----------- Utils methods file
├── .browserslistrc
├── .editorconfig
├── .eslintrc.js
├── .gitignore
├── babel.config.js
├── postcss.config.js
├── package.json
└── README.md
```


> ## Project setup
```
npm install
```

> ### Compiles and hot-reloads for development
```
npm run serve
```

> ### Compiles and minifies for production
```
npm run build
```