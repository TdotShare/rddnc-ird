import { debounce } from "lodash"
import React from "react"
import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { APITopic_data } from "../../../model/Topic"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPITopic from "../../../utils/api/topic"
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal"

export default function TopicIndexVM() {

    const queryClient = useQueryClient()

    const user = useSelector((state: RootState) => state.user.data)

    const [textSearch , setTextSearch] = useState("")
    const [page, setPage] = useState(0)

    const debouncedInputSearch = React.useRef(
        debounce(async (text) => {
            setPage(0)
            setTextSearch(text)
        }, 300)
    ).current;

    const inputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedInputSearch(event.target.value);
    };

    const query_topic_data = useQuery<APITopic_data, Error>(['getTopicUser', page , textSearch],
    async () => exportedAPITopic.getMe(user.token, page , textSearch), { keepPreviousData: true })

    const [values] = useState({
        title: "เอกสารของคุณ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "เอกสารของคุณ", url: "", active: true },
        ]
    })


    const actionDelete = async (id: number) => {

        let confirmDelete = await exportedSwal.confirmDelete("ที่เลือก")

        if (confirmDelete) {
            const res = await exportedAPITopic.deleteTopic(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบข้อมูลที่เลือกเรียบร้อย !")
                queryClient.invalidateQueries()
            } else {
                exportedSwal.actionInfo('ไม่สามารถลบข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
            }
        }
    }
    
    return {
        ...values,
        user,
        query_topic_data,
        debouncedInputSearch,
        inputSearch,
        setPage,
        actionDelete
    }
}