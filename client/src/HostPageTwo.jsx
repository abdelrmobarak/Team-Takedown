import React, { useEffect} from 'react';
import { socket } from './Homepage'

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
        socket.emit('join-room', gameCode)

        socket.on("room-joined", (roomid, id)=>{
            console.log(`props.roomID: ${props.roomID}, roomid: ${roomid}`)
            if(roomid == props.roomID){
                console.log(`${id} has connected to ${roomid}`)
            }
        })

        props.setShowHost(false);
        props.setShowHostTwo(true);

    }, [])

    return(
        <>
            <h1>GAME CODE: {props.gameCode}</h1> {/*Find a way to put updated game code here*/}
            <h2>TEAM ONE</h2> {/*Find a way to put updated team name here*/}
            <h2>TEAM TWO</h2>
            <button id="back" onClick={()=> onHomepageClick()}>BACK</button>
            <button id="start" onClick={onStartClick}>START GAME</button>
        </>
    )
}

export default HostPageTwo;