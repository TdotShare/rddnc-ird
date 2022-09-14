import { debounce } from "lodash"
import React from "react"
import { useState } from "react"
import { useQuery } from "react-query"
import { useSelector } from "react-redux"
import { APIAccount_data } from "../../../../model/User"
import { RootState } from "../../../../store/ConfigureStore"
import exportedAPIAccount from "../../../../utils/api/account"
import { routerPath } from "../../../../utils/routerpath"



export default function AccountIndexVM() {

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

    const qe_account_data = useQuery<APIAccount_data, Error>(['getAccount', page , textSearch],
    async () => exportedAPIAccount.getAccountAll(user.token, page , textSearch), { keepPreviousData: true })


    const [values] = useState({
        title: "ผู้ใช้งาน",
        breadcrumb: [
            { name: "หน้าหลัก", url: routerPath.Topic, active: false },
            { name: "ผู้ใช้งาน", url: "", active: true },
        ]
    })
    
    return {
        ...values,
        user,
        qe_account_data,
        debouncedInputSearch,
        inputSearch,
        setPage
    }
}