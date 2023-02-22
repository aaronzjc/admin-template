import Form from "@/views/Form.vue";
import Dashboard from "@/views/Dashboard.vue";

import { mdiMonitor, mdiSquareEditOutline } from "@mdi/js";

export const menus = [
    {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
        title: "后台总览",
        icon: mdiMonitor
    },
    {
        path: "form",
        name: "form",
        component: Form,
        title: "表单预览",
        icon: mdiSquareEditOutline
    }
];