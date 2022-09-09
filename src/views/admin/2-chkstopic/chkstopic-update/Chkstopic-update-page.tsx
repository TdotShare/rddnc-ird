import React from 'react'
import ContentHeader from '../../../../components/content-header/ContentHeader'
import ChkstopicUpdateVM from './Chkstopic-update-vm'

function ChkstopicUpdatePage() {

    const viewModel = ChkstopicUpdateVM()

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

export default ChkstopicUpdatePage