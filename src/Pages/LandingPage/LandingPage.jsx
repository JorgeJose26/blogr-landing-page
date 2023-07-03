import React from 'react';
import "./LandingPage.scss"
import NavBar from '../../Components/NavBar/NavBar';
import Body from '../../Components/Body/Body';


function LandingPage(props) {
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    );
}

export default LandingPage;