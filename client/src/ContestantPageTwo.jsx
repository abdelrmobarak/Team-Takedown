import React, { useState } from 'react';
import { socket } from './Homepage';

function ContestantTwo({ showHomepage, showContestantTwo, roomID, setRoomID, showContestantThree }) {
    const [username, setUsername] = useState('');
    const [team, setTeam] = useState('');

    function onHomepageClick(e) {
        e.preventDefault();
        showHomepage(true);
        showContestantTwo(false);
    }

    function contestantThree() {
        showContestantTwo(false);
        showContestantThree(true);
    }

    function onContestantJoinSubmit(e) {
        e.preventDefault();
        if (username && team) {
            contestantThree();
            socket.emit('join-room', roomID);
            console.log(`Attempting to join room: ${roomID}, Username: ${username}, Team: ${team}`); // Debugging code
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
                        onClick={() => setTeam('Team One')}
                        style={{ backgroundColor: team === 'Team One' ? 'lightblue' : '' }}
                    >
                        Team One
                    </button>
                    <button
                        type="button"
                        id="teamtwo"
                        onClick={() => setTeam('Team Two')}
                        style={{ backgroundColor: team === 'Team Two' ? 'lightblue' : '' }}
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
