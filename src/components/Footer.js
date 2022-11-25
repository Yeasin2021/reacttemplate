import React from 'react'
import Items from '../data/Footer.json'
console.log(Items)
const Footer = () => {
  return (
    <div>
      <footer className='footer'>
    <div className="container">
      {
        Items.map((item,index)=>(
            <div>
              <h3>{item.header}</h3>
              <p>{item.title}</p>
              {
                item.social_media.map((item_one,index_one)=> (
                 
                <div>
                  <a href="#" className="twitter"><i className={item_one.media_one}></i></a>
                        <span><a href="#" className="facebook"><i className={item_one.media_two}></i></a></span>
                       <span><a href="#" className="instagram"><i className={item_one.media_three}></i></a></span>
                        <span><a href="#" className="google-plus"><i className={item_one.media_four}></i></a></span>
                        <span><a href="#" className="linkedin"><i className={item_one.media_five}></i></a></span>
                </div>
                  
                ))
              }
              
              <div className="copyright">
                &copy; Copyright <strong><span>Laura</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
                
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
        ))
      }
      
    </div>
  </footer>
    </div>
  )
}

export default Footer
