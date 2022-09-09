import React from 'react';
import { useQueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
import {Navigate } from 'react-router-dom';
import { deleteUser, setLoginfail } from '../store/reducer/User';
import exportedSwal from '../utils/swal';

type AppProps = {
  role: string,
  children: React.ReactNode,
}

const AdminRoute = ({ role , children }: AppProps) => {
  
  const queryClient = useQueryClient()

  const dispatch = useDispatch()

  if(role !== "admin"){
    queryClient.invalidateQueries()
    dispatch(deleteUser())
    dispatch(setLoginfail())
    exportedSwal.actionInfo("คุณไม่สามารถเข้าถึงเมนูนี้ได้ !")
    return <Navigate to={`/logout`} />
  }


  return <>{children}</>
};

export default AdminRoute;