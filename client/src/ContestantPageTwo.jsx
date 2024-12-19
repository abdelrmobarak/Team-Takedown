import React, { useState } from 'react';
import { socket } from './Homepage';

function ContestantTwo(props) {

    function onHomepageClick(e) {
        e.preventDefault();
        props.setShowHomepage(true);
        props.setShowContestantTwo(false);
    }

    function contestantThree() {
        props.setShowContestantTwo(false);
        props.setShowContestantThree(true);
    }

    function onContestantJoinSubmit(e) {
        e.preventDefault();
        if (props.username && props.team) {
            contestantThree();
            socket.emit('join-room', props.roomID);
            console.log(`Attempting to join room: ${props.roomID}, Username: ${props.username}, Team: ${props.team}`); // Debugging code
        } else {
            alert('Please enter your name and select a team before proceeding.');
        }
    }

    return (
        <>
            <h1>Enter Your Name and Select Your Team</h1>
            <form onSubmit={(e) => onContestantJoinSubmit(e)}>
                <input
                    type="text"
                    id="username"
                    placeholder="NAME"
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                />

                <div>
                    <button
                        type="button"
                        id="teamone"
                        onClick={() => setTeam('Team One')}
                        style={{ backgroundColor: props.team === 'Team One' ? 'lightblue' : '' }}
                    >
                        Team One
                    </button>
                    <button
                        type="button"
                        id="teamtwo"
                        onClick={() => props.setTeam('Team Two')}
                        style={{ backgroundColor: props.team === 'Team Two' ? 'lightblue' : '' }}
                    >
                        Team Two
                    </button>
                </div>
                <button type="submit" id="join">JOIN</button>
            </form>
            <button onClick={(e) => onHomepageClick(e)}>BACK</button>
        </>
    );
}

export default ContestantTwo;
