import React from 'react'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import TopicCreateVM from './Topic-create-vm'

function TopicCreatePage() {

  const viewModel = TopicCreateVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

          <div className='card'>
            <div className='card-header'>สร้างเอกสาร</div>
            <div className='card-body'>

              <form onSubmit={viewModel.submitFormTopicCreate} encType="multipart/form-data" >

                <div className="form-row">
                  <div className="form-group col-md">
                    <label >ชื่อเรื่อง</label>
                    <input type="text" name='topic_name' className="form-control" required={true} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md">
                    <label >File .Pdf</label>
                    <input type="file" name='topic_pdf_file' className="form-control" required={true} />
                  </div>
                  <div className="form-group col-md">
                    <label >File .Docx</label>
                    <input type="file" name='topic_docx_file' className="form-control" required={true} />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md">
                    <label >Note เพิ่มเติมถึงเจ้าหน้าที่  <small style={{color : 'red'}}>**ไม่จำเป็นต้องกรอก</small> </label>
                    <input type="text" name='topic_note' className="form-control" required={true} />
                  </div>
                </div>



                <Button className='btn btn-block btn-success' >สร้างรายการ</Button>

              </form>


            </div>
          </div>


        </div>
      </section>
    </div>
  )
}

export default TopicCreatePage