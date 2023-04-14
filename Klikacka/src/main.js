import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style/style.css'
import './style/reset.css'
//import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(createPinia())
app.mount('#app')
