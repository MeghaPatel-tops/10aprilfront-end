import React, { useEffect, useState } from 'react'

function ApiData() {
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
        <ul>
        {
            produtcArray && produtcArray.map((index,i)=>(
                    <li key={i}>{index.title}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default ApiData