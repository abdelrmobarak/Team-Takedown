import React, { useEffect, useState} from 'react';
import { socket } from './Homepage';
import './Hoster.css';

function HostPageTwo(props) {


    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowHostTwo(false);
    }

    function onStartClick(e) {
        e.preventDefault();
        props.setShowHostTwo(false);
        props.setShowAdminPage(true);
        socket.emit('game-start-server', props.gameCode);
    }

    function generateGameCode() {
        const letters = Array.from({ length: 3 }, () => 
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        ).join('');

        const numbers = Math.floor(10 + Math.random() * 90);

        return `${letters}${numbers}`;
    }

    useEffect(() => {
        const gameCode = generateGameCode();
        props.setGameCode(gameCode);
        socket.emit('join-room', gameCode, 'admin', 'admin');

        socket.on("room-joined", (roomid, id, username, team) => {
            if (roomid === gameCode) {
                if (team === 'red') {
                    props.setTeamRed((prevTeamRed) => [...prevTeamRed, username]);
                } else if (team === 'blue') {
                    props.setTeamBlue((prevTeamBlue) => [...prevTeamBlue, username]);
                }
                console.log(`${username} has connected to ${roomid} and is on team ${team}`);
            }
        });

    }, []);

    return (
        <div className='hostpage'>
            <h1>GAME CODE: {props.gameCode}</h1>
            <h2>TEAM RED</h2>
            <ul>
                {props.teamRed.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
            <h2>TEAM BLUE: </h2>
            <ul>
                {props.teamBlue.map((name, index) => {
                    return <li key={index}>{name}</li>;
                })}
            </ul>
            <button id="back" onClick={onHomepageClick}>BACK</button>
            <button id="start" onClick={onStartClick}>START GAME</button>
        </div>
    );
}

export default HostPageTwo;