import React, { useState } from 'react';
import './Card.css';

function Card(props) {

    function handleClick(){
        props.onClick(props.index)
    }

    return (
        <div className={`memo-card-container ${props.isClicked ? "memo-clicked" : ""}`} onClick={handleClick}>
            <h1 className={`memo-card-face ${props.isClicked ? "" : "memo-hidden"}`} name={props.face}>{props.face}</h1>
        </div>
    )
}


export default Card;