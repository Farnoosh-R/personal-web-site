import React from "react";
import "./style.css"

const Image = ({data}) =>{
    return(
        <img src={data} className="card-img-top"/>
    )
}
export default Image;