import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store/ConfigureStore"
import { routerPath } from "../../../../utils/routerpath"



export default function DashboardVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "ภาพรวมระบบ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ภาพรวมระบบ", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user
    }
}