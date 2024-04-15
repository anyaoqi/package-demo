import { createApp } from 'vue'
import App from './App.vue'
import HelloText from '../src/components/HelloText'

const app = createApp(App)
app.component('HelloText', HelloText)
app.mount('#app')