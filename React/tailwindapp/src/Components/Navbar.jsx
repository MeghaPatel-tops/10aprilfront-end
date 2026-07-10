import React from 'react'

function Navbar() {
  return (
    <div className='bg-gray-900 text-white flex px-30 py-10 justify-between' >
        <div className="logo">
            <label htmlFor="" className='text-3xl bolder'>MyWebApp</label>
        </div>
        <ul className='flex gap-20 text-xl'>
            <li><a href="">Item-1</a></li>
            <li><a href="">Item-2</a></li>
            <li><a href="">Item-3</a></li>
            <li><a href="">Item-4</a></li>
            <li><a href="">Item-5</a></li>
        </ul>
    </div>
  )
}

export default Navbar