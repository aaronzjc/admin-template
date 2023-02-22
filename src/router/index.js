import { createRouter, createWebHashHistory } from "vue-router";

import Admin from "@/layouts/Admin.vue";
import Form from "@/views/Form.vue";
import Dashboard from "@/views/Dashboard.vue";

const routes = [
    {
        path: "/",
        component: Admin,
        redirect: "dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "form",
                name: "form",
                component: Form
            },
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    linkExactActiveClass: "is-active",
    routes,
    scrollBehavior(to, from, savedPostion) {
        return savedPostion || { top: 0 }
    }
})

export default router