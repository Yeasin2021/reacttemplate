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
              <table>
                  <tr>
                  {
                      item.social_media.map((item_one,index_one)=> (
                      
                      <div>
                              <td><a href="#" className="twitter r1"><i className={item_one.media_one}></i></a></td>
                              <td><a href="#" className="twitter r1"><i className={item_one.media_one}></i></a></td>
                              <td><a href="#" className="twitter r1"><i className={item_one.media_one}></i></a></td>
                              <td><a href="#" className="twitter r1"><i className={item_one.media_one}></i></a></td>
                              <td><a href="#" className="twitter r1"><i className={item_one.media_one}></i></a></td>
                              <td><a href="#" className="facebook r1"><i className={item_one.media_two}></i></a></td>
                              {/* <td><a href="#" className="instagram r1"><i className={item_one.media_three}></i></a></td>
                              <td><a href="#" className="google-plus r1"><i className={item_one.media_four}></i></a></td>
                              <td><a href="#" className="linkedin r1"><i className={item_one.media_five}></i></a></td> */}
                              {/* <a href="#" className="facebook r1"><i className={item_one.media_two}></i></a>
                              <a href="#" className="instagram r1"><i className={item_one.media_three}></i></a>
                              <a href="#" className="google-plus r1"><i className={item_one.media_four}></i></a>
                              <a href="#" className="linkedin r1"><i className={item_one.media_five}></i></a> */}
                      </div>
                        
                      ))
                    }
                  </tr>
              </table>
             
              
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
