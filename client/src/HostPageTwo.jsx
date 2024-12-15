import React from 'react';

function HostPageTwo({showHomepage, showHostTwo}) {
    function onHomepageClick() {
        showHomepage(true);
        showHostTwo(false);
    }

    return(
        <>
            <h1>GAME CODE:</h1> {/*Find a way to put updated game code here*/}
            <h2>TEAM ONE</h2> {/*Find a way to put updated team name here*/}
            <h2>TEAM TWO</h2>
            <button id="back" onClick={()=> onHomepageClick()}>BACK</button>
            <button id="start">START GAME</button>
        </>
    )
}

export default HostPageTwo;