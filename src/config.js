import Dashboard from "@/views/Dashboard.vue";
import Form from "@/views/Form.vue";
import Table from "@/views/Table.vue";

import { mdiMonitor, mdiSquareEditOutline, mdiTable } from "@mdi/js";

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
        title: "表单示例",
        icon: mdiSquareEditOutline
    },
    {
        path: "table",
        name: "table",
        component: Table,
        title: "数据表格",
        icon: mdiTable
    },
];