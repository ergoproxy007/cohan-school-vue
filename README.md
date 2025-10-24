# cohan-school-vue

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

https://github.com/ergoproxy007/cohan-school-vue/settings/pages

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

Built with [Vue.js](https://vuejs.org/), [Vue Router](https://router.vuejs.org/), [Bulma](https://buefy.org/), & [Buefy](https://buefy.org/). Generated with [Vite](https://vite.dev).


## Directory Structure
The following is a good indication of how the code is organized in the `/src` directory:

```
├── App.vue                         // Top-level Vue component
├── components                      // Top-level page components
│   └── LandingPageLeftPanel.vue    // Representa el panel izquierdo de la página de inicio
│   └── PanelFomsContainer.vue      // Representa el panel contenedor para los formularios
│   ├── form
│   │   └── FormInput.vue           // Representa un compomentes para formulario
│   ├── student
│   │   └── StudentForm.vue         // Representa el componente de formulario de estudiante
├── main.js                         // JavaScript entry-point for the app
├── views                           // Representa los componentes de las vistas, que seran llamados desde Vue Router
│   ├── student
│   │   └── StudentView.vue         // Representa el componente de vista de estudiante
├── router.js                       // Initializes Vue Router and imports all module routes
```

Note that your generated code may contain more or fewer files

*Customize configuration*
See [Configuration Reference](https://cli.vuejs.org/config/).