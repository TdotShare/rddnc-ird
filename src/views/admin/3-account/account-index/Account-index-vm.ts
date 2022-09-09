import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../../store/ConfigureStore"
import { routerPath } from "../../../../utils/routerpath"



export default function AccountIndexVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "ผู้ใช้งาน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ผู้ใช้งาน", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user
    }
}