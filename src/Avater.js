import React from 'react'
import avater from "./logo512.png";

const Avater = ({user, appearance, size, name}) => {

    let image = user ? user : avater;
    let shape = appearance && appearance === "squre" ? "squre" : "circle";
    let sizeA, nameA;
    nameA = name && name.length > 0 ? name : "user"

    if(size){
        if(size === "medium"){
            sizeA = "medium"
        } else if(size === "small"){
            sizeA = "small"
        } else {
            sizeA = "large"
        }
    }else{
        sizeA =  "size-default";
    }

    return (
        <div className="avater-con">
            <img src={image} alt="avater" className={`avater ${shape} ${appearance} ${sizeA}`} />
            <p>{nameA}</p>
        </div>
    )
}

export default Avater
