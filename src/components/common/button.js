import React from "react";
import './style.css';

const Button =(props)=>{
    const {data,handleClick} =props

    return(
        <button className="btn-main" onClick={handleClick} >{data}</button>
    ) 
}
export default Button