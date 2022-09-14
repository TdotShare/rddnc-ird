import { debounce } from "lodash"
import React from "react"
import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { APITopic_data } from "../../../../model/Topic"
import { RootState } from "../../../../store/ConfigureStore"
import exportedAPITopic from "../../../../utils/api/topic"
import { routerPath } from "../../../../utils/routerpath"
import exportedSwal from "../../../../utils/swal"



export default function ChkstopicIndexVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const queryClient = useQueryClient()

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

    const query_topic_data = useQuery<APITopic_data, Error>(['getTopicAdmin', page , textSearch],
    async () => exportedAPITopic.getAll(user.token, page , textSearch), { keepPreviousData: true })

    const [values] = useState({
        title: "ตรวจสอบเอกสาร",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ตรวจสอบเอกสาร", url: "", active: true },
        ]
    })

    const actionInProgress = async (id : number , name : string) => {
        const res = await exportedAPITopic.topicInProgress(id, user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`เปลี่ยนสถานะ ${name} เรียบร้อย !`)
            queryClient.invalidateQueries()
        }else{
            exportedSwal.actionInfo('ไม่สามารถยกเลิกข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
        }
    }

    const actionDelete = async (id: number , name : string) => {

        let confirmDelete = await exportedSwal.confirmDelete(name)

        if (confirmDelete) {
            const res = await exportedAPITopic.deleteTopic(id, user.token)

            if (res.bypass) {
                exportedSwal.actionSuccess("ลบรายการที่เลือกเรียบร้อย !")
                queryClient.invalidateQueries()
            } else {
                exportedSwal.actionInfo('ไม่สามารถยกเลิกข้อมูลได้ กรุณาติดต่อเจ้าหน้าที่ !')
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
        actionDelete,
        actionInProgress
    }
}