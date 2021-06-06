import * as VueRouter from 'vue-router'

const commonRoute = [
    {
        path: '/',
        name: 'Index',
        component: () => import('@/views/common/index.vue'),
        hidden: false,
        meta: {
            title: '主页',
            icon: ''
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/common/Login.vue'),
        hidden: true,
        meta: {
            title: '登录页',
            icon: '',
            hidden: true,
        }
    }
]
const asyncRoutes = [
    {
        path: '/test1',
        name: 'Test1',
        component: () => import('@/views/Test1.vue'),
         meta: {
            title: 'test111',
            icon: ''
        }
    },
    {
        path: '/test2',
        name: 'Test2',
        component: () => import('@/views/common/common.vue'),
         meta: {
            title: 'test222',
            icon: ''
        },
        children: [
            {
                path: '/test2-1',
                name: 'Test2_1',
                component: () => import('@/views/Test2_1.vue'),
                meta: {
                    title: 'test222_111',
                    icon: ''
                },
            },
            {
                path: '/test2-2',
                name: 'Test2_2',
                component: () => import('@/views/Test2_2.vue'),
                meta: {
                    title: 'test222_222',
                    icon: ''
                },
            }
        ]
    }
]
const notFoundRoute = [
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/common/404.vue'),
        hidden: true,
         meta: {
            title: '404',
            icon: '',
            hidden: true,
        }
    }
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [...commonRoute, ...notFoundRoute]
})

const createRouter = (routes) => {
    return VueRouter.createRouter({
        history: VueRouter.createWebHashHistory(),
        routes: commonRoute 
    })
}

const resetRouter = () => {
    asyncRoutes.forEach(route => {
        if(router.hasRoute(route.name)) {
            router.removeRoute(route.name)
        }
    })
}
window.router = router
export {
    commonRoute,
    asyncRoutes,
    notFoundRoute,
    resetRouter,
    
}
export default router