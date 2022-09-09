import React from 'react'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import AccountIndexVM from './Account-index-vm'

function AccountIndexPage() {

    const viewModel = AccountIndexVM()

    return (
        <div className="content-wrapper">
          <ContentHeader
            title={viewModel.title}
            breadcrumb={viewModel.breadcrumb}
          />
    
          <section className="content">
            <div className="container-fluid">

              <div className='card'>
                <div className='card-header'>ข้อมูลผู้ใช้งานทั้งหมด</div>
                <div className='card-body'></div>
              </div>
              
            </div>
          </section>
    
        </div>
      )
      
}

export default AccountIndexPage