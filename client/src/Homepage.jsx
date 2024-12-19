import React from 'react';
import './App.css'
import io from 'socket.io-client'

export const socket = io.connect("http://localhost:3001")


function Homepage(props) {

  function onDisplayClick() {
    props.setShowHomepage(false);
    props.setShowDisplay(true);
  }
  
  function onHostClick() {
    props.setShowHomepage(false);
    props.setShowHost(true);
  }

  function onContestantClick() {
    props.setShowHomepage(false);
    props.setShowContestant(true);
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