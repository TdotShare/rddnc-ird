import { routerPath } from "./routerpath";


interface MenuItem {
    name: string;
    url: string;
    icon: string;
    path: string;
}

const userMenuList: MenuItem[] = [
    { name: "เอกสารของคุณ", icon: "fas fa-file-contract", url: routerPath.Topic , path: routerPath.Topic },
    { name: "ออกจากระบบ", icon: "fas fa-sign-out-alt", url: "/logout", path: "/logout" }
]
const adminMenuList: MenuItem[] = [
    { name: "ภาพรวมระบบ", icon: "fas fa-weight", url: `${routerPath.Dashboard}`, path: `admin/${routerPath.Dashboard}` },
    { name: "ตรวจสอบเอกสาร", icon: "fas fa-tasks", url: `${routerPath.Chkstopic}`, path: `admin/${routerPath.Chkstopic}` },
    { name: "ผู้ใช้งาน", icon: "fas fa-users", url: `${routerPath.Account}`, path: `admin/${routerPath.Account}` },
]

export { adminMenuList, userMenuList }