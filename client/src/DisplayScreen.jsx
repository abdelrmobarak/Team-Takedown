import React, { useState, useEffect } from 'react'
import {socket} from './Homepage'

function DisplayScreen(props) {

    const [redpoints, setRedPoints] = useState(0)
    const [bluepoints, setBluePoints] = useState(0)

    const [answer1, setAnswer1] = useState(' - ')
    const [answer2, setAnswer2] = useState(' - ')
    const [answer3, setAnswer3] = useState(' - ')
    const [answer4, setAnswer4] = useState(' - ')
    const [answer5, setAnswer5] = useState(' - ')
    const [answer6, setAnswer6] = useState(' - ')  
    const [answer7, setAnswer7] = useState(' - ')

    socket.on('give-points', (team, points) => {
        console.log("team: ", team, " points: ", points)
        if (team == 'red'){
            setRedPoints(points + redpoints)
        }else if (team == 'blue'){
            setBluePoints(points + bluepoints)
        }
    })

    socket.on('show-answer', (questionNumber, answer) => {
        switch (answer) {
            case 1:
                setAnswer1(props.questions[questionNumber].Answer1)
                break;
            case 2:
                setAnswer2(props.questions[questionNumber].Answer2)
                break;
            case 3:
                setAnswer3(props.questions[questionNumber].Answer3)
                break;
            case 4:
                setAnswer4(props.questions[questionNumber].Answer4)
                break;
            case 5:
                setAnswer5(props.questions[questionNumber].Answer5)
                break;
            case 6:
                setAnswer6(props.questions[questionNumber].Answer6)
                break;
            case 7: 
                setAnswer7(props.questions[questionNumber].Answer7)
                break
            default:
                break;
        }
    })


    return(
        <>
        <h1 className="redpoints">Team Red</h1>
        <h1>{redpoints}</h1>
        <h1 className="bluepoints">Team Blue</h1>
        <h1>{bluepoints}</h1>
        <p>{props.roomID}</p>
        <h1 className="totalpoints">0</h1>
        <h1>{answer1}</h1>
        <h1>{answer2}</h1>
        <h1>{answer3}</h1>
        <h1>{answer4}</h1>
        <h1>{answer5}</h1>
        <h1>{answer6}</h1>
        <h1>{answer7}</h1>


        </>
        )
}

export default DisplayScreen;