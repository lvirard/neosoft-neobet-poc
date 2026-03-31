# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Publi sur GitHub Pages
```sh
# Dans vite.config.ts : rajouter url que github rajoute automatiquement (nom du repo)
base: '/neosoft-neobet-poc/' 
#Ajout github en plus de gitlab
git remote add github https://github.com/lvirard/neosoft-neobet-poc.git
#si modif à intégrer : créer une branche dédiée
git checkout -b gh-pages
#effectuer puis committer les changements sur cette branche
#faire de "vue-project" la racine de la branche - bien se placer à la racine du projet
git subtree split --prefix=vue-project -b deploy-vue
# checkout vers la branche 
git checkout deploy-vue
#push sur la main de github
git push github deploy-vue:main
```