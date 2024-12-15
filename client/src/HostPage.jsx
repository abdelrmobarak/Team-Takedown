import React from 'react';

function HostPage({ showHomepage, showHost, showHostTwo }) {
    function onHomepageClick() {
        showHomepage(true);
        showHost(false);
    }

    function onCreateClick() {
        showHost(false);
        showHostTwo(true);
    }

    return (
        <>
            <h1>Enter Two Team Names Below</h1>
            <form>
                <input type="text" name="teamone" placeholder="TEAM ONE" required></input>
                <input type="text" name="teamtwo" placeholder="TEAM TWO" required></input>
                <button type="submit" onClick={()=> onCreateClick()}>Create Game</button>
            </form>
            <button onClick={()=> onHomepageClick()}>BACK</button>
        </>
    );
}

export default HostPage;