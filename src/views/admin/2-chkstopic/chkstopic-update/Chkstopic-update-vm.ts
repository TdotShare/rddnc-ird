import React from "react"
import { useState } from "react"
import { useQuery, useQueryClient } from "react-query"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { APIAnswer_data } from "../../../../model/Answer"
import { RootState } from "../../../../store/ConfigureStore"
import exportedAPIAnswer from "../../../../utils/api/answer"
import exportedAPITopic from "../../../../utils/api/topic"
import { routerPath } from "../../../../utils/routerpath"
import exportedSwal from "../../../../utils/swal"



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

    const submitFormTopicUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //const formdata = new FormData(event.currentTarget);

        let confirmUpdate = await exportedSwal.confirmUpdate()

        if(confirmUpdate){

            const formdata = event.target as typeof event.target & {
                answer_pdf_file: { files: File[] };
                answer_percent: { value: number };
                answer_note: { value: string };
            };


            var postData = new FormData();
            postData.append("answer_topic_id", id )
            postData.append("answer_pdf_file", formdata.answer_pdf_file.files[0] )
            postData.append("answer_percent", formdata.answer_percent.value.toString() )
            postData.append("answer_note", formdata.answer_note.value )

            let res = await exportedAPIAnswer.createAnswer(postData , user.token)

            if(res.bypass){
                exportedSwal.actionSuccess(`อัปเดตคำตอบ เรื่อง ${qe_topic_data.data?.data.topic_name} เรียบร้อย !`)
                navigate(routerPath.Chkstopic)
            }else{
                exportedSwal.actionInfo(res.message)
            }

        }

    }
    
    return {
        ...values,
        user,
        id,
        qe_topic_data,
        submitFormTopicUpdate
    }
}