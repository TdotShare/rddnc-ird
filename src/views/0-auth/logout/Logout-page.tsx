import React from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { HOST } from '../../../config/host';
import { deleteUser, setLoginfail } from '../../../store/reducer/User';
import { routerPath } from '../../../utils/routerpath';

const LogoutPage = () => {

  const queryClient = useQueryClient()

  const dispatch = useDispatch()

  const navigate = useNavigate();

  document.body.removeAttribute('class')

  React.useEffect(() => {
    dispatch(deleteUser())
    dispatch(setLoginfail())
    queryClient.invalidateQueries()

    if(process.env.NODE_ENV === 'production'){
      window.location.href = `https://mis-ird.rmuti.ac.th/sso/auth/logout?url=${HOST}`
    }else{
      navigate(routerPath.Login)
    }
    // eslint-disable-next-line 
  }, [])


  return <Navigate to="/login" />
};

export default LogoutPage;