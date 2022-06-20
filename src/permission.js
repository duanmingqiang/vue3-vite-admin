import router from '@/routers/index'
import {
    getToken
} from '@/utils/cookie'
import store from './store/index'
router.beforeEach(async (to, from) => {
    // to and from are both route objects. must call `next`.
    // console.log('已加载路由', router.getRoutes())
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            return '/'
        } else {
            const hasRole = store.state.routes && store.state.routes.length
            if (hasRole) {
            } else {
                try {
                    const routes = await store.dispatch('getUserInfo')
                    const asyncRoutes = await store.dispatch('createRoutes', routes)

                    asyncRoutes.forEach(route => {
                        router.addRoute(route)
                    })
                    // console.log('已加载路由', router.getRoutes())
                    return to.path
                } catch (error) {
                    return '/login'
                    console.log('error', error)
                }
            }
        }
    } else {
        const IGNORE_ROUTE = ['/login']
        if (IGNORE_ROUTE.includes(to.path)) {

        } else {
            return '/login'
        }
        
    }
})