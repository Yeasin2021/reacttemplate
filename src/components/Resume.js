import React,{useState,useEffect} from 'react';
import ResumeData from '../data/Resume.json';
import Data from '../data/TestTwo.json';

const Resume = () => {
  // console.log(ResumeData[0].Sumary[0])
  // console.log(ResumeData)
  const [items,setItems] = useState(null);
  
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
