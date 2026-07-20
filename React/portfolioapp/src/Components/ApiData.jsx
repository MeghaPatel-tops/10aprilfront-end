import React, { useEffect, useState } from 'react'
import AddTocart from './AddTocart';

function ApiData(user) {
    const [produtcArray,setProductArray]=useState([])

    const getData = ()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProductArray(data));
    }

    useEffect(()=>{
         getData();    
    },[])
  return (
    <div className='bg-gray-200'>ApiData
       <div className="overflow-x-auto">
  <table className="min-w-full border border-gray-300 rounded-lg">
    <thead className="bg-gray-100">
      <tr>
        <th className="border px-4 py-2 text-left">#</th>
        <th className="border px-4 py-2 text-left">Product Name</th>
        <th className="border px-4 py-2 text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      {produtcArray &&
        produtcArray.map((product, index) => (
          <tr key={index} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{index + 1}</td>

            <td className="border px-4 py-2">
              {product.title}
            </td>

            <td className="border px-4 py-2 text-center">
                <AddTocart data={{"product":product,"uid":user.user.Uid}}/>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default ApiData