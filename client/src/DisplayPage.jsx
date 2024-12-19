import React, { useState } from 'react';

function DisplayPage({ showHomepage, showDisplay, showDisplayPageTwo }) {
    const [gameCode, setGameCode] = useState('');

    function onHomepageClick() {
        showHomepage(true);
        showDisplay(false);
    }

    function onDisplayTwoClick(e) {
        e.preventDefault(); // Prevent form submission
        if (gameCode) {
            showHomepage(false);
            showDisplay(false);
            showDisplayPageTwo(true);
        } else {
            alert("Please enter a game code before proceeding.");
        }
    }

    return(
        <>  
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
                <button type="submit" onClick={onDisplayTwoClick}>Join Game</button>
            </form>
            <button onClick={onHomepageClick}>BACK</button>
        </>
    );
}

export default DisplayPage;
