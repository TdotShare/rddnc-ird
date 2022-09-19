import React from 'react'
import { TITLE } from '../../../config/title'
import LoginVM from './Login-vm'

function LoginPage() {

    const viewModel = LoginVM()

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <h3>{TITLE.NameWeb}</h3>
                    </div>
                    <div className="card-body">

                        <div className="row">
                            <div className="col-12">
                                {
                                    process.env.NODE_ENV === 'production' ? 

                                    <button onClick={() => viewModel.actionGoToRmutiLogin()} className="btn btn-primary btn-block">เข้าสู่ระบบ</button>

                                    :

                                    <button onClick={() => viewModel.dataLoginRmuti()} className="btn btn-danger btn-block">เข้าสู่ระบบ</button>
                                }
                            </div>
                        </div>

                        <div style={{ marginBottom: `1%` }}></div>

                        <div className="row">
                            <div className="col-12">
                                <a href={`https://docs.google.com/presentation/d/1GJFDyLJBlFFq0Q19us4s35D_BIGkdkp-B_SM_kx7WSw/edit?usp=sharing`} target={`_blank`}><button className="btn btn-warning btn-block">คู่มือการใช้งาน</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage