import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './App.jsx'
import { useState } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
  const [showDisplay, setShowDisplay] = useState(false)
  const [showContestant, setShowContestant] = useState(false)
  const [showHost, setShowHost] = useState(false)
  const [showHomepage, setShowHomepage] = useState(true)

  if (showHomepage) {
    return(
      <Homepage 
      showDisplay={setShowDisplay}
      showHost={setShowHost}
      showContestant={setShowContestant}
      showHomepage = {setShowHomepage}
      />
    )
  }
}

root.render(
  <Index/>
);