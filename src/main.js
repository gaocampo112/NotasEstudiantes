import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './styles/global-style.css';


const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
