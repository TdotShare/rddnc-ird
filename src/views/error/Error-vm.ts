import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/ConfigureStore"
import { routerPath } from "../../utils/routerpath"

export default function ErrorVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const [values] = useState({
        title: "เอกสารของคุณ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "Error", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user
    }
}