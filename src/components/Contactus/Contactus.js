import React, { useState } from "react";
import Button from "../Button/Button";
import "./style.css"

const Contactus = () =>{

    const [name, setName] = useState('');
    const [last, setLast] = useState('');

    const handleChangeName = (e) => {
        console.log(name)
        return name;
    }
    const handleChangeLast = (e) => {
        console.log(last)
        return last;
    }
    const welcome = () => {
        alert (`${handleChangeName()} ${handleChangeLast()} aziz khoshamadid`)
    }

    return(
        <div className="Contactus container">
        <h2 className="mb-4">contact us</h2>
        <form >
        <input onChange={(e) =>  setName(e.target.value)} className="form-control" type="text" placeholder="name"/>
        <input onChange={(e) =>  setLast(e.target.value)} className="form-control" type="text" placeholder="last name"/>
        <input className="form-control" type="text" placeholder="phone"/>
        <Button handle={() => welcome()} data={"Send Data"} />
        </form>
        </div>
        
    )
}
export default Contactus;