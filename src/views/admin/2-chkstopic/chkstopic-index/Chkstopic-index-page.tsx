import React from 'react'
import ContentHeader from '../../../../components/content-header/ContentHeader'
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
              
            </div>
          </section>
    
        </div>
      )
      
}

export default ChkstopicIndexPage