import Cookies from 'js-cookie'

const tokenKey = 'user-token'

export function setToken(token) {
    Cookies.set(tokenKey, token)
}

export function getToken(token) {
    return Cookies.get(tokenKey)
}

export function removeToken(token) {
    Cookies.remove(tokenKey)
}