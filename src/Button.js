import React from 'react'

export const Button = ({text}) => {
    let button_text = text && text.length > 0 ? text : "Button";
    return (
        <div>
           <button className="general-btn">{button_text}</button>
        </div>
    )
}

export const ButtonDark = ({text, appereance}) => {
    let button_text = text && text.length > 0 ? text : "Button";
    let button_appear = appereance  ? appereance : 2;
    return (
        <div>
           <button className="bg-red general-btn" style={{borderRadius:`${button_appear}rem`}}>{button_text}</button>
        </div>
    )
}



