import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/Button'
import ContentHeader from '../../../components/content-header/ContentHeader'
import { routerPath } from '../../../utils/routerpath'
import TopicIndexVM from './Topic-index-vm'

function TopicIndexPage() {

  const viewModel = TopicIndexVM()

  return (
    <div className="content-wrapper">
      <ContentHeader
        title={viewModel.title}
        breadcrumb={viewModel.breadcrumb}
      />

      <section className="content">
        <div className="container-fluid">

        <Link to={`${routerPath.Topic}/create`}><Button className='btn btn-primary'><i className="fas fa-plus"></i> สร้างเอกสาร</Button></Link>

          <div style={{paddingBottom : `1%`}}></div>

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