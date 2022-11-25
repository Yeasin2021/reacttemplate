import React from 'react'
import Items from '../data/Footer.json'

console.log(Items)
const Footer = () => {
  return (
    <div>
      <footer className='footer' style={{ backgroundImage: `url(${(Items[0].image)})` }}>
      <div className="container">
      {
        Items.map((item,index)=>(
            <div>
              <h3>{item.header}</h3>
              <p>{item.title}</p>
              <a href="#" className="twitter"><i className={item.twitter}></i></a>
              <a href="#" className="facebook"><i className={item.facebook}></i></a>
              <a href="#" className="instagram"><i className={item.instagram}></i></a>
              <a href="#" className="skype"><i className={item.skype}></i></a>
              <a href="#" className="linkedin"><i className={item.linkedin}></i></a>
              <div className="copyright">
                &copy; {item.copyrigt_one} <strong><span>{item.copyrigt_two}</span></strong>{item.copyrigt_three}
              </div>
              <div className="credits">
                
              {item.design_one} <a href="https://bootstrapmade.com/">{item.design_two}</a>
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
