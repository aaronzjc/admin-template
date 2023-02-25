import { createRouter, createWebHashHistory } from 'vue-router'

import Admin from '@/layouts/Admin.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Form from '@/views/Form.vue'
import Table from '@/views/Table.vue'
import PageOne from '@/views/page/One.vue'
import PageTwo from '@/views/page/Two.vue'

const routes = [
    {
        path: '/',
        component: Admin,
        redirect: 'dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: '/form',
                name: 'form',
                component: Form
            },
            {
                path: '/table',
                name: 'table',
                component: Table
            },
            {
                path: '/page/one',
                name: 'pageOne',
                component: PageOne
            },
            {
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
