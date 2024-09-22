import React from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";


const ProductItem = ({ data }) => {
  return (
    <div className="ProductItem col-md-4 card">
    <div className="">
    <Image data={"https://i.postimg.cc/GhZsByM3/p4.jpg"}/>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
    <h5>{data.price}</h5>
    <Button data={"Add to Card"}/>
    </div>
    
    </div>
  );
};
export default ProductItem;
