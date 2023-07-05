import React from 'react';
import "./LandingPage.scss"
import NavBar from '../../Components/NavBar/NavBar';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';


function LandingPage(props) {
    return (
        <div>
            <NavBar />
            <Body />
            <Footer />

        </div>
    );
}

export default LandingPage;