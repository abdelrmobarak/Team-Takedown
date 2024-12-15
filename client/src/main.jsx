import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.jsx'
import { useState } from 'react';
import ContestantPage from './ContestantPage.jsx';
import HostPage from './HostPage.jsx'
import DisplayPage from './DisplayPage.jsx'
import ContestantTwo from './ContestantPageTwo.jsx'
import HostPageTwo from './HostPageTwo.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [showDisplay, setShowDisplay] = useState(false)
  const [showContestant, setShowContestant] = useState(false)
  const [showHost, setShowHost] = useState(false)
  const [showHomepage, setShowHomepage] = useState(true)
  const [showContestantTwo, setShowContestantTwo] = useState(false)
  const [showHostTwo, setShowHostTwo] = useState(false)

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
      showContestantTwo = {setShowContestantTwo} />
    );
  }

  if (showHost) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPage
      showHomepage = {setShowHomepage}
      showHost = {setShowHost} 
      showHostTwo = {setShowHostTwo}/>
    );
  }

  if (showDisplay) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Display"
    return(
      <DisplayPage
      showHomepage = {setShowHomepage}
      showDisplay = {setShowDisplay} />
    )
  }

  if (showContestantTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return(
    <ContestantTwo
    showHomepage = {setShowHomepage}
    showContestantTwo = {setShowContestantTwo} />
    )
  }

  if (showHostTwo) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPageTwo
      showHomepage = {setShowHomepage}
      showHostTwo = {setShowHostTwo}/>
    )
  }
}

root.render(
  <Index/>
);