import { SUCCESS_CODE } from '../src/utils/constants'
const permission = [
    {
        name: '',
        descInfo: '',
        children: [
            {
                name: ''
            }
        ]
    }
]
export default [
    // 用户登录
    {
        url: '/user/login',
        method: 'post',
        response: (config) => {
            console.log(console.log('loginInfo', config.body))
            return {
                code: SUCCESS_CODE,
                message: 'login success',
                data: {
                    token: 'token666'
                }
            }
        }
    },
    // 用户退出
    {
        url: '/user/logout',
        method: 'post',
        response: (config) => {
            console.log(console.log('loginInfo', config.body))
            return {
                code: SUCCESS_CODE,
                message: 'logout success',
                data: 'logout success'
            }
        }
    },
    {
        url: '/user/userInfo',
        method: 'get',
        response: (config) => {
            return {
                code: SUCCESS_CODE,
                data: {
                    name: '张三',
                    age: '28',
                    role: ['admin'],
                    routes: ['Test1', 'Test2', 'Test2_1', 'Test2_2']
                },
                message: 'success'
            }
        }
    }
]