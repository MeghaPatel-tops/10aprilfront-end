import React from 'react'
import img1 from '../assets/img1.jpeg'

function About() {
  return (
    <div className='p-20'>
        <h2 className='text-5xl text-gray-800 bolder text-center'>About</h2>
        <div className="grid grid-cols-2 gap-20 mt-10 p-10">
            <div className="col flex flex-col gap-10">
                <h3 className='text-3xl text-gray-800'>About our Company</h3>
                <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque molestiae inventore quibusdam. Alias porro dolor quisquam, earum corrupti architecto deleniti, consequatur optio sapiente culpa, numquam cumque? Odio quae ut dolorum!</p>
                <div>
                     <button className='px-10 py-5  bg-gray-900 text-white rounded  hover:bg-white hover:text-blue-800 hover:border-4 hover:border-blue-800'>Contact us</button>
                </div>
            </div>
            <div className="col">
                <img src={img1} alt="" className='w-full' style={{height:'300px'}} />
            </div>
        </div>
    </div>
  )
}

export default About