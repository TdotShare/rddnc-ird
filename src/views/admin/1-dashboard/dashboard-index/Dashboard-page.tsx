import React from 'react'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import LoadingData from '../../../../components/LoadingData'
import DashboardVM from './Dashboard-vm'

function DashboardPage() {

  const viewModel = DashboardVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

          {
            viewModel.qe_dash_data.isLoading ?


              <LoadingData />

              :

              <div className='row'>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{viewModel.qe_dash_data.data?.data.count_account_list} <sup style={{fontSize : "20px"}}>คน</sup></h3>
                      <p>จำนวนผู้เข้าใช้งานระบบ</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                  </div>
                </div>


                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{viewModel.qe_dash_data.data?.data.count_topic_st_complete} <sup style={{fontSize : "20px"}}>งาน</sup></h3>
                      <p>งานที่ดำเนินการแล้ว</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{viewModel.qe_dash_data.data?.data.count_topic_st_inprogress} <sup style={{fontSize : "20px"}}>งาน</sup></h3>
                      <p>งานที่กำลังดำเนินการ</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>{viewModel.qe_dash_data.data?.data.count_topic_st_watingchk} <sup style={{fontSize : "20px"}}>งาน</sup></h3>
                      <p>งานที่ยังไม่ได้ตรวจสอบ</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                  </div>
                </div>



              </div>


          }

        </div>
      </section>

    </div>
  )

}

export default DashboardPage