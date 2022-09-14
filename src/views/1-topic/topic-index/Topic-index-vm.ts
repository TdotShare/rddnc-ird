import { debounce } from "lodash"
import React from "react"
import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APITopic_data } from "../../../model/Topic"
import { RootState } from "../../../store/ConfigureStore"
import exportedAPITopic from "../../../utils/api/topic"
import { routerPath } from "../../../utils/routerpath"

export default function TopicIndexVM() {

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
    
    return {
        ...values,
        user,
        query_topic_data,
        debouncedInputSearch,
        inputSearch,
        setPage
    }
}