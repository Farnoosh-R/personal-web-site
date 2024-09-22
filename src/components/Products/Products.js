import React from "react";
import PRODUCTS from "./PRODUCTS.json"
import ProductItem from "../ProductItem/ProductItem";



const Products = () => {
  return (
    <div className="Products">
      <div className="container">
        <div className="row">
     
        {PRODUCTS.map((item) => {
            return(
                <ProductItem data={item} key={item.id}/>
            )
        })}
        </div>
      </div>
    </div>
  );
};
export default Products;
