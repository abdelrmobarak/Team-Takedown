import React, { useState } from 'react';
import './DisplayPage.css';

function DisplayPage(props) {
    const [gameCode, setGameCode] = useState('');

    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowDisplay(false);
    }

    function onDisplayTwoClick(e) {
        e.preventDefault(); // Prevent form submission
        if (gameCode) {
            props.setShowHomepage(false);
            props.setShowDisplay(false);
            props.setShowDisplayPageTwo(true);
        } else {
            alert("Please enter a game code before proceeding.");
        }
    }

    return(
        <div className="displaypage">  
            <h1>Enter a Game Code Below</h1>
            <form>
                <input
                    type="text"
                    name="gamecode"
                    placeholder="CODE"
                    required
                    value={gameCode} 
                    onChange={(e) => setGameCode(e.target.value)}
                />
                <button type="submit" onClick={onDisplayTwoClick}>JOIN GAME</button>
            </form>
            <button id="back" onClick={onHomepageClick}>BACK</button>
        </div>
    );
}

export default DisplayPage;
