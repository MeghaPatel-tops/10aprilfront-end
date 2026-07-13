import React, { useState } from 'react'

function FruitsData() {
    const [fruits, setFruist] = useState([])
    const [fname,setFname]=useState("");
    const [edit,setEdit]=useState(null)
    const handleChange = (e)=>{
        setFname(e.target.value)
    }
    const handleClick = ()=>{
       // alert(fname);
        setFruist([...fruits,fname])//spread operator convert array into comma seprated list [apple,banana,kiwi]
        setFname("")
    }

    const delFruist = (id)=>{
        let newArray = fruits.filter((index,i)=>id!=i);
        console.log(newArray);
        setFruist(newArray)
        
    }

    const handleUpdate=()=>{
        let newFruist = fruits;
        newFruist[edit]=fname;
        setFruist(newFruist)
        setEdit(null)
        setFname("")
        
    }

    const editFruist= (id)=>{
        setEdit(id)
        setFname(fruits[id])
    }
    return (
        <div>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
                    {/* Heading */}
                    <h1 className="text-3xl font-bold text-center text-green-600 mb-8">
                        🍎 Fruit Manager
                    </h1>

                    {/* Add Fruit */}
                    <div className="flex gap-3 mb-8">
                        <input
                            type="text"
                            placeholder="Enter fruit name..."
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            value={fname}
                            onChange={handleChange}

                        />

                      {
                        edit == null ?  <button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-lg font-medium transition duration-300" onClick={handleClick}>
                            Add
                        </button>:  <button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-lg font-medium transition duration-300" onClick={handleUpdate}>
                            Update
                        </button>
                      }
                    </div>

                    {/* Fruit List */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 mb-4">
                            Fruit List
                        </h2>

                        <ul className="space-y-3">
                            {
                                fruits && fruits.map((index, i) => (
                                    <li className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3" key={i}>
                                        <span className="font-medium text-gray-700">{index}</span>
                                        <button className="text-red-500 hover:text-red-600 font-medium" onClick={()=>{
                                            delFruist(i)
                                        }}>
                                            Delete
                                        </button>
                                         <button className="text-green-500 hover:text-green-600 font-medium" onClick={()=>{
                                            editFruist(i)
                                        }}>
                                            Edit
                                        </button>
                                    </li>
                                ))
                            }


                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FruitsData