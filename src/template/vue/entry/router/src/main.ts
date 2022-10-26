import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.errorHandler = (err, instance, info) => {
	console.error(err)
}

app.use(router)

app.mount('#app')
