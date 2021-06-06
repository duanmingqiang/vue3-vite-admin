import axios from 'axios'

const request = axios.create({
    baseURL: '',
    timeout: 1000 * 12
})

// 请求拦截
request.interceptors.request.use(config => {
    // console.log('request', config)
    // 请求前做点什么事
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(response => {
    // 对响应数据做点事情
    // console.log('response', response)
    return response.data
}, error => {
    return Promise.reject(error)
})

export default request