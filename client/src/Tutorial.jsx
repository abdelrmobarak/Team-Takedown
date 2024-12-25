import React, { useState } from 'react';
import './Tutorial.css';

function Tutorial(props) {
    const [selectedOption, setSelectedOption] = useState(null); 

    function setOption(option) {
        setSelectedOption(option);
    }

    function goBack() {
        setSelectedOption(null);
    }

    function onHomepageClick(e) {
        e.preventDefault();
        props.setShowHomepage(true);
        props.setShowTutorialScreen(false);
    }

    return (
        <div className='tutorial'>
            
            <img src="ttfull.png" alt="Trivia Time Logo" />

            {selectedOption === null ? ( 
                <>
                    <h1>How to Play</h1>
                    <h2>Minimum Requirements: One Host, One Display Screen, Two Players</h2>
                    <h3>Click on a Section to Learn how to Play!</h3>                    <button className='player' onClick={() => setOption('player')}>Player</button>
                    <button className='host' onClick={() => setOption('host')}>Host</button>
                    <button className='display' onClick={() => setOption('display')}>Display</button>
                    <button id='back' onClick={(e)=> onHomepageClick(e)}>BACK</button>
                </>
            ) : (
                <div>
                    {selectedOption === 'player' && (
                        <div className='players'>
                            <h1>Player Instructions</h1>
                            <p1>To play as a contestant, we <span> STRONGLY </span> suggest that you play on your phone,
                                so the game proportions are not messed up.<br></br><br></br> To play, you will
                                need to enter the game code provided by the host. Once you enter it in, choose your name and team, then join the game!
                                Make sure you have a stable internet connection for the best experience. Once the host begins the game, you will see a button and
                                some text, telling you when it's your turn to buzz! The host will ask a question, and the first person to buzz in will have a chance to answer.
                                <br></br><br></br>Your goal is to guess as many correct answers as possible with
                                your team to win! Be careful though, as three wrong answers will give the other team
                                one chance to steal the points by guessing only one correct answer! The team with the most points at the end of the game will win!
                                <br></br><br></br>Good luck and have fun!
                            </p1>
                        </div>
                    )}
                    {selectedOption === 'host' && (
                        <div className='hosts'>
                            <h1>Host Instructions</h1>
                            <p>To play as a host, we <span> STRONGLY </span> suggest that you play on your phone, so the game
                                proportions are not messed up. <br></br><br></br>To play as the host, you will need to create a game,
                                and provide the game code to the players. After everyone has joined their teams, start the game. An admin panel
                                will show up, with the correct answers at the top, the question in the center, a wrong answer button, the two teams,
                                and a button to move on to the next question. Ask the question provided, and let whoever buzzed first answer. If they get
                                it right, select their answer at the top of your screen, if not, let the other team guess, and keep going until one team
                                gets an answer. <br></br><br></br>Once the question is answered, go to the team who answered first, and ask the same question one by one,
                                selecting <span> WRONG ANSWER </span> if they get it wrong, and the right answer if they guess it right. If the team answers all questions right, select their
                                team name at the bottom, and move to the next question. If they get it wrong, select <span> WRONG ANSWER</span>, and an X will pop up on the display screen.
                                After three wrong answers, ask the other team for one answer. If they get it right, give them the points, and move to the next question. If not,
                                give the points to the original team, and move on to the next question. <br></br><br></br> After the game ends, the team with the most points
                                will win. Both team points will be shown on the display screen. Good luck and have fun!

                                
                            </p>
                        </div>
                    )}
                    {selectedOption === 'display' && (
                        <div className='displays'>
                            <h1>Display Instructions</h1>
                            <p1>The display screen simply shows the number of answers,
                                alongside the answers already guessed. It also shows the X for each
                                wrong answer. We recommend using a <span> computer or television </span>for the best experience
                                as the display screen.
                            </p1>
                        </div>
                    )}
                    <button onClick={goBack}>Back to Main</button>
                </div>
            )}
        </div>
    );
}

export default Tutorial;
