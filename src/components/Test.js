import React from 'react'
import ResumeData from '../data/Resume.json';
const Test = () => {
  console.log(ResumeData)
  
  return (
    <div>
      {
        ResumeData.map((Resume,index) => {
            Resume.Sumary.map((item,digit) => {
                return(
                    <div key={digit}>
                        {console.log(item.title_one)}
                        {console.log(item.details)}
                        {console.log(item.details)}
                        {console.log(item.details)}
                        {console.log(item.details)}
                        {console.log(item.details)}
                    </div>
                )
            })
        })
      }
    </div>
  )
}

export default Test
