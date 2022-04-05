import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import EVUI from 'evui'

createApp(App)
.use(router)
.use(EVUI)
.mount('#app')
