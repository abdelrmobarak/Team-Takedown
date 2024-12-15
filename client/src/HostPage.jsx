import React from 'react';

function HostPage({ showHomepage, showHost }) {
    function onHomepageClick() {
        showHomepage(true);
        showHost(false);
    }

    return (
        <>
            <h1>Enter Two Team Names Below</h1>
            <form>
                <input type="text" name="teamone" placeholder="TEAM ONE" required></input>
                <input type="text" name="teamtwo" placeholder="TEAM TWO" required></input>
                <button type="submit">Create Game</button>
            </form>
            <button onClick={()=> onHomepageClick()}>BACK</button>
        </>
    );
}

export default HostPage;