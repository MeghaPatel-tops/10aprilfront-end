import React from 'react'
import products from './ProductData';
import ProductCard from './ProductCard';

function ProductCatalog() {
    console.log(products);
    
  return (
    <div>
        <h2>Product Catalog</h2>
        <div className="row">
            {
                (products) ? products.map((index,i)=>(
                    <ProductCard product={index}/>
                )):(<p>NoData Found</p>)
            }
        </div>
    </div>
  )
}

export default ProductCatalog