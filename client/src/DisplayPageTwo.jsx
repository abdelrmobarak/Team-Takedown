import React from 'react'
import { useEffect, useState } from 'react'
import {socket} from './Homepage'
import './Waiting.css'
import waiting from './assets/waiting2.mp3'
import BackgroundMusic from './BackgroundMusic'

function DisplayPageTwo(props) {
    const [teamBlue, setTeamBlue] = useState([]);
    const [teamRed, setTeamRed] = useState([]);

    useEffect(()=>{ 
            socket.on('game-start',(gameCode)=>{
                console.log("game code: ",gameCode, " room id: ",props.roomID)
                if (gameCode === props.roomID){
                    props.setShowDisplayPageTwo(false)
                    props.setShowDisplayScreen(true)
                }
            })

            socket.on('update-display-list', (teamRed, teamBlue) =>{
                setTeamRed(teamRed)
                setTeamBlue(teamBlue)
                console.log(`'updating display list' ${teamRed} ${teamBlue}`) //debugging
            })
        },[])

    return(
        <>
        <h1 className='waiting'>Waiting For Host...</h1>
        <div className='teams-container'>
                <div className='red'>
                    <h2>TEAM <span className="redred">RED:</span></h2>
                    {teamRed.map((name, index) => {
                        return <p key={index} id='names'>{name}</p>
                    })}
                </div>
                <div className='blue'>
                    <h2>TEAM <span className="blueblue">BLUE:</span></h2>
                    {teamBlue.map((name, index) => {
                        return <p key={index} id='names'>{name}</p>
                    })}
                </div>
            </div>
        <p className='roomid'> <BackgroundMusic src={waiting}/>{props.roomID}</p>
        </>
    )
}

export default DisplayPageTwo;