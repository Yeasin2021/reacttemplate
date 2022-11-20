import React from 'react'
import  ServiceData  from '../data/Service.json'
import ServiceDetails from './ServiceDetails'

const Service = () => {
  return (
    <div>
      <section id="services" className="services">
      <div className="container">

        <div className="section-title">
          <span>My Services</span>
          <h2>My Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
            {
                ServiceData.map((Service,index) => <ServiceDetails key={index} 
                ServiceTitle={Service.service_title} 
                ServiceIcon={Service.service_icon}
                ServiceDescription={Service.service_description} 
                />)
                
            }
            {/* {

                ServiceData.map((Service,index) => {
                    return(
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box">
                            <div className="icon"><i class={Service.service_icon}></i></div>
                            <h4 className="title"><a href="">{Service.service_title}</a></h4>
                            <p className="description">{Service.service_description}</p>
                            </div>
                        </div> 
                    )
                })
                
            } */}
    
        </div>

      </div>
    </section>
    
    </div>
  )
}

export default Service
