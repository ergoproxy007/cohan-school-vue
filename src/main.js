import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'

import 'bulma/css/bulma.css'
import './assets/main.css'

const app = createApp(App)

app.config.devtools = true

app.use(router)
app.use(Buefy)
app.mount('#app')
