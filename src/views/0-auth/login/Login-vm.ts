import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { HOST } from "../../../config/host";
import { addUser, deleteUser, setLoginfail, setLoginSuccess } from "../../../store/reducer/User";
import exportedAPIAuthentication from "../../../utils/api/authentication";
import { routerPath } from "../../../utils/routerpath";
import exportedSwal from "../../../utils/swal";


export default function LoginVM() {

    const location = useLocation();

    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const dispatch = useDispatch()

    const navigate = useNavigate();

    React.useEffect(() => {

        if (splitLocation.includes(`callback`)) {
            exportedSwal.actionSuccess(`กรุณารอสักครู่ระบบกำลังตรวจสอบการ login !`)
            dataLoginRmuti()
        } else {
            dispatch(deleteUser())
            dispatch(setLoginfail())
        }

        // eslint-disable-next-line
    }, [])

    const actionGoToRmutiLogin = () => {
        window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/login?url=${HOST}/callback`
    }

    const dataLoginRmuti = async () => {

        const res = process.env.NODE_ENV === 'production' ? await exportedAPIAuthentication.getLogin() : await exportedAPIAuthentication.getLoginTest()
    
        if (res.bypass) {
    
          let user = res.data
    
          //console.log(user)
    
          dispatch(addUser({
            user_id: user.user_id,
            user_uid: user.user_uid,
            user_card_id: user.user_card_id,
            user_firstname_th: user.user_firstname_th,
            user_lastname_th: user.user_lastname_th,
            user_email: user.user_email,
            user_faculty: user.user_faculty,
            token: user.token,
            role: user.role,
          }))
    
          dispatch(setLoginSuccess())
    
          navigate(routerPath.Topic)
    
        } else {
          //console.log(res)
    
          setTimeout(() => {
            exportedSwal.actionInfo(res.message)
          }, 500);
        }
    
      }


    return {
        dataLoginRmuti,
        actionGoToRmutiLogin,
    }

}