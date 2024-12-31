import React, { useState, useEffect } from 'react'
import { socket } from './Homepage'
import './PlayerPage.css'

function PlayerPage(props) {
    const [teammates, setTeammates] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [text, setText] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    
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
            //console.log(`team: ${team}`) debugging           
            team.shift()
            setTeammates(team);
            setCurrentIndex(team.findIndex(name => name === props.username))
        })

        socket.on('close-buttons', (name) =>{
            if(name != props.username && currentIndex === 0){
                setIsButtonDisabled(true)
                setText('Ah, you missed your chance :(')
            }
        })

        socket.on('skip-question', () =>{
            textSetter(currentIndex)
        })

    useEffect(() => {
        //console.log(`Current Team: ${teammates}`)//debugging
        textSetter(currentIndex)  
    },[teammates])


    function onContestantClick(e){
        e.preventDefault();
        //console.log('Button Pressed') //debugging
        socket.emit('button-pressed-server', props.roomID, props.team, props.username)
    }

    function textSetter(index){
        switch (index) {
            case 0:
                setIsButtonDisabled(false)
                setText('Your turn')
                break;
            case 1:
                setIsButtonDisabled(true)
                setText("You're next in line")
                break;
            case 2:
                setIsButtonDisabled(true)
                setText("You're 2nd in line")
                break;
            case 3:
                setIsButtonDisabled(true)
                setText("You're 3rd in line")
                break;
            case 4:
                setIsButtonDisabled(true)
                setText("You're 4th in line")
                break;
            default:
                break;
        } 
        
    }
    return(
        <>
        <h1 className='turn'>{text}</h1>
        <p className="name">Name: {props.username}</p>
        <div className="teammates">
            <h2>Queue:</h2>
        {
            teammates.map((name)=>{
                return <p id='names'>{name}</p>
                }
        )}
        </div>
        <button className="buzz" onClick={(e) => onContestantClick(e)} disabled = {isButtonDisabled} >PUSH</button>
        </>
    )
}

export default PlayerPage;