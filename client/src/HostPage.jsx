import React, { useState, useEffect } from 'react';
import { socket } from './Homepage'


function HostPage(props) {

    const [username, setUsername] = useState('');
    const [usernametwo, setUsernametwo] = useState('');
    
    function onHomepageClick(e) {
        props.setShowHomepage(true);
        e.preventDefault()
        props.setShowHost(false);
    }

        // Function to generate a random game code
    function generateGameCode() {
        // Generate three random uppercase letters
        const letters = Array.from({ length: 3 }, () => 
            String.fromCharCode(65 + Math.floor(Math.random() * 26)) // ASCII codes for A-Z
        ).join('');

        // Generate two random digits
        const numbers = Math.floor(10 + Math.random() * 90); // Ensures two digits

        // Combine letters and numbers into a game code
        return `${letters}${numbers}`;
    }


    

    function onCreateClick(e) {
        e.preventDefault(); // Prevent form submission

        const gameCode = generateGameCode()
        props.setGameCode(gameCode) // bypassing async nature of react

        if (username && usernametwo) {
        socket.emit('join-room', gameCode)

        socket.on("room-joined", (roomid, id)=>{
            console.log(`${id} has connected to ${roomid}`)
        })

        props.setShowHost(false);
        props.setShowHostTwo(true);
        } else {
            alert('Please enter your name before proceeding.');
        }
    }

    return (
        <>
            <h1>Enter Two Team Names Below</h1>
            <form onSubmit={(e)=> onCreateClick(e)}>
                <input
                    type="text"
                    name="teamone"
                    placeholder="TEAM ONE"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input type="text" name="teamtwo" placeholder="TEAM TWO" 
                value={usernametwo}
                onChange={(e) => setUsernametwo(e.target.value)} 

                required />
                <button type = "submit">Create Game</button>
            </form>
            <button onClick={(e)=> onHomepageClick(e)}>BACK</button>
        </>
    );
}

export default HostPage;
