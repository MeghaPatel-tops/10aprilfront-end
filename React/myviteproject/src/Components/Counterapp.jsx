import React, { useState } from 'react'

function Counterapp() {
    const [count,setCount]=useState(80)
    const [name,setName]=useState("abc")

    const incre = ()=>{
        setCount(count+1)
    }
     const decre = ()=>{
        setCount(count-1)
    }

    const handleChange = (e)=>{
        setName(e.target.value)
    }
  return (
    <div>
        <fieldset>
             <h1>Counterapp</h1>
             <button onClick={incre}>+</button>
             {count}
             <button onClick={decre}>-</button>

             <br />
             <label htmlFor="">Enter name</label>
             <input type="text" name="" id="" onChange={handleChange}/>
             <p>Welocme User:{name}</p>
        </fieldset>
    </div>
  )
}

export default Counterapp