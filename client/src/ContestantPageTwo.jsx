import React from 'react'

function ContestantTwo({ showHomepage, showContestantTwo }) {

    function onHomepageClick() {
        showHomepage(true);
        showContestantTwo(false);
    }
    return (
        <>
            <h1> Enter Your Name and Select Your Team </h1>
            <form>
                <input type='text' id='username' placeholder='NAME'></input>
                <button id='teamone'>Team One</button>
                <button id='teamtwo'>Team Two</button>
                <button id='join'>JOIN</button>
            </form>
            <button onClick={()=> onHomepageClick()}>BACK</button>
        </>
    )
}

export default ContestantTwo;