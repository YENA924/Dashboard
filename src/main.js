import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import EVUI from 'evui'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(EVUI)
  .mount('#app')
