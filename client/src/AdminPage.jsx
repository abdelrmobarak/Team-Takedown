import React, { useEffect, useState } from "react"
import { socket } from "./Homepage"
import "./AdminPage.css"

function AdminPage(props) {
    const[ questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * props.questions.length))
    const [points, setPoints] = useState(0)
    const [whoPressed, setWhoPressed] = useState(' - ')
    const [isDisabled, setIsDisabled] = useState({
        btn1: false,
        btn2: false,
        btn3: false,
        btn4: false,
        btn5: false,
        btn6: false,
        btn7: false
    })


    
    var question = props.questions[questionNumber].Question
    var answer1 = props.questions[questionNumber].Answer1
    var answer2 = props.questions[questionNumber].Answer2
    var answer3 = props.questions[questionNumber].Answer3
    var answer4 = props.questions[questionNumber].Answer4 || " "
    var answer5 = props.questions[questionNumber].Answer5 || " "
    var answer6 = props.questions[questionNumber].Answer6 || " "
    var answer7 = props.questions[questionNumber].Answer7 || " "

    var pointsForQuestions = 
        [
        props.questions[questionNumber].pointsFor1,
        props.questions[questionNumber].pointsFor2,
        props.questions[questionNumber].pointsFor3,
        props.questions[questionNumber].pointsFor4 || 0,
        props.questions[questionNumber].pointsFor5 || 0,
        props.questions[questionNumber].pointsFor6 || 0,
        props.questions[questionNumber].pointsFor7 || 0 ]

    function update(e) {
        e.preventDefault()
        e.target.disabled
        setQuestionNumber(Math.floor(Math.random() * props.questions.length))
        question = props.questions[questionNumber].Question
        answer1 = props.questions[questionNumber].Answer1
        answer2 = props.questions[questionNumber].Answer2
        answer3 = props.questions[questionNumber].Answer3
        pointsForQuestions = 
        [
        props.questions[questionNumber].pointsFor1,
        props.questions[questionNumber].pointsFor2,
        props.questions[questionNumber].pointsFor3,
        props.questions[questionNumber].pointsFor4 || 0,
        props.questions[questionNumber].pointsFor5 || 0,
        props.questions[questionNumber].pointsFor6 || 0,
        props.questions[questionNumber].pointsFor7 || 0 
    ]
        socket.emit('clear-all-server', props.gameCode)
        socket.emit('change-turn-server', props.gameCode)

        updateItem("btn1", false);
        updateItem("btn2", false);
        updateItem("btn3", false);
        updateItem("btn4", false);
        updateItem("btn5", false);
        updateItem("btn6", false);
        updateItem("btn7", false);
    }

    function shuffleArray(array) {
        let shuffledArray = array.slice(); // Create a copy of the array
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
    }

    function setTeamOrder(team) {
        var orderedTeam = team
        while(orderedTeam.length < 5){
            orderedTeam = [...orderedTeam, ...team];
        }
        return shuffleArray(orderedTeam.splice(0,5))
    }

    useEffect(() => {
        socket.on('get-teammates', team =>{
            if(team === 'red'){
                socket.emit('get-teammates-server-Response', props.gameCode, setTeamOrder(props.teamRed), 'red')
            }else if(team === 'blue'){
                socket.emit('get-teammates-server-Response', props.gameCode, setTeamOrder(props.teamBlue), 'blue')
            }
        })
        
        socket.on('button-pressed', (team, name) =>{
            setWhoPressed(name)
            console.log(`${name} from ${team} has pressed the button`)
        })
    })

    
    function idToPoints(id){
        const wordMap = {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
        };
        return wordMap[id.toLowerCase()] || null;
    }

    // Function to update a specific value
        const updateItem = (key, value) => {
            setIsDisabled((prevState) => ({
            ...prevState,
            [key]: value
            }));
        };

    function pointsUpdate(e) {
        e.preventDefault()
        switch (e.target.id) {
            case "one":
                updateItem("btn1", true);
                break;
            case "two":
                updateItem("btn2", true);
                break;
            case "three":
                updateItem("btn3", true);
                break;
            case "four":
                updateItem("btn4", true);
                break;
            case "five":
                updateItem("btn5", true);
                break;
            case "six":
                updateItem("btn6", true);
                break;
            case "seven":
                updateItem("btn7", true);
                break;
            default:
                break;
        }
        socket.emit('show-answer-server', props.gameCode, questionNumber, idToPoints(e.target.id))
        var newPoint = points + pointsForQuestions[idToPoints(e.target.id)-1]
        setPoints(newPoint)
        socket.emit('update-points-server', props.gameCode, newPoint)
    }

    function givePoints(e){
        e.preventDefault()
        if (e.target.id == "red"){
            socket.emit('give-points-server', props.gameCode,'red', points)
            setPoints(0)
        }else if (e.target.id == "blue"){
            socket.emit('give-points-server', props.gameCode, 'blue', points)
            setPoints(0)
        }
    }

    function wrongAnswer(e){
        e.preventDefault()
        socket.emit('show-wrong-answer-server', props.gameCode)
    }   
    return(
        <div className='adminpage'>
        <div className = "button-grids">
            <button id="one" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn1}>{answer1}</button>
            <button id="two" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn2} >{answer2}</button>
            <button id="three" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn3}>{answer3}</button>
            <button id="four" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn4}>{answer4}</button>
            <button id="five" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn5}>{answer5}</button>
            <button id="six" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn6}>{answer6}</button>
            <button id="seven" onClick={(e) => pointsUpdate(e)} disabled = {isDisabled.btn7}>{answer7}</button>
        </div>
        <div className = "qna">
            <h1>{question}</h1>
            <p id='pfg'>Points for Grabs: {points}</p>
            <button id="wrong" onClick={(e)=> wrongAnswer(e)}>WRONG ANSWER</button>
        </div>
        <div className = "teams">
            <button id="red" onClick={(e)=>givePoints(e)}>Red Team</button>
            <button id="blue" onClick={(e)=>givePoints(e)}>Blue Team</button>
        </div>
        <button id="next" onClick={(e)=>update(e)}>Next Question</button>
        <h3>ADMIN PANEL CODE: {props.gameCode}</h3>
        <h3>{whoPressed} pressed the button first</h3>
        </div>
    )
}

export default AdminPage;