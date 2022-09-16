import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPITopic from "../../../utils/api/topic"
import { routerPath } from "../../../utils/routerpath"
import exportedSwal from "../../../utils/swal"

export default function TopicCreateVM() {

    const user = useSelector((state: RootState) => state.user.data)

    const navigate = useNavigate();

    const [values] = useState({
        title: "เอกสารของคุณ",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "เอกสารของคุณ", url: routerPath.Topic, active: false },
            { name: "สร้าง", url: "", active: true },
        ]
    })

    const submitFormTopicCreate = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //const formdata = new FormData(event.currentTarget);

        const formdata = event.target as typeof event.target & {
            topic_name: { value: string };
            topic_pdf_file: { files: File[] };
            topic_docx_file: { files : File[] };
            topic_note: { value: string };
        };

        var postData = new FormData();
        postData.append("topic_name", formdata.topic_name.value )
        postData.append("topic_pdf_file", formdata.topic_pdf_file.files[0] )
        postData.append("topic_docx_file", formdata.topic_docx_file.files[0])
        postData.append("topic_note", formdata.topic_note.value )

        

        // let data = {
        //     topic_name: formdata.topic_name.value ,
        //     topic_pdf_file: formdata.topic_pdf_file.files[0],
        //     topic_docx_file: formdata.topic_docx_file.files[0],
        //     topic_note : formdata.topic_note.value,
        // }

        let res = await exportedAPITopic.createTopic(postData , user.token)

        if(res.bypass){
            exportedSwal.actionSuccess(`ส่งคำขอให้เจ้าที่ตรวจสอบเรียบร้อย รอเจ้าหน้าที่ ตรวจสอบ !`)
            navigate(routerPath.Topic)
        }else{
            exportedSwal.actionInfo(res.message)
        }
    }
    
    return {
        ...values,
        user,
        submitFormTopicCreate
    }
}