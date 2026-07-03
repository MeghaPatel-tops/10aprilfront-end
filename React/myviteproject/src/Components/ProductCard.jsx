import React from 'react'

function ProductCard(props) {
  return (
    <div>
        <img src={props.product.image} alt="" />
        <h3>{props.product.name}</h3>
        <p><b>Price:{props.product.price}</b></p>
    </div>
  )
}

export default ProductCard