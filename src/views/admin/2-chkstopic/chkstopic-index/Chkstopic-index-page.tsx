import React from 'react'
import { Link } from 'react-router-dom'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import LoadingData from '../../../../components/LoadingData'
import Pagination from '../../../../components/Pagination'
import { PUBLIC_PATH } from '../../../../config/public_path'
import { routerPath } from '../../../../utils/routerpath'
import ChkstopicIndexVM from './Chkstopic-index-vm'

function ChkstopicIndexPage() {

  const viewModel = ChkstopicIndexVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

          <div className='card'>
            <div className='card-header'>ข้อมูลเอกสารที่ตรวจสอบความซ้ำซ้อนของผลงานวิจัย</div>
            <div className='card-body'>

              {
                viewModel.query_topic_data.isLoading ?

                  <LoadingData />

                  :

                  <>

                    <div style={{ display: 'flex', justifyContent: 'right' }}>

                      <div className='row'>
                        <div className='col'>
                          <input type="text" className="form-control" onChange={viewModel.inputSearch} placeholder='Search...' />
                        </div>
                      </div>



                    </div>

                    <div style={{ marginBottom: `1%` }}></div>

                    <div className="table-responsive">
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">ชื่อเรื่อง</th>
                            <th scope="col">ไฟล์แนบ</th>
                            <th scope="col">ไฟล์แนบจากเจ้าหน้าที่</th>
                            <th scope="col">สถานะ</th>
                            <th scope="col">อัปเดตข้อมูลล่าสุดโดย</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            viewModel.query_topic_data.data?.data.data.map((el, index) => (
                              <tr key={index} >
                                <th scope="row">{Number(viewModel.query_topic_data.data?.data.from!) + index}</th>
                                <td>{el.topic_name}</td>
                                <td>
                                  <ul>
                                    <li><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.topic_docx_file}`} target={`_blank`} >{el.topic_docx_file}</a></li>
                                    <li><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.topic_pdf_file}`}  target={`_blank`}  >{el.topic_pdf_file}</a></li>
                                  </ul>
                                </td>
                                <td><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.answer_pdf_file}`}  target={`_blank`} >{el.answer_pdf_file}</a></td>
                                <td>{el.status_name}</td>
                                <td>{el.topic_update_by}</td>
                                <td><button onClick={() => viewModel.actionInProgress(el.topic_id, el.topic_name)} className='btn btn-block btn-primary' disabled={el.topic_status_id === 1 ? false : true} ><i className="fas fa-bell"></i> แจ้งกำลังดำเนินการ</button> </td>
                                <td><Link to={`${routerPath.Chkstopic}/${el.topic_id}`}><button className='btn btn-block btn-success' disabled={el.topic_status_id === 3 ? true : false} ><i className="fas fa-share"></i> เพิ่มไฟล์แนบส่งกลับ</button></Link>  </td>
                                <td><button onClick={() => viewModel.actionDelete(el.topic_id, el.topic_name)} className='btn btn-block btn-danger' ><i className="fas fa-trash"></i> ลบข้อมูล</button> </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>

                    <div style={{ marginBottom: `1%` }}></div>

                    <Pagination
                      current_page={viewModel.query_topic_data.data?.data.current_page!}
                      last_page={viewModel.query_topic_data.data?.data.last_page!}
                      total={viewModel.query_topic_data.data?.data.data.length!}
                      nextClick={() => viewModel.setPage(viewModel.query_topic_data.data?.data.current_page! + 1)}
                      previousClick={() => viewModel.setPage(viewModel.query_topic_data.data?.data.current_page! - 1)}
                      numberClick={(num: number) => viewModel.setPage(num)}

                    />

                  </>

              }

            </div>
          </div>

        </div>
      </section>

    </div>
  )

}

export default ChkstopicIndexPage