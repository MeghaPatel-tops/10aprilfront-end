import React from 'react'
import PropTypes from 'prop-types'

function ProductCard({name,image,price}) {

  return (
    <div>
        <img src={image} alt="" />
        <h3>{name}</h3>
        <p><b>Price:{price}</b></p>
    </div>
  )
}

ProductCard.propTypes={
 name: PropTypes.string.isRequired,
}

export default ProductCard