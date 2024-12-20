import React, { useState, useEffect } from 'react'
import {socket} from './Homepage'

function DisplayScreen(props) {

    const [redpoints, setRedPoints] = useState(0)
    const [bluepoints, setBluePoints] = useState(0)

    socket.on('give-points', (team, points) => {
        console.log("team: ", team, " points: ", points)
        if (team == 'red'){
            setRedPoints(points + redpoints)
        }else if (team == 'blue'){
            setBluePoints(points + bluepoints)
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
        <h1>#1 Answer</h1>
        <h1>#2 Answer</h1>
        <h1>#3 Answer</h1>
        <h1>#4 Answer</h1>
        <h1>#5 Answer</h1>
        <h1>#6 Answer</h1>
        <h1>#7 Answer</h1>
        <h1>#8 Answer</h1>

        </>
        )
}

export default DisplayScreen;