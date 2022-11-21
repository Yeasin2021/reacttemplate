import React from 'react';
import TestJson from '../data/Test.json';
import TestJson2 from '../data/TestTwo.json';
console.log(TestJson2)
const Test = () => {
  return (
    <div>
      {
        // TestJson.map(testOne => (
        //     <article>
        //         <p>{testOne.id}</p>
        //         <p>{testOne.name}</p>
        //         <p>{testOne.class}</p>
        //         {
        //             testOne.media.map((item)=> <div>
        //                 <p>{item.socialMedia}</p>
        //                 <p>{item.videoMedia}</p>
        //             </div>)
        //         }
        //     </article>
        // ))
        TestJson2.map(testOne => (
            <article>
                {
                    testOne.media.map((item)=> <div>
                        <p>{item.sm_title}</p>
                        <p>{item.sm_key_word_one}</p>
                        <p>{item.sm_details}</p>
                        <p>{item.sm_address}</p>
                        <p>{item.sm_phone}</p>
                        <p>{item.sm_mail}</p>
                        <p>{item.ed_title_one}</p>
                    </div>)
                }
            </article>
        ))
      }
    </div>
  )
}

export default Test
