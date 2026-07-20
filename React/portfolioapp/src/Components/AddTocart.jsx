import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

function AddTocart(cartData) {
    const userCartData = useContext(UserContext)
    const addtocart=()=>{
        //console.log(cartData.data);
        console.log(userCartData);
        
    }
  return (
    <div>
         <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
               onClick={addtocart}
              >
                Add to Cart
              </button>
    </div>
  )
}

export default AddTocart