import React from 'react';

function DisplayPage({ showHomepage, showDisplay }) {
    function onHomepageClick() {
        showHomepage(true);
        showDisplay(false);
    }
    return(
        <>  
            <h1>Enter a Game Code Below</h1>
            <form>
                <input type="text" name="gamecode" placeholder="CODE" required></input>
                <button type="submit">Join Game</button>
            </form>
            <button onClick={()=> onHomepageClick()}>BACK</button>
        </>
    );
}

export default DisplayPage;