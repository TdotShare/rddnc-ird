import axios from "axios";
import { API } from "../../config/api";
import { APIResponse_data } from "../../model/Response";
import { APITopic_data } from "../../model/Topic";

const getTopic = async (token: String , id : Number) => {
    const res = await axios.get<APITopic_data>(`${API}/user/topic/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data        
}

const getMe = async (token: String) => {
    const res = await axios.get<APITopic_data>(`${API}/user/topic`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const getAll = async (token: String) => {
    const res = await axios.get<APITopic_data>(`${API}/admin/topic`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}
const createTopic = async (data : any  , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/user/topic/create` , data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const deleteTopic = async (id : number  , token : String) => {
    const res = await axios.get<APIResponse_data>(`${API}/user/topic/delete/${id}` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}

const exportedAPITopic = {
    getMe,
    getAll,
    getTopic,
    createTopic,
    deleteTopic
};

export default exportedAPITopic;