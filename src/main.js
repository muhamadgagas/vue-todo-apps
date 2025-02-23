import './assets/main.scss'
import 'primeicons/primeicons.css';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(ToastPlugin)
app.mount('#app')
