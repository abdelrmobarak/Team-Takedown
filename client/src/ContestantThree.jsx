import React, { useEffect, useState } from 'react'
import { socket } from './Homepage'
import './Waiting.css'

function ContestantThree(props) {

    useEffect(()=>{ 
        socket.on('game-start',(gameCode)=>{
            if (gameCode == props.roomID){
                props.setShowContestantThree(false)
                props.setShowPlayerPage(true)
            }
        })
        
        socket.on('kick', (roomid, id, username) => {
            console.log(`Kicking ${username} from ${roomid} they have id: ${id}`)
            if (roomid === props.roomID && id === socket.id){
                alert('Game is full or name has been used')
                props.setShowContestantThree(false)
                props.setShowHomepage(true)
                socket.leave(roomid)
            }
        })
        
    },[])
    
    return(
        <h1 className='waiting'>Waiting For Host...</h1>
        
    )
}

export default ContestantThree;