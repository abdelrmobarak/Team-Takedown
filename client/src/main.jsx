import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.jsx'
import { useState } from 'react';
import ContestantPage from './ContestantPage.jsx';
import HostPage from './HostPage.jsx'
import DisplayPage from './DisplayPage.jsx'
import ContestantTwo from './ContestantPageTwo.jsx'
import HostPageTwo from './HostPageTwo.jsx'
import ContestantThree from './ContestantThree.jsx';
import DisplayPageTwo from './DisplayPageTwo.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  // state funbction defentions, passed on to child components
  const [showDisplay, setShowDisplay] = useState(false)
  const [showContestant, setShowContestant] = useState(false)
  const [showHost, setShowHost] = useState(false)
  const [showHomepage, setShowHomepage] = useState(true)
  const [showContestantTwo, setShowContestantTwo] = useState(false)
  const [showHostTwo, setShowHostTwo] = useState(false)
  const [showContestantThree, setShowContestantThree] = useState(false)
  const [roomID, setRoomID] = useState("")
  const [showDisplayPageTwo, setShowDisplayPageTwo] = useState(false)

  if (showHomepage) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Home"
    return(
      <Homepage 
      showDisplay={setShowDisplay}
      showHost={setShowHost}
      showContestant={setShowContestant}
      showHomepage = {setShowHomepage}
      showContestantTwo = {setShowContestantTwo}
      showHostTwo = {setShowHostTwo}
      />
    );
  }

  if (showContestant) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return(
      <ContestantPage 
      showHomepage = {setShowHomepage}
      showContestant = {setShowContestant}
      showContestantTwo = {setShowContestantTwo}
      roomInfo = {roomID}
      setter = {setRoomID} />
    );
  }

  if (showHost) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPage
      showHomepage = {setShowHomepage}
      showHost = {setShowHost} 
      showHostTwo = {setShowHostTwo}
      roomID = {roomID}
      setRoomID = {setRoomID}/>
    );
  }

  if (showDisplay) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return(
      <DisplayPage
      showHomepage = {setShowHomepage}
      showDisplay = {setShowDisplay} 
      showDisplayPageTwo = {setShowDisplayPageTwo}
      roomID = {roomID}
      setRoomID = {setRoomID}/>
    )
  }

  if (showContestantTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    console.log("new rrom id: ",roomID) // Debugging
    return(
    <ContestantTwo
    showHomepage = {setShowHomepage}
    showContestantTwo = {setShowContestantTwo}
    roomID = {roomID}
    setRoomID = {setRoomID}
    showContestantThree = {setShowContestantThree}/>
    )
  }

  if (showHostTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPageTwo
      showHomepage = {setShowHomepage}
      showHostTwo = {setShowHostTwo}
      roomId = {roomID}
      setRoomID = {setRoomID}
      />
    )
  }

  if (showContestantThree) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return (
      <ContestantThree
      showHomepage = {setShowHomepage}
      showContestantThree = {setShowContestantThree}
      roomId = {roomID}
      setRoomId = {setRoomID}
      />
    )
  }
  
  if (showDisplayPageTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return(
    <DisplayPageTwo
    roomId = {roomID}
    setRoomId = {setRoomID}/>)
    }
  }

root.render(
  <Index/>
);