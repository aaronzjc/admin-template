import { createRouter, createWebHashHistory } from 'vue-router'

import Admin from '@/layouts/Admin.vue'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Form from '@/views/Form.vue'
import Table from '@/views/Table.vue'
import PageOne from '@/views/page/One.vue'
import PageTwo from '@/views/page/Two.vue'

const routes = [
    {
        path: '/',
        component: Admin,
        redirect: 'home',
        children: [
            {
                meta: {
                    title: ['总览']
                },
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                meta: {
                    title: ['表单示例']
                },
                path: '/form',
                name: 'form',
                component: Form
            },
            {
                meta: {
                    title: ['表格示例']
                },
                path: '/table',
                name: 'table',
                component: Table
            },
            {
                meta: {
                    title: ['二级菜单', '页面1']
                },
                path: '/page/one',
                name: 'pageOne',
                component: PageOne
            },
            {
                meta: {
                    title: ['二级菜单', '页面2']
                },
                path: '/page/two',
                name: 'pageTwo',
                component: PageTwo
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPostion) {
        return savedPostion || { top: 0 }
    }
})

export default router
