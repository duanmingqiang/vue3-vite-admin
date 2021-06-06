import { createApp } from 'vue'
import App from './App.vue'

// 初始化样式
import('./styles/init.css')

// 注册路由
import router from './routers/index'

// 注册vuex
import store from './store/index'
// 路由守卫
import './permission'

// 引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, {
    size: 'default', zIndex: 3000
})  
app.mount('#app')



