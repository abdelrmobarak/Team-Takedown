import React from 'react'
import { useEffect } from 'react'
import {socket} from './Homepage'

function DisplayPageTwo(props) {

    useEffect(()=>{ 
            socket.on('game-start',(gameCode)=>{
                console.log("game code: ",gameCode, " room id: ",props.roomID)
                if (gameCode === props.roomID){
                    props.setShowDisplayPageTwo(false)
                    props.setShowDisplayScreen(true)
                }
            })
        },[])

    return(
        <h1>Waiting For Host...</h1>
    )
}

export default DisplayPageTwo;