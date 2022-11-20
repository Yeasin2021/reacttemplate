import React from 'react';
import ResumeData from '../data/Resume.json';

const Resume = () => {
  // console.log(ResumeData[0].Sumary[0])
  console.log(ResumeData)
  return (
    
      <div id="resume" className="resume" style={{ marginTop:'5%' }}>
      <div className="container">

        <div className="section-title">
          <span>My Resume</span>
          <h2>My Resume</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
          {/* {ResumeData[0].Sumary[0].title_one} */}
          {/* {
            ResumeData.map((item_1,index) => {
              item_1.Sumary.map((item_2,serise) => {
              return(
                <div>
                    <h3 className="resume-title">{item_2.title_one}</h3>
                    <div className="resume-item pb-0">
                      <h4>Alice Barkley</h4>
                      <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                      <p>
                      <ul>
                        <li>Portland par 127,Orlando, FL</li>
                        <li>(123) 456-7891</li>
                        <li>alice.barkley@example.com</li>
                      </ul>
                      </p>
                    </div>
                </div>
              )
             })
            })
          } */}
            {/* <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Alice Barkley</h4>
              <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
              <p>
              <ul>
                <li>Portland par 127,Orlando, FL</li>
                <li>(123) 456-7891</li>
                <li>alice.barkley@example.com</li>
              </ul>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Master of Fine Arts &amp; Graphic Design</h4>
              <h5>2015 - 2016</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
              <h5>2010 - 2014</h5>
              <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
              <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
            </div>

          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Senior graphic design specialist</h4>
              <h5>2019 - Present</h5>
              <p><em>Experion, New York, NY </em></p>
              <p>
              <ul>
                <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p><em>Stepping Stone Advertising, New York, NY</em></p>
              <p>
              <ul>
                <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
              </ul>
              </p>
            </div> */}

            <h3 className="resume-title">{ResumeData[0].Sumary[0].title_one}</h3>
            <div className="resume-item pb-0">
              <h4>{ResumeData[0].Sumary[1].key_word_one}</h4>
              <p><em>{ResumeData[0].Sumary[2].details}</em></p>
              <p>
              <ul>
                <li>{ResumeData[0].Sumary[3].address}</li>
                <li>{ResumeData[0].Sumary[4].phone}</li>
                <li>{ResumeData[0].Sumary[5].mail}</li>
              </ul>
              </p>
            </div>

            <h3 className="resume-title">{ResumeData[0].Education[0].title_one}</h3>
            <div className="resume-item">
              <h4>{ResumeData[0].Education[1].degree1}</h4>
              <h5>{ResumeData[0].Education[2].session1}</h5>
              <p><em>{ResumeData[0].Education[3].innstitue1}</em></p>
              <p>{ResumeData[0].Education[4].details1}</p>
            </div>
            <div className="resume-item">
              <h4>{ResumeData[0].Education[5].degree2}</h4>
              <h5>{ResumeData[0].Education[6].session2}</h5>
              <p><em>{ResumeData[0].Education[7].innstitue2}</em></p>
              <p>{ResumeData[0].Education[8].details2}</p>
            </div>

          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">{ResumeData[0].experience_1[0].title}</h3>
            <div className="resume-item">
              <h4>{ResumeData[0].experience_1[1].resume_item_1}</h4>
              <h5>{ResumeData[0].experience_1[2].resume_item_2}</h5>
              <p><em>{ResumeData[0].experience_1[3].resume_item_3}</em></p>
              <p>
              <ul>
                <li>{ResumeData[0].experience_1[4].des_1}</li>
                <li>{ResumeData[0].experience_1[5].des_2}</li>
                <li>{ResumeData[0].experience_1[6].des_3}</li>
                <li>{ResumeData[0].experience_1[7].des_4}</li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>{ResumeData[0].experience_2[0].resume_item_1}</h4>
              <h5>{ResumeData[0].experience_2[1].resume_item_2}</h5>
              <p><em>{ResumeData[0].experience_2[2].resume_item_3}</em></p>
              <p>
              <ul>
                <li>{ResumeData[0].experience_2[3].des_1}</li>
                <li>{ResumeData[0].experience_2[4].des_2}</li>
                <li>{ResumeData[0].experience_2[5].des_3}</li>
                <li>{ResumeData[0].experience_2[6].des_4}</li>
              </ul>
              </p>
            </div>


          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Resume
