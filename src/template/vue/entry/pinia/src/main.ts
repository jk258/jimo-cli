import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'


const app = createApp(App)

app.config.errorHandler = (err, instance, info) => {
	console.error(err)
}

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)

app.mount('#app')
