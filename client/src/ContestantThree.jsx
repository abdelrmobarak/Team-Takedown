import React, { useState } from 'react'
import { socket } from './Homepage'

function ContestantThree(props) {

    var teamMembers;
    useState(()=>{ 
        socket.on('game-start',(gameCode)=>{
            if (gameCode == props.roomID){
                props.setShowContestantThree(false)
                props.setShowPlayerPage(true)
            }
        })
        
    if (props.team == 'blue'){
        teamMembers = props.teamBlue.map((name, index) => {
            return <p key={index}>{name}</p>
        })
    }else if (props.team == 'blue'){
        teamMembers = props.teamBlue.map((name, index) => {
            return <p key={index}>{name}</p>
        })
    }
    },[])
    
    return(
        <h1>Waiting For Host...</h1>
        
    )
}

export default ContestantThree;