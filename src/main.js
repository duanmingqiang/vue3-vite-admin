// 引入element-ui
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
// 路由守卫
import './permission'
// 注册路由
import router from './routers/index'
// 注册vuex
import store from './store/index'

// 初始化样式
import('./styles/init.css')




const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus, {
    size: 'default', zIndex: 3000
})  
app.mount('#app')



