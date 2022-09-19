import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APIDashboard_data } from "../../../../model/Dashboard"
import { RootState } from "../../../../store/ConfigureStore"
import exportedAPIDashboard from "../../../../utils/api/dashboard"
import { routerPath } from "../../../../utils/routerpath"



export default function DashboardVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const qe_dash_data = useQuery<APIDashboard_data, Error>('getDashboard', async () => exportedAPIDashboard.getDashboard(user.token))

    const [values] = useState({
        title: "ภาพรวมระบบ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ภาพรวมระบบ", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user,
        qe_dash_data
    }
}