import React from 'react';
import './Homepage.css';
import io from 'socket.io-client'

export const socket = io.connect("https://team-takedown.onrender.com/")


function Homepage(props) {

  function onDisplayClick() {
    props.setShowHomepage(false);
    props.setShowDisplay(true);
  }
  
  function onHostClick() {
    props.setShowHomepage(false);
    props.setShowHostTwo(true);
  }

  function onContestantClick() {
    props.setShowHomepage(false);
    props.setShowContestant(true);
  }

  function onTutorialClick() {
    props.setShowHomepage(false);
    props.setShowTutorialScreen(true);
  }

  return (
    <div className='homepage'>
    <h1>TEAM TAKEDOWN</h1>
    <button className="Display" onClick={()=> onDisplayClick()}>
      Join as Display
    </button>
    <button className="Host" onClick={()=> onHostClick()}>
      Join as Host
    </button>
    <button className="Player" onClick={()=> onContestantClick()}>
      Join as Player
    </button>
    <button className="Tutorial" onClick={()=> onTutorialClick()}>How to Play</button>
    <footer>
      <p>With ❤️ By Abdel-Rahman Mobarak & Augustine Osezua</p>
    </footer>
    </div>
  );
}

export default Homepage;