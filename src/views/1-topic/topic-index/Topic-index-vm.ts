import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APITopic_data } from "../../../model/Topic"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPITopic from "../../../utils/api/topic"
import { routerPath } from "../../../utils/routerpath"

export default function TopicIndexVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const query_topic_data = useQuery<APITopic_data , Error>('getDevelop', async () => exportedAPITopic.getMe(user.token))

    const [values] = useState({
        title: "เอกสารของคุณ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "เอกสารของคุณ", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user,
        query_topic_data
    }
}