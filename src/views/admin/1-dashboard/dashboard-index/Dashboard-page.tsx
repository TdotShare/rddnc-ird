import React from 'react'
import ContentHeader from '../../../../components/content-header/ContentHeader'
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
              
            </div>
          </section>
    
        </div>
      )
      
}

export default DashboardPage