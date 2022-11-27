import React, {useState, useEffect} from 'react'
import Items from '../data/Footer.json'

console.log(Items)
const Footer = () => {
  const [items,setItems] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8000/footer")
    .then(res => {return res.json()})
    .then(data => setItems(data))
  },[]);
  return (
    <div>
      {console.log(items)}
      <footer className='footer' style={{ backgroundImage: `url(${(Items[0].image)})` }}>
      <div className="container">
      {
        Items.map((item,index)=>(
            <div>
              <h3>{item.header}</h3>
              <p>{item.title}</p>
              <div className='social-links'>
                <a href="#" className="twitter"><i className={item.twitter}></i></a>
                <a href="#" className="facebook"><i className={item.facebook}></i></a>
                <a href="#" className="instagram"><i className={item.instagram}></i></a>
                <a href="#" className="skype"><i className={item.skype}></i></a>
                <a href="#" className="linkedin"><i className={item.linkedin}></i></a>
              </div>
              
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
