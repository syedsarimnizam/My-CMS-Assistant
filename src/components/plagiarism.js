import React from 'react' 
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

const Plagiarism =()=>{
    return(
        <div className='box p-4 my-4 my-lg-0'>
            <div className='row'>
                <div className='col-lg-4'>
                    <p className='h4 mb-3'>Plagiarism Result</p>
                    <div className='ml-3' style={{ width: 120, height: 120 }}>
                        <CircularProgressbar
                            value={60}
                            text={`60%`}
                            strokeWidth={7}
                        />
                    </div>
                </div>
                <div className='col-lg-8'>
                    <p className='h4 text-color mb-3'>Your Content is 75% plagiarised</p>
                    <p className='text-secondary'>I was always in search of free SEO tools, but couldn’t find the one; I was looking for. But then I came to knew about Duplichecker. It is a great resource to get my work done quickly. They have incorporated all the essential SEO utilities that are required in the modern internet era.</p>
                </div>
            </div>
        </div>
    )
}
export default Plagiarism