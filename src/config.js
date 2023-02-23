import { mdiMonitor, mdiSquareEditOutline, mdiTable } from "@mdi/js";

export const menus = [
    {
        route: "dashboard",
        title: "后台总览",
        icon: mdiMonitor,
        active: false,
    },
    {
        route: "form",
        title: "表单示例",
        icon: mdiSquareEditOutline
    },
    {
        title: "二级菜单",
        icon: mdiTable,
        active: false,
        children: [
            {
                route: "table",
                title: "表格列表",
                active: false,
            },
            {
                route: "tableSub",
                title: "表格修改",
                active: false,
            }
        ]
    },
];