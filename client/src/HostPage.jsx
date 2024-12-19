import React, { useState } from 'react';

function HostPage({ showHomepage, showHost, showHostTwo }) {
    const [username, setUsername] = useState('');
    const [usernametwo, setUsernametwo] = useState('');

    function onHomepageClick() {
        showHomepage(true);
        showHost(false);
    }

    function onCreateClick(e) {
        e.preventDefault(); // Prevent form submission
        if (username && usernametwo) {
            showHost(false);
            showHostTwo(true);
        } else {
            alert('Please enter your name before proceeding.');
        }
    }

    return (
        <>
            <h1>Enter Two Team Names Below</h1>
            <form>
                <input
                    type="text"
                    name="teamone"
                    placeholder="TEAM ONE"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input type="text" name="teamtwo" placeholder="TEAM TWO" 
                value={usernametwo}
                onChange={(e) => setUsernametwo(e.target.value)} 

                required />
                <button onClick={onCreateClick}>Create Game</button>
            </form>
            <button onClick={onHomepageClick}>BACK</button>
        </>
    );
}

export default HostPage;
