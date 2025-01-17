import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.jsx'
import { useState } from 'react';
import ContestantPage from './ContestantPage.jsx';
import DisplayPage from './DisplayPage.jsx'
import ContestantTwo from './ContestantPageTwo.jsx'
import HostPageTwo from './HostPageTwo.jsx'
import ContestantThree from './ContestantThree.jsx';
import DisplayPageTwo from './DisplayPageTwo.jsx'
import AdminPage from './AdminPage.jsx';
import PlayerPage from './PlayerPage.jsx';
import DisplayScreen from './DisplayScreen.jsx'
import questions from './familyFeud.json'
import Tutorial from './Tutorial.jsx'
import Winner from './Winner.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  // state function definitons, passed on to child components - inefficent due to time constraints
  const [showDisplay, setShowDisplay] = useState(false)
  const [showContestant, setShowContestant] = useState(false)
  const [showHost, setShowHost] = useState(false)
  const [showHomepage, setShowHomepage] = useState(true)
  const [showContestantTwo, setShowContestantTwo] = useState(false)
  const [showHostTwo, setShowHostTwo] = useState(false)
  const [showContestantThree, setShowContestantThree] = useState(false)
  const [roomID, setRoomID] = useState("")
  const [showDisplayPageTwo, setShowDisplayPageTwo] = useState(false)
  const [showAdminPage, setShowAdminPage] = useState(false)
  const [showPlayerPage, setShowPlayerPage] = useState(false)
  const [showDisplayScreen, setShowDisplayScreen] = useState(false)
  const [username, setUsername] = useState('');
  const [team, setTeam] = useState('')
  const [gameCode, setGameCode] = useState('')  
  const [teamRed, setTeamRed] = useState([])
  const [teamBlue, setTeamBlue] = useState([])
  const [showTutorialScreen, setShowTutorialScreen] = useState(false)
  const [showWinner, setShowWinner] = useState(false)
  const [winner,setWinner] = useState('')

  
 
  
  const props = {
    setShowDisplay,
    setShowContestant,
    setShowHost,
    setShowHomepage,
    setShowContestantTwo,
    setShowHostTwo,
    roomID,
    setRoomID,
    setShowAdminPage,
    setShowDisplayPageTwo,
    setShowContestantThree,
    setUsername,
    setTeam,
    team,
    username,
    setShowPlayerPage,
    setShowDisplayScreen,
    setGameCode,
    gameCode,
    teamRed,
    teamBlue,
    setTeamRed,
    setTeamBlue,
    questions,
    setShowTutorialScreen,
    setShowWinner,
    winner,
    setWinner
  }


  if (showHomepage) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Home"
    return(
      <Homepage {...props}/>
    );
  }

  if (showContestant) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return(
      <ContestantPage {...props} />
    );
  }

  if (showHost) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(

      <HostPage {...props}/>
      
    )
  }

  if (showDisplay) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return(
      <DisplayPage {...props}/>
    )
  }

  if (showContestantTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    console.log("new rrom id: ",roomID) // Debugging
    return(
    <ContestantTwo {...props}/>
    )
  }

  if (showHostTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPageTwo {...props} />
    )
  }

  if (showContestantThree) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return (
      <ContestantThree {...props} />
    )
  }
  
  if (showDisplayPageTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return(
    <DisplayPageTwo {...props}/>)
    }
  
  if (showAdminPage) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Admin Panel"
    return(
      <AdminPage {...props}/>)
  }

  if (showPlayerPage) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return (
      <PlayerPage {...props}/>)
  }

  if (showDisplayScreen) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return (
      <DisplayScreen {...props}/>)
  }

  if (showTutorialScreen) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Tutorial"
    return (
      <Tutorial {...props}/>)
  }

  if (showWinner) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - End Game"
    return (
      <Winner {...props}/>)
  }
}

root.render(
  <Index/>
);