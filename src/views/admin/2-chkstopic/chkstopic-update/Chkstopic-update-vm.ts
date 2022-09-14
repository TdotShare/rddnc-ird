import React from "react"
import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { APIAnswer_data } from "../../../../model/Answer"
import { RootState } from "../../../../store/ConfigureStore"
import exportedAPITopic from "../../../../utils/api/topic"
import { routerPath } from "../../../../utils/routerpath"



export default function ChkstopicUpdateVM() {

    
    const user = useSelector((state: RootState) => state.user.data)

    const queryClient = useQueryClient()

    const navigate = useNavigate();

    const { id }: any = useParams();

    const qe_topic_data = useQuery<APIAnswer_data, Error>('getAnswer', async () => exportedAPITopic.getTopic(user.token , id))

    React.useEffect(() => {
        return () => {
            queryClient.removeQueries('getAnswer')
        }
        // eslint-disable-next-line
    }, [])
    

    const [values] = useState({
        title: `ตรวจสอบเอกสาร`,
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ตรวจสอบเอกสาร", url: routerPath.Chkstopic, active: false },
            { name: id, url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user,
        qe_topic_data
    }
}