import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@/assets/scss/style.scss'
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
loadFonts()

createApp(App)
  .component('EasyDataTable', EasyDataTable)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')
