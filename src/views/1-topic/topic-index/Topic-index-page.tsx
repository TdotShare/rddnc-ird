import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import LoadingData from '../../../components/LoadingData'
import Pagination from '../../../components/Pagination'
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
                      <table className="table table-bordered ">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">ชื่อเรื่อง</th>
                            <th scope="col">ไฟล์แนบ</th>
                            <th scope="col">สถานะ</th>
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
                                    <li>{el.topic_pdf_file}</li>
                                    <li>{el.topic_docx_file}</li>
                                  </ul>
                                </td>
                                <td>{el.status_name}</td>
                                <td><button className='btn btn-block btn-success' disabled={el.status_bypass ? true : false} ><i className="fas fa-clipboard-check"></i> ไฟล์ตอบกลับจากเจ้าหน้าที่</button> </td>
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