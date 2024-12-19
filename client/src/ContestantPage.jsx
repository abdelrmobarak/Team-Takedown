import React, { useState } from 'react';

function ContestantPage({ showHomepage, showContestant, showContestantTwo, roomInfo, setter }) {

    const [gameCode, setGameCode] = useState('')
    function onHomepageClick() {
        showHomepage(true);
        showContestant(false);
    }

    function onJoinClick(e) {
        e.preventDefault()
        showContestant(false)
        showContestantTwo(true)
        console.log(gameCode) // debugging
        setter(gameCode)
    }

    return(
        <>
            <h1>Enter a Game Code Below</h1>
            <form onSubmit={(e)=> onJoinClick(e)}>

                <input type="text" name="gamecode" placeholder="CODE" required
                onChange={(e)=>setGameCode(e.target.value)}></input>
                
                <button type="submit" onClick={(e)=> onJoinClick(e) }>Join Game</button>
            </form>
            <button onClick={()=>onHomepageClick}>BACK</button>
        </>
    );
}

export default ContestantPage;