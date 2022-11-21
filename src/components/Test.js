import React from 'react';
import TestJson from '../data/Test.json';
const Test = () => {
  return (
    <div>
      {
        TestJson.map(testOne => (
            <article>
                <p>{testOne.id}</p>
                <p>{testOne.name}</p>
                <p>{testOne.class}</p>
                {
                    testOne.media.map((item)=> <div>
                        <p>{item.socialMedia}</p>
                        <p>{item.videoMedia}</p>
                    </div>)
                }
            </article>
        ))
      }
    </div>
  )
}

export default Test
