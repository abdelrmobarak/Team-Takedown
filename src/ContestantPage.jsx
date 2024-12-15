import React from 'react';

function ContestantPage({ showHomepage, showContestant }) {
    function onHomepageClick() {
        showHomepage(true);
        showContestant(false);
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

export default ContestantPage;