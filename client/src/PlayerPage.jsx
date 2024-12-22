import React, { useState, useEffect } from 'react'
import { socket } from './Homepage'
import { use } from 'react';
import "./PlayerPage.css";

function PlayerPage(props) {
    const [teammates, setTeammates] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {  
        socket.emit('get-teammates-server', props.roomID, props.team)
    },[])

    socket.on('get-teammates-Response', (teamMATES, team) =>{
            if (team === props.team){
            console.log(teamMATES)
            setTeammates(teamMATES)
            setCurrentIndex(teamMATES.findIndex(name => name === props.username))
        }
        })

        socket.on('change-turn', () => {
            var team = [...teammates]
            //console.log(`team: ${team}`)            
            team.shift()
            setTeammates(team);
            setCurrentIndex(team.findIndex(name => name === props.username))
        })

    useEffect(() => {
        console.log(`Current Team: ${teammates}`)  
    },[teammates])

    return(
        <>
        <h1>Your team: {currentIndex}</h1>
        <button id="buzz">PUSH</button>
        </>
    )
}

export default PlayerPage;