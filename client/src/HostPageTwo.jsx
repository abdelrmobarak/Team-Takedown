import React, { useEffect} from 'react';
import { socket } from './Homepage'
import './Hoster.css'

function HostPageTwo(props) {


    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowHostTwo(false);
 }

    function onStartClick(e) {
        e.preventDefault()
        props.setShowHostTwo(false);
        props.setShowAdminPage(true)
        socket.emit('game-start-server', props.gameCode)
 }

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

    useEffect(() =>{
        const gameCode = generateGameCode()
        props.setGameCode(gameCode)
        socket.emit('join-room', gameCode, 'admin', 'admin')

        socket.on("room-joined", (roomid, id, username, team)=>{
            //console.log(`props.roomID: ${props.roomID}, roomid: ${roomid}`)
            if(roomid == gameCode){
                if (team =='red') {
                    props.setTeamRed([...props.teamRed, username])
                }
                else if (team == 'blue') {
                    props.setTeamBlue([...props.teamBlue, username])
                }
                console.log(`${username} has connected to ${roomid} and is on team ${team}`)
            }
        })

    }, [])

    return (
        <div className='hostpage'>
            <h1>GAME CODE: <span className='gameCode'>{props.gameCode}</span></h1>
            <div className='teams-container'>
                <div className='red'>
                    <h2>TEAM <span className="redred">RED:</span></h2>
                    {props.teamRed.map((name, index) => {
                        return <p key={index}>{name}</p>
                    })}
                </div>
                <div className='blue'>
                    <h2>TEAM <span className="blueblue">BLUE:</span></h2>
                    {props.teamBlue.map((name, index) => {
                        return <p key={index}>{name}</p>
                    })}
                </div>
            </div>
            <button id="back" onClick={() => onHomepageClick()}>BACK</button>
            <button id="start" onClick={onStartClick}>START GAME</button>
        </div>
    );
}

export default HostPageTwo;