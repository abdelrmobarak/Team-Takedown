import React, { useState } from "react"

function AdminPage() {
    return(
        <>
        <div className = "button-grids">
            <button id="one">#1 Answer</button>
            <button id="two">#2 Answer</button>
            <button id="three">#3 Answer</button>
            <button id="four">#4 Answer</button>
            <button id="five">#5 Answer</button>
            <button id="six">#6 Answer</button>
            <button id="seven">#7 Answer</button>
            <button id="eight">#8 Answer</button>
        </div>
        <div className = "qna">
            <h1>Who is the coolest person here?</h1>
            <button id="wrong">WRONG ANSWER</button>
        </div>
        <div className = "teams">
            <button id="teamone">Team LeBron</button>
            <button id="teamtwo">Team Jordan</button>
            <button id="next">Next Question</button>
        </div>

        </>
    )
}

export default AdminPage;