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

    return(
        <div className='hostpage'>
            <h1>GAME CODE: {props.gameCode}</h1> {/*Find a way to put updated game code here*/}
            <h2>TEAM RED</h2> {/*Find a way to put updated team name here*/}
            {props.teamRed.map((name, index) => {
                return <p key={index}>{name}</p>
            })}
            <h2>TEAM BLUE: </h2>
            {props.teamBlue.map((name, index) => {
                return <p key={index}>{name}</p>
            })}
            <button id="back" onClick={()=> onHomepageClick()}>BACK</button>
            <button id="start" onClick={onStartClick}>START GAME</button>
        </div>
    )
}

export default HostPageTwo;