import React from 'react'


import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import PrivateRoute from './PrivateRoute';


import { useSelector } from 'react-redux';
import { RootState } from '../store/ConfigureStore';
import { routerPath } from '../utils/routerpath';

import Main from '../components/template/Main';
import UserAuthen from '../components/UserAuthen';

import LoginPage from '../views/0-auth/login/Login-page';
import TopicIndexPage from '../views/1-topic/topic-index/Topic-index-page';
import TopicCreatePage from '../views/1-topic/topic-create/Topic-create-page';
import DashboardPage from '../views/admin/1-dashboard/dashboard-index/Dashboard-page';
import AccountIndexPage from '../views/admin/3-account/account-index/Account-index-page';
import ChkstopicIndexPage from '../views/admin/2-chkstopic/chkstopic-index/Chkstopic-index-page';
import LogoutPage from '../views/0-auth/logout/Logout-page';
import Error404 from '../views/error/Error-page';
import AdminRoute from './AdminRoute';

function Routers() {

    const data = useSelector((state: RootState) => state.user)

    return (
        <BrowserRouter basename="/rddnc" >
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/login/callback" element={<LoginPage />} />
                <Route path="/" element={<PrivateRoute authentication={data.auth} />}>
                    <Route path="/" element={<Main />}>
                        <Route path="/" element={<Navigate to={routerPath.Topic} />} />
                        <Route path={`${routerPath.Topic}`} element={<UserAuthen children={<TopicIndexPage />} />} />
                        <Route path={`${routerPath.Topic}/create`} element={<UserAuthen children={<TopicCreatePage />} />} />
                        <Route path={`${routerPath.Dashboard}`} element={<UserAuthen children={<AdminRoute role={data.data.role} children={<DashboardPage />} />} />} />
                        <Route path={`${routerPath.Chkstopic}`} element={<UserAuthen children={<AdminRoute role={data.data.role} children={<ChkstopicIndexPage />} />} />} />
                        <Route path={`${routerPath.Account}`} element={<UserAuthen children={<AdminRoute role={data.data.role} children={<AccountIndexPage />} />} />} />
                        <Route path="/error" element={<UserAuthen children={<Error404 />} />} />
                        <Route path="/logout" element={<LogoutPage />} />
                        <Route path="*" element={<UserAuthen children={<Error404 />} />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )

}

export default Routers