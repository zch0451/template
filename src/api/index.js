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
//获取用户数据信息
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
//退出登入
function logout() {
    return instance({
        method: 'post',
        url:  '/logout'
    });
}
export {
    login,
    getUserInfo,
    logout
}
