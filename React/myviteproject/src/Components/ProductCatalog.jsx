import React from 'react'
import products from './ProductData';
import ProductCard from './ProductCard';

function ProductCatalog() {
  
  return (
    <div>
        <h2>Product Catalog</h2>
        <div className="row">
            {
                (products) ? products.map((index,i)=>(
                    <ProductCard key={i} name={111} image={index.image} price={index.price}/>
                )):(<p>NoData Found</p>)
            }
        </div>
    </div>
  )
}

export default ProductCatalog