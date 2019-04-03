import axios from 'axios';
const baseUrl = {
    development: 'http://192.168.71.207:8080',
    production: 'http://192.168.71.54:8080',
    testing:'http://192.168.71.122:8080'
}[process.env.NODE_ENV || 'development'];

export const instance=axios.create({
    baseURL:baseUrl,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
instance.interceptors.response.use(res=>{
    return res.data;
})

