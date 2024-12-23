import React, { useState } from 'react';
import './ContestantPage.css';

function ContestantPage(props) {

    const [gameCode, setGameCode] = useState('')

    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowContestant(false);
    }

    function onJoinClick(e) {
        if (gameCode) {
            e.preventDefault()
            props.setShowContestant(false)
            props.setShowContestantTwo(true)
            console.log(gameCode) // debugging
            props.setRoomID(gameCode.toUpperCase())}
        else {
            alert("Enter a game code!")
        }
    }

    return(
        <div className="contestantpage">
            <h1>Enter a Game Code Below</h1>
            <form onSubmit={(e)=> onJoinClick(e)}>

                <input type="text" name="gamecode" placeholder="CODE" required
                onChange={(e)=>setGameCode(e.target.value)}></input>
                
                <button type="submit" onClick={(e)=> onJoinClick(e) }>JOIN GAME</button>
            </form>
            <button id='back' onClick={()=>onHomepageClick()}>BACK</button>
        </div>
    );
}

export default ContestantPage;