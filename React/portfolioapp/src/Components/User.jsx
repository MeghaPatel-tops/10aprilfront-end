import axios from 'axios'
import React, { useEffect } from 'react'

function User() {

    const getUserData = async()=>{
        try {
            let res = await axios.get('https://fakestoreapi.com/users');
            console.log(res.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    useEffect(()=>{
        getUserData();
    },[])
  return (
    <div>

    </div>
  )
}

export default User