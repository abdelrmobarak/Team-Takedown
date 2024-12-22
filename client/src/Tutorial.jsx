import React from 'react';
import './Tutorial.css';

function Tutorial(props) {

    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowDisplay(false);
    }


    return(
        <div className='tutorial'>
        <h1>Work in Progress!</h1>
        <button id="back" onClick={onHomepageClick}>BACK</button>
        </div>
    );
}


export default Tutorial;