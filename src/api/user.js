import request from './request'
export function userLogin(data) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export function userLogout(data) {
    return request({
        url: '/user/logout',
        method: 'post',
        data
    })
}

export function getUserInfo(data) {
    return request({
        url: '/user/userInfo',
        method: 'get',
        params: data
    })
}