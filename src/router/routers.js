import HelloWorld from '@/components/HelloWorld'

export default [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        meta: {
            title: '你好世界'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['@/view/login.vue'], resolve),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/personCenter',
        name: 'personCenter',
        component: resolve => require(['@/view/personCenter.vue'], resolve),
        meta: {
            title: '个人中心'
        }
    },
    {
        path: '/401',
        name: 'error_401',
        meta: {
            title: '401'
        },
        component: () => import('@/view/error-page/401.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            title:'404'
        },
        component: () => import('@/view/error-page/404.vue')
    }
]
