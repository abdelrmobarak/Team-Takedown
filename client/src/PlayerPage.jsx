import React, { useState, useEffect } from 'react'
import { socket } from './Homepage'
import './PlayerPage.css'

function PlayerPage(props) {
    const [teammates, setTeammates] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0) // seems to not update when the state is changed
    const [text, setText] = useState('')
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    
    useEffect(() => {  
        socket.emit('get-teammates-server', props.roomID, props.team)
    },[])

    socket.on('get-teammates-Response', (teamMATES, team) =>{
            if (team === props.team){
            console.log(teamMATES)
            setTeammates(teamMATES)
            var index = teamMATES.findIndex(name => name === props.username)
            setCurrentIndex(index)
            console.log(`Current Index: ${index}`)
            textSetter(index, 3)
        }
        })

        socket.on('change-turn', () => {
            var team = [...teammates]
            console.log(`team: ${team}`) //debugging           
            team.shift()
            setTeammates(team);
            var index = team.findIndex(name => name === props.username)
            setCurrentIndex(index)
            console.log(`Current Index: ${index}`)
            textSetter(index, 3)
        })

        socket.on('close-buttons', (name, winningTeam) =>{
            console.log(teammates)
            var team = [...teammates]
            var index = team.findIndex(name => name === props.username)
            console.log(`current index: ${index}`)
            setCurrentIndex(index)
            if(name != props.username && index === 0 && winningTeam != props.team){
                setIsButtonDisabled(true)
                textSetter(index, 2)
            }
            else if(name == props.username && index === 0 && winningTeam === props.team){
                setIsButtonDisabled(true)
                textSetter(index, 1)

            }
        })

        socket.on('skip-question', () =>{
            textSetter(currentIndex)
        })

    useEffect(() => {
        //console.log(`Current Team: ${teammates}`)//debugging
        textSetter(currentIndex)  
    },[teammates, currentIndex])


    function onContestantClick(e){
        e.preventDefault();
        //console.log('Button Pressed') //debugging
        
        socket.emit('button-pressed-server', props.roomID, props.team, props.username)
    }

    function textSetter(index, winner){
        switch (index) {
            case 0:
                if(winner == 1){
                    setIsButtonDisabled(true)
                    setText('Answer The question')
                }
                else if(winner == 2){
                    setIsButtonDisabled(true)
                    setText('You missed your chance :(')
                }
                else if(winner == 3){
                    setIsButtonDisabled(false)
                    setText('Your Turn')
                }
                else{
                    setIsButtonDisabled(false)
                    setText('Your Turn')
                }
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
            case -1:
                setIsButtonDisabled(true)
                setText("You're not in line")
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