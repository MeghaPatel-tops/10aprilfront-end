import React, { useEffect, useState } from 'react'

function HookEx() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState("");

    // useEffect(()=>{
    //     console.log("use effect called")
    // })


     useEffect(()=>{
        let count=0;
        console.log("use effect called");
        //  const timer  = setInterval(()=>{
               
        //       console.log("Timer run on every second",);
        //       console.log(++count);
              
                
        //     },1000)
        return ()=>{
            console.log("comp unmount")
            //clearTimeout(timer)
            
        }
    },[])
  return (
    <div className=' bg-gray-200  p-20'>HookEx

        <fieldset>
            <h1></h1>
            <input type="number" name="" id="" value={count} 
             className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>{
                setCount(e.target.value)
            }} />
            <input type="text" name="" id=""  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"  onChange={(e)=>{
                setName(e.target.value)
            }}  />
        </fieldset>
    </div>
  )
}

export default HookEx