import React from "react";

const Button = ({data, handle}) => {
    return(
        <button onClick={handle} className="btn btn-primary">{data}</button>
    )
}
export default Button;