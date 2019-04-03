import {login,getUserInfo,logout} from '@/api/'
import { setToken, getToken } from '@/lib/util'

export default {
    state:{
       info:{},
       token:getToken()
    },
    mutations:{
        setUser (state, userInfo) {
            state.info = userInfo
        },
        setToken(state,token){
            state.token=token
            setToken(token);
        }
    },
    actions:{
        handleLogin({state, commit }, { userName, password }){
            return new Promise((resolve, reject) => {
                login({
                    userName,
                    password
                }).then(res => {
                    const data = res.data;
                    //commit('setUser', JSON.parse(JSON.stringify(data)));
                    commit('setToken',data.token);
                    console.log(state)
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        },
        getUserInfo({state, commit }){
            return new Promise((resolve, reject) => {
                try {
                    getUserInfo(state.token).then(res => {
                        const data = res.data
                        commit('setUser', data)
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } catch (error) {
                    reject(error)
                }
            })
        },
        // 退出登录
        handleLogOut ({ state, commit }) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('setToken', '')
                    commit('setUser', {})
                    resolve()
                }).catch(err => {
                    reject(err)
                })
            })
        }
    }
}
