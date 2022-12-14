import React from 'react'
import Button from '../../../../components/Button'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import LoadingData from '../../../../components/LoadingData'
import { PUBLIC_PATH } from '../../../../config/public_path'
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



                    <form onSubmit={viewModel.submitFormTopicUpdate} encType="multipart/form-data" >

                      <ul>
                        <li><a href={`${PUBLIC_PATH}/upload/${viewModel.qe_topic_data.data?.data.topic_id}/${viewModel.qe_topic_data.data?.data.topic_pdf_file}`} target={`_blank`}><i className="fas fa-check-circle text-success"></i> {viewModel.qe_topic_data.data?.data.topic_pdf_file}</a></li>
                        <li><a href={`${PUBLIC_PATH}/upload/${viewModel.qe_topic_data.data?.data.topic_id}/${viewModel.qe_topic_data.data?.data.topic_docx_file}`} target={`_blank`}><i className="fas fa-check-circle text-success"></i> {viewModel.qe_topic_data.data?.data.topic_docx_file}</a></li>
                      </ul>

                      <div className="form-row">
                        <div className="form-group col-md">
                          <label >ความเห็นเพิ่มเติมจากนักวิจัย</label>
                          <textarea className="form-control" rows={3} readOnly={true} defaultValue={viewModel.qe_topic_data.data?.data.topic_note === null ? "" : `${viewModel.qe_topic_data.data?.data.topic_note}` } />
                        </div>
                      </div>



                      <div className="form-row">

                        <div className="form-group col-md">
                          <label >รายละเอียดผลการตรวจสอบ ( File .Pdf ) </label>
                          <input type="file" accept='.pdf' name='answer_pdf_file' className="form-control" required={true} />
                        </div>

                        <div className="form-group col-md">
                          <label >เปอร์เซ็นต์ความซ้ำซ้อน</label>
                          <input type="number" name='answer_percent' className="form-control" required={true} />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group col-md">
                          <label >Note เพิ่มเติมถึงนักวิจัย</label>
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