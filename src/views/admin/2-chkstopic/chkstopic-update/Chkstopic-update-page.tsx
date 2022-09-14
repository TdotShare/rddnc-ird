import React from 'react'
import Button from '../../../../components/Button'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import LoadingData from '../../../../components/LoadingData'
import ChkstopicUpdateVM from './Chkstopic-update-vm'

function ChkstopicUpdatePage() {

  const viewModel = ChkstopicUpdateVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={`${viewModel.title} - ${viewModel.qe_topic_data.isLoading ? '' : viewModel.qe_topic_data.data?.data.topic_name}`}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

          {
            viewModel.qe_topic_data.isLoading ?

              <LoadingData />

              :



              <>
                <div className='card'>
                  <div className='card-header'>
                    <b>ชื่อเรื่อง</b> : {viewModel.qe_topic_data.data?.data.topic_name}
                    <br />
                    <b>สถานะการดำเนินงาน</b> : <i className={viewModel.qe_topic_data.data?.data.topic_status_id === 3 ? "fas fa-check-circle text-success" : "fas fa-exclamation-triangle text-danger"}></i> {viewModel.qe_topic_data.data?.data.status_name}
                  </div>

                  <div className='card-body'>



                    <form >

                      <ul>
                        <li><i className="fas fa-check-circle text-success"></i> {viewModel.qe_topic_data.data?.data.topic_pdf_file}</li>
                        <li><i className="fas fa-check-circle text-success"></i> {viewModel.qe_topic_data.data?.data.topic_docx_file}</li>
                      </ul>

                      <div className="form-row">
                        <div className="form-group col-md">
                          <label >Note เพิ่มเติมจากนักวิจัย</label>
                          <textarea className="form-control" rows={3} readOnly={true} />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md">
                          <label >เปอร์เซ็นต์ความซ้ำซ้อน</label>
                          <input type="number" name='answer_percent' className="form-control" required={true} />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md">
                          <label >รายละเอียดผลการตรวจสอบ</label>
                          <textarea className="form-control" name='answer_note' rows={3} required={true} />
                        </div>
                      </div>

                      <Button className='btn btn-block btn-success' >อัปเดตคำตอบ</Button>

                    </form>

                  </div>
                </div>
              </>
          }

        </div>
      </section>

    </div>
  )

}

export default ChkstopicUpdatePage