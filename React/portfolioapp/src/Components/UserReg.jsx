import React, { useState } from 'react'

function UserReg() {
    const [user,setUser]=useState([]);
    const [sUser,setSUser]=useState({});

    const handleChange = (e)=>{
        const{name,value}=e.target;
        setSUser({
            ...sUser,
            [name]:value
        })

        // {
        //     username:'abc'
        // }
        // {
        //     username:abc,email:'abc@gmail.com'
        // }
        
    }
    const handleClick = (e)=>{
        e.preventDefault();
        setUser([...user,sUser])
        setSUser({})
    }

  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-8">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">

    {/* Registration Form */}
    <div className="lg:col-span-1 bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold text-gray-700 mb-6 border-b pb-3">
        User Registration
      </h2>

      <form className="space-y-5" method='post' onSubmit={handleClick}>

        <div>
          <label className="block text-gray-600 mb-2">Full Name</label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name='username'
            onChange={handleChange}
            value={sUser.username ?? ''}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            name='email'
             onChange={handleChange}
             value={sUser.email ?? ''}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-2">Mobile</label>
          <input
            type="text"
            placeholder="Enter Mobile Number"
            name='contact'
             onChange={handleChange}
             value={sUser.contact ?? ''}
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

      

        <button
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 duration-300 font-semibold"
        >
          Register User
        </button>

      </form>
    </div>

    {/* User List */}
    <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-6 overflow-x-auto">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-gray-700">
          User List
        </h2>

        <input
          type="text"
          placeholder="Search User..."
          className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <table className="w-full text-left border-collapse">

        <thead>

          <tr className="bg-blue-600 text-white">

            <th className="p-3">#</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Mobile</th>
           
            <th className="p-3 text-center">Action</th>

          </tr>

        </thead>

        <tbody>
          {
             user && user.map((index,i)=>(
                  <tr className="border-b hover:bg-gray-50">

            <td className="p-3">{i+1}</td>
            <td className="p-3">{index.username}</td>
            <td className="p-3">{index.email}</td>
            <td className="p-3">{index.contact}</td>
           

            <td className="p-3">
              <div className="flex justify-center gap-2">

                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
                  Delete
                </button>

              </div>
            </td>

          </tr>
             ))
          }
        

        

        </tbody>

      </table>

    </div>

  </div>
</div>
    </div>
  )
}

export default UserReg