import React, { useEffect, useState} from 'react';
import { socket } from './Homepage';
import './Hoster.css';

function HostPageTwo(props) {

    const [teamBlue, setTeamBlue] = useState([]);
    const [teamRed, setTeamRed] = useState([]);
    const [isDisplay, setIsDisplay] = useState(false);

    function onHomepageClick() {
        props.setShowHomepage(true);
        props.setShowHostTwo(false);
    }

    function onStartClick(e) {
        e.preventDefault();
        if(isDisplay){
        props.setShowHostTwo(false);
        props.setShowAdminPage(true);
        socket.emit('game-start-server', props.gameCode);
        }
        else{
            alert('please connect a display')
        }
        
    }

    function generateGameCode() {
        const letters = Array.from({ length: 3 }, () => 
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        ).join('');

        const numbers = Math.floor(10 + Math.random() * 90);

        return `${letters}${numbers}`;
    }

    useEffect(() => {
        const gameCode = generateGameCode();
        props.setGameCode(gameCode);
        socket.emit('join-room', gameCode, 'admin', 'admin');

        socket.on("room-joined", (roomid, id, username, team) => {
            if (roomid === gameCode) {
                if (team === 'red') {
                    props.setTeamRed((prevTeamRed) => [...prevTeamRed, username]);
                    setTeamRed((prevTeamBlue) => [...prevTeamBlue, username]); // repeat locally for immediate update
                } else if (team === 'blue') {
                    props.setTeamBlue((prevTeamBlue) => [...prevTeamBlue, username]);
                    setTeamBlue((prevTeamBlue) => [...prevTeamBlue, username]); // repeat locally for immediate update
                }else if(team === 'display'){
                    setIsDisplay(true);
                }
                console.log(`${username} has connected to ${roomid} and is on team ${team}`);
            }
        });

    }, []);


    useEffect(() => {
        socket.on('check-room', (roomid, id, username, team) => {
            console.log(`chcecking: ${username}`)
            if(team === 'red' && teamRed.length > 5 || team === 'blue' && teamBlue.length > 5){
                socket.emit('kick-server', roomid, id, username)
                if(team === 'red'){
                props.setTeamRed(teamRed.slice(0,-1))
                setTeamRed(teamRed.slice(0,-1))
            }else if(team === 'blue'){ 
                props.setTeamBlue(teamBlue.splice(0,-1))
                setTeamBlue(teamBlue.slice(0,-1))
            }

            }

            if(teamRed.filter((x) => x == username).length > 1|| teamBlue.filter((x) => x == username).length > 1){
                socket.emit('kick-server',roomid,id, username)
                if(team === 'red'){
                    props.setTeamRed(teamRed.slice(0,-1))
                    setTeamRed(teamRed.slice(0,-1))
            }
            else if(team === 'blue'){
                props.setTeamBlue(teamBlue.slice(0,-1))
                setTeamBlue(teamBlue.slice(0,-1))
            }
        }
        })
    },[teamRed, teamBlue])

    return (
        <div className='hostpage'>
            <h1>GAME CODE: <span className='gameCode'>{props.gameCode}</span></h1>
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
            <button id="back" onClick={() => onHomepageClick()}>BACK</button>
            <button id="start" onClick={onStartClick}>START GAME</button>
        </div>
    );
}

export default HostPageTwo;