import React,{useState,useEffect} from 'react'

const Portfolio = () => {
  const [items,setItems]  = useState([]);
  useEffect(()=>{
    const url = "http://localhost:8000/portfolio";
    fetch(url)
    .then(res=>{return res.json()})
    .then(data => setItems(data))
    .catch(error => console.warn(error))
  },[])
  // {console.log(items.header_1)}
  return (
    <div>
       <section id="portfolio" class="portfolio">
      <div class="container">
      
        <div class="section-title">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <ul id="portfolio-flters" class="d-flex justify-content-center">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        {
          items && items.map((item,index)=>{
            return(
              <div class="row portfolio-container">
                

                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-img"><img src={item.image} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header}</h4>
                      <p>{item.title}</p>
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-img"><img src={item.image_1} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_1}</h4>
                      <p>{item.title_1}</p>
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-img"><img src={item.image_2} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_2}</h4>
                      <p>{item.titl_2}</p>
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-img"><img src={item.image_3} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_3}</h4>
                      <p>{item.title_1}</p>
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-img"><img src={item.image_4} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_4}</h4>
                      <p>{item.title_4}</p>
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                    <div class="portfolio-img"><img src={item.image_5} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_5}</h4>
                      <p>{item.title_5}</p>
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-img"><img src={item.image_6} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_6}</h4>
                      <p>{item.title_6}</p>
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                    <div class="portfolio-img"><img src={item.image_7} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_7}</h4>
                      <p>{item.title_7}</p>
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                    <div class="portfolio-img"><img src={item.image_8} class="img-fluid" alt="" /></div>
                    <div class="portfolio-info">
                      <h4>{item.header_8}</h4>
                      <p>{item.title_8}</p>
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
                      <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
                    </div>
                  </div>

                </div>
             
            )
          })
        }

        <div class="row portfolio-container">

          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div> */}

          {/* <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={items[1].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[1].header}</h4>
              <p>{items[1].title}</p>
              <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={items[2].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[2].header}</h4>
              <p>{items[2].title}</p>
              <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={items[3].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[3].header}</h4>
              <p>{items[3].title}</p>
              <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={items[4].header} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[4].header}</h4>
              <p>{items[4].title}</p>
              <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-img"><img src={items[5].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[5].header}</h4>
              <p>{items[5].title}</p>
              <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={items[6].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[6].header}</h4>
              <p>{items[6].title}</p>
              <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-img"><img src={items[7].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[7].header}</h4>
              <p>{items[7].header}</p>
              <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-img"><img src={items[8].image} class="img-fluid" alt="" /></div>
            <div class="portfolio-info">
              <h4>{items[8].header}</h4>
              <p>{items[8].title}</p>
              <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div> */}

        </div>

      </div>
    </section>
    </div>
  )
}

export default Portfolio
