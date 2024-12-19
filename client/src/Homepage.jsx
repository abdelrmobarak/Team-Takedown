import React from 'react';
import './App.css'
import io from 'socket.io-client'

export const socket = io.connect("http://localhost:3001")


function Homepage({showDisplay, showHost, showContestant, showHomepage, roomId, setRoomID}) {

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
      <p>With ❤️ By Abdel-Rahman Mobarak & Augustine Osezua</p>
    </footer>
    </>
  );
}

export default Homepage;