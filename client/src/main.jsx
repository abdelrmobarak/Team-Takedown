import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './Homepage.jsx'
import { useState } from 'react';
import ContestantPage from './ContestantPage.jsx';
import HostPage from './HostPage.jsx'
import DisplayPage from './DisplayPage.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [showDisplay, setShowDisplay] = useState(false)
  const [showContestant, setShowContestant] = useState(false)
  const [showHost, setShowHost] = useState(false)
  const [showHomepage, setShowHomepage] = useState(true)

  if (showHomepage) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Home"
    return(
      <Homepage 
      showDisplay={setShowDisplay}
      showHost={setShowHost}
      showContestant={setShowContestant}
      showHomepage = {setShowHomepage}
      />
    );
  }

  if (showContestant) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Player"
    return(
      <ContestantPage 
      showHomepage = {setShowHomepage}
      showContestant = {setShowContestant} />
    );
  }

  if (showHost) {
    document.getElementById("Title").innerHTML = "TEAM TAKEDOWN - Host"
    return(
      <HostPage
      showHomepage = {setShowHomepage}
      showHost = {setShowHost} />
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
}

root.render(
  <Index/>
);