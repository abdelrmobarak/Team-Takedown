import React from 'react';

function ContestantPage({ showHomepage, showContestant, showContestantTwo }) {
    function onHomepageClick() {
        showHomepage(true);
        showContestant(false);
    }

    function onJoinClick() {
        showContestant(false)
        showContestantTwo(true)
    }

    return(
        <>
            <h1>Enter a Game Code Below</h1>
            <form>
                <input type="text" name="gamecode" placeholder="CODE" required></input>
                <button type="submit" onClick={()=> onJoinClick() }>Join Game</button>
            </form>
            <button onClick={()=> onHomepageClick()}>BACK</button>
        </>
    );
}

export default ContestantPage;