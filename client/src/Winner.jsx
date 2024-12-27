import React from 'react';
import "./Winner.css";
import {useState} from 'react';

function Winner(props) {

    function backToHomepage() {
        props.setShowWinner(false)
        props.setShowHomepage(true)
    }


    return (
        <div className="winner">
            <h1>{(props.winner).toUpperCase()} team is the Winner!</h1>
            <button id='back' onClick={backToHomepage}>BACK</button>
        </div>
    )
}

export default Winner;