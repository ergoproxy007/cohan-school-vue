import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config  } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import './assets/main.css'

library.add(fas)
config.autoAddCss = false

const app = createApp(App)
app.config.devtools = true

app.component('fa', FontAwesomeIcon)

app.use(router)
app.use(Buefy)
app.mount('#app')
