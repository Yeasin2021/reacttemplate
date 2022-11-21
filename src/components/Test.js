import React from 'react'
import ResumeData from '../data/Resume.json';
import TestJson from '../data/Test.json';
const Test = () => {
//   console.log(TestJson)
  
  return (
    <div>
      {
        TestJson.map((item,index) => {
            console.log(item.id)
            console.log(item.name)
            console.log(item.class)
           item.media.map((element) => {
            console.log(element.socialMedia)
            console.log(element.videoMedia)
            }
            
           )
        })
      }
    </div>
  )
}

export default Test
