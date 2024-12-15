import React from 'react';
import './App.css'

function Homepage({showDisplay, showHost, showContestant, showHomepage}) {
  function onDisplayClick() {
    showHomepage(false);
    showDisplay(true);
  }
  
  function onHostClick() {
    showHomepage(false);
    showHost(true);
  }

  function onContestantClick() {
    showHomepage(false);
    showContestant(true);
  }

  return (
    <>
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
    <footer>
      <p>By: Abdel-Rahman Mobarak & Augustine Osezua</p>
    </footer>
    </>
  );
}

export default Homepage;