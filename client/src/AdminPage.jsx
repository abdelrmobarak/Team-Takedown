import React, { useEffect, useState } from "react"
import { socket } from "./Homepage"
import "./AdminPage.css"

function AdminPage(props) {
    const[ questionNumber, setQuestionNumber] = useState(Math.floor(Math.random() * props.questions.length))
    const [points, setPoints] = useState(0)
    
    var question = props.questions[questionNumber].Question
    var answer1 = props.questions[questionNumber].Answer1
    var answer2 = props.questions[questionNumber].Answer2
    var answer3 = props.questions[questionNumber].Answer3
    var pointsForQuestions = [props.questions[questionNumber].pointsFor1, props.questions[questionNumber].pointsFor2, props.questions[questionNumber].pointsFor3]

    function update(e) {
        e.preventDefault()
        setQuestionNumber(Math.floor(Math.random() * props.questions.length))
        question = props.questions[questionNumber].Question
        answer1 = props.questions[questionNumber].Answer1
        answer2 = props.questions[questionNumber].Answer2
        answer3 = props.questions[questionNumber].Answer3
        pointsForQuestions = [props.questions[questionNumber].pointsFor1, props.questions[questionNumber].pointsFor2, props.questions[questionNumber].pointsFor3]
    }

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

    function pointsUpdate(e) {
        e.preventDefault()
        socket.emit('show-answer-server', props.gameCode, questionNumber, idToPoints(e.target.id))
        setPoints(points + pointsForQuestions[idToPoints(e.target.id)-1])
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
    return(
        <div className='adminpage'>
        <div className = "button-grids">
            <button id="one" onClick={(e) => pointsUpdate(e)}>{answer1}</button>
            <button id="two" onClick={(e) => pointsUpdate(e)}>{answer2}</button>
            <button id="three" onClick={(e) => pointsUpdate(e)}>{answer3}</button>
            <button id="four" onClick={(e) => pointsUpdate(e)}>#4 Answer</button>
            <button id="five" onClick={(e) => pointsUpdate(e)}>#5 Answer</button>
            <button id="six" onClick={(e) => pointsUpdate(e)}>#6 Answer</button>
            <button id="seven" onClick={(e) => pointsUpdate(e)}>#7 Answer</button>
        </div>
        <div className = "qna">
            <h1>{question}</h1>
            <p id='pfg'>Points for Grabs: {points}</p>
            <button id="wrong">WRONG ANSWER</button>
        </div>
        <div className = "teams">
            <button id="red" onClick={(e)=>givePoints(e)}>Red Team</button>
            <button id="blue" onClick={(e)=>givePoints(e)}>Blue Team</button>
        </div>
        <button id="next" onClick={(e)=>update(e)}>Next Question</button>
        <h3>ADMIN PANEL</h3>
        </div>
    )
}

export default AdminPage;