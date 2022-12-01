import React,{useState,useEffect} from 'react'

const Pricing = () => {
  const [items,setItems] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:8000/pricing")
    .then((response)=>{return response.json()})
    .then(data => setItems(data))
  },[]);
  return (
    <div>
      
    <section id="pricing" class="pricing">
      <div class="container">
{/* {console.log(items)} */}
        <div class="section-title">
          <span>Pricing</span>
          <h2>Pricing</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div class="row">

          {/* <div class="col-lg-3 col-md-6">
            <div class="box">
              <h3>Free</h3>
              <h4><sup>$</sup>0<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div class="box featured">
              <h3>Business</h3>
              <h4><sup>$</sup>19<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li class="na">Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box">
              <h3>Developer</h3>
              <h4><sup>$</sup>29<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div class="box">
              <span class="advanced">Advanced</span>
              <h3>Ultimate</h3>
              <h4><sup>$</sup>49<span> / month</span></h4>
              <ul>
                <li>Aida dere</li>
                <li>Nec feugiat nisl</li>
                <li>Nulla at volutpat dola</li>
                <li>Pharetra massa</li>
                <li>Massa ultricies mi</li>
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div> */}

        {
          items && items.map((item,index)=>{
            return(
              <div class="col-lg-3 col-md-6 mt-4 mt-md-0">
            <div class="box">
              {
                (item.cardFee) >29 ? (<><span class="advanced">Advanced</span></>) : ''
              }
              <h3>{item.cardTitle}</h3>
              <h4><sup>$</sup>{item.cardFee}<span> / month</span></h4>
              <ul>
                <li>{item.cardCourseOne}</li>
                <li>{item.cardCourseTwo}</li>
                <li>{item.cardCourseThree}</li>
                {
                  (item.cardFee) ==0 ? (<><li class="na">{item.cardCourseFour}</li></>) : (<><li>{item.cardCourseFour}</li></>)
                }
                {
                  (item.cardFee) < 20 ? (<><li class="na">{item.cardCourseFive}</li></>) : (<><li>{item.cardCourseFive}</li></>)
                }
                
              </ul>
              <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div>
            </div>
          </div>
            )
          })
        }


        </div>
        

      </div>
    </section>
    </div>
  )
}

export default Pricing
