import  {instance}  from './instance';
const querystring = require('querystring');
/** 请求接口 */
function login({userName,password}) {
    const data = {
        userName,
        password
    }
    return instance({
        method: 'post',
        url:  '/login',
        data:querystring.stringify(data)
    });
}
function getUserInfo(token) {
    const data = {
        token
    }
    return instance({
        method: 'get',
        url:  '/getUserInfo',
        params:data
    });
}

export {
    login,
    getUserInfo
}
