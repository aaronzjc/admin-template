import { mdiDotsGrid, mdiLogin, mdiMonitor, mdiSquareEditOutline, mdiTable } from "@mdi/js";

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
        route: "table",
        title: "数据表格",
        icon: mdiTable
    },
    {
        title: "二级菜单",
        icon: mdiDotsGrid,
        active: false,
        children: [
            {
                route: "pageOne",
                title: "页面1",
                active: false,
            },
            {
                route: "pageTwo",
                title: "页面2",
                active: false,
            }
        ]
    },
    {
        route: "login",
        title: "登录页面",
        icon: mdiLogin
    }
];