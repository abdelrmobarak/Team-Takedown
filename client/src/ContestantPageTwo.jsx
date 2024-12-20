import React, { useState } from 'react';
import { socket } from './Homepage';


function ContestantTwo(props) {

    const [team, setTeam] = useState('')
    const [username, setUsername] = useState('')

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
        if (username && team) {
            props.setUsername(username)
            props.setTeam(team)
            contestantThree();
            socket.emit('join-room', props.roomID, username, team);
            console.log(`Attempting to join room: ${props.roomID}, Username: ${username}, Team: ${team}`); // Debugging code
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <div>
                    <button
                        type="button"
                        id="teamone"
                        onClick={() => setTeam('red')}
                        style={{ backgroundColor: team === 'red' ? 'red' : '' }}
                    >
                        Team One
                    </button>
                    <button
                        type="button"
                        id="teamtwo"
                        onClick={() => setTeam('blue')}
                        style={{ backgroundColor: team === 'blue' ? 'blue' : '' }}
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
