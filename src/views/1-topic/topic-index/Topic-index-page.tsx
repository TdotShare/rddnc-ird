import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import Pagination from '../../../components/Pagination'
import { PUBLIC_PATH } from '../../../config/public_path'
import { routerPath } from '../../../utils/routerpath'
import TopicIndexVM from './Topic-index-vm'

function TopicIndexPage() {

  const viewModel = TopicIndexVM()


  if (!viewModel.query_topic_data.isLoading) {
    if (viewModel.query_topic_data.data?.bypass === false) {
      return <Navigate to={`/login`} />
    }
  }


  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

          <Link to={`${routerPath.Topic}/create`}><Button className='btn btn-primary'><i className="fas fa-plus"></i> สร้างเอกสาร</Button></Link>

          <div style={{ paddingBottom: `1%` }}></div>

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
                      <table className="table table-bordered " style={{textAlign:`center`}}>
                        <thead>
                          <tr>
                            <th rowSpan={2} scope="col">#</th>
                            <th rowSpan={2} scope="col">ชื่อเรื่อง</th>
                            <th colSpan={2} scope="col">ไฟล์แนบ</th>
                            <th rowSpan={2} scope="col">สถานะการดำเนินงาน</th>
                            <th colSpan={3} scope="col">ผลการตรวจสอบ</th>
                            <th rowSpan={2} scope="col"></th>
                          </tr>
                          <tr>
                            <th scope="col" >word</th>
                            <th scope="col" >pdf</th>
                            <th scope="col" >เปอร์เซ็นต์ความซ้ำซ้อน</th>
                            <th scope="col" >รายละเอียดการตรวจสอบ</th>
                            <th scope="col" >Note. เพิ่มจากเจ้าหน้าที่</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {
                            viewModel.query_topic_data.data?.data.data.map((el, index) => (
                              <tr key={index} >
                                <th scope="row">{Number(viewModel.query_topic_data.data?.data.from!) + index}</th>
                                <td>{el.topic_name}</td>
                                <td><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.topic_docx_file}`} target={`_blank`} >{el.topic_docx_file}</a> </td>
                                <td><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.topic_pdf_file}`}  target={`_blank`}  >{el.topic_pdf_file}</a></td>
                                <td>{el.status_name}</td>
                                <td>{el.answer_percent}</td>
                                <td><a href={`${PUBLIC_PATH}/upload/${el.topic_id}/${el.answer_pdf_file}`}  target={`_blank`}  >{el.answer_pdf_file}</a></td>
                                <td>{el.answer_note}</td>
                                <td><button className='btn btn-block btn-danger' onClick={() => viewModel.actionDelete(el.topic_id)}  disabled={el.topic_status_id === 1 ? false : true} ><i className="fas fa-trash"></i> ลบข้อมูล</button> </td>
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

export default TopicIndexPage