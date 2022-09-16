import axios from "axios";
import { API } from "../../config/api";
import { APIResponse_data } from "../../model/Response";

const createAnswer = async (data : any  , token : String) => {
    const res = await axios.post<APIResponse_data>(`${API}/admin/answer/create` , data , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}



const exportedAPIAnswer = {
    createAnswer
};

export default exportedAPIAnswer;