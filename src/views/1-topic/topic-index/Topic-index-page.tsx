import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import { routerPath } from '../../../utils/routerpath'
import TopicIndexVM from './Topic-index-vm'

function TopicIndexPage() {

  const viewModel = TopicIndexVM()


  if (!viewModel.query_topic_data.isLoading) {
    if (viewModel.query_topic_data.data?.bypass === false || viewModel.query_topic_data.isError) {
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

            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default TopicIndexPage