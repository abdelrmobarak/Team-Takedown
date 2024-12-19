import React, { useState } from 'react'
import {socket} from './Homepage'

function ContestantTwo({ showHomepage, showContestantTwo, roomID, setRoomID}) {
    
    
    function onHomepageClick(e) {
        e.preventDefault();
        showHomepage(true);
        showContestantTwo(false);
    }

    function onContestantJoinSubmit(e){
        e.preventDefault();
        socket.emit('join-room', roomID)
        console.log(`Attempting to join room: ${roomID}`); // debuggin codde 
    }

    return (
        <>
            <h1> Enter Your Name and Select Your Team </h1>
            <form onSubmit={(e) => onContestantJoinSubmit(e)}>

                <input
                type='text' 
                id='username' 
                placeholder='NAME'
                />

                <button id='teamone'>Team One</button>
                <button id='teamtwo'>Team Two</button>
                <button id='join'>JOIN</button>
            </form>
            <button onClick={(e)=> onHomepageClick(e)}>BACK</button>
        </>
    )
}

export default ContestantTwo;