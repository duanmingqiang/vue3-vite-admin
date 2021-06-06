import {createStore} from 'vuex'
import {
    userLogin,
    userLogout,
    getUserInfo
} from '@/api/user'
import {
    setToken,
    getToken,
    removeToken
} from '@/utils/cookie'
import {
    commonRoute,
    asyncRoutes,
    notFoundRoute,
    resetRouter
} from '../routers'

function hasPermission(routesName, route) {
    return routesName.find(name => name === route.name)
}

function filterAsyncRoute(routesName, asyncRoutes) {
    const tempData = []
    asyncRoutes.forEach(route => {
        console.log('666')
        if (hasPermission(routesName, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRoute(routesName, route.children)
            }
            tempData.push(route)
        }
    });
    return tempData
}
const store = createStore({
    state() {
        return {
            userInfo: {
                name: '张三'
            },
            token: '',
            role: [],
            routes: [],
            allInstallRoutes: [],
            collapse: false,
            name: ''
        }
    },
    mutations: {
        // setUserInfo(state) {
        //     state.userInfo.name = '李四'
        // },
        SET_TOKEN(state, token) {
            state.token = token
        },
        REMOVE_TOKEN(state) {
            state.token = ''
        },
        SET_ASYNC_ROUTE(state, routes) {
            state.routes = routes
        },
        SET_ROUTES(state, routes) {
            state.allInstallRoutes = routes
        },
        SET_COLLAPSE(state, collapse) {
            state.collapse = !state.collapse
        },
        SET_USER_NAME(state, name) {
            state.name = name
        }
    },
    getters: {
        // getUserName(state) {
        //     return state.userInfo.name
        // }
    },
    actions: {
        // 可包含异步操作
        setUserInfo(context) {
            context.commit('setUserInfo', '老小子')
        },
        login({commit}, loginInfo = {}) {
            return new Promise((resolve, reject) => {
                userLogin(loginInfo).then(res => {
                    let token = res.data.token
                    commit('SET_TOKEN',token )
                    setToken(token)
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        logout({commit, dispatch, state}) {
            return new Promise((resolve, reject) => {
                userLogout().then(res => {
                    commit('REMOVE_TOKEN')
                    removeToken()
                    resetRouter()
                    commit('SET_ASYNC_ROUTE', [])
                    resolve(res.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    commit('SET_ASYNC_ROUTE', res.data.routes)
                    commit('SET_USER_NAME', res.data.name)
                    resolve(res.data.routes)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        createRoutes({commit}, routes) {
            return new Promise((resolve, reject) => {
                try {
                    const waitAddRoutes = [...filterAsyncRoute(routes, asyncRoutes), ...notFoundRoute]
                    commit('SET_ROUTES', [...commonRoute,...waitAddRoutes])
                    resolve(waitAddRoutes)
                } catch (error) {
                    reject(error)
                }
            })
        }
    }
})

export default store