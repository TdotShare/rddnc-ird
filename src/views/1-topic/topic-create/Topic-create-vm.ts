import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../store/ConfigureStore"
import { routerPath } from "../../../utils/routerpath"

export default function TopicCreateVM() {

    const user = useSelector((state: RootState) => state.user.data)

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

        console.log(formdata.topic_name.value)
        console.log(formdata.topic_pdf_file.files[0].name)
        console.log(formdata.topic_docx_file.files[0].name)
        console.log(formdata.topic_note.value)
    }
    
    return {
        ...values,
        user,
        submitFormTopicCreate
    }
}