import axios from "axios";
import { API } from "../../config/api";
import { APIDashboard_data } from "../../model/Dashboard";

const getDashboard = async (token : String) => {
    const res = await axios.get<APIDashboard_data>(`${API}/admin/dashboard` , {
        headers: {
            'Authorization': `Bearer ${token}`
        },
    });

    return res.data
}



const exportedAPIDashboard = {
    getDashboard
};

export default exportedAPIDashboard;