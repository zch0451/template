import Cookies from 'js-cookie'
import config from '@/config'
const {TOKEN_KEY , cookieExpires} = config;
const getArgs=function(search){
    var obj = {};
    var arr = search.split('&');
    for (var i = 0; i < arr.length; i++) {
        var arrSon = arr[i].split('=');
        obj[arrSon[0]] = arrSon[1];
    }
    return obj;
}
const setToken = (token) => {
    Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

const getToken = () => {
    const token = Cookies.get(TOKEN_KEY)
    if (token) return token
    else return false
}
const hasAccess = (access, route) => {
    if (route.meta && route.meta.access) return hasOneOf(access, route.meta.access)
    else return true
}
const canTurnTo = (name, access, routes) => {
    const routePermissionJudge = (list) => {
        return list.some(item => {
            if (item.children && item.children.length) {
                return routePermissionJudge(item.children)
            } else if (item.name === name) {
                return hasAccess(access, item)
            }
        })
    }

    return routePermissionJudge(routes)
}
const sucResponse =(data)=>{
    return {status:200,data:data}
}
export {
    getArgs,
    setToken,
    getToken,
    canTurnTo,
    sucResponse
}
