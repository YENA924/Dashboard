import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import EVUI from 'evui'

loadFonts()

createApp(App)
  .use(EVUI)
  .use(vuetify)
  .mount('#app')
