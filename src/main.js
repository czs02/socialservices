import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css' // 引入 Element Plus 样式
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')