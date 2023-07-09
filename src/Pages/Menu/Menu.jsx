import React from 'react';
import "./Menu.scss";
import arrowLight from "../../Assets/images/icon-arrow-light.svg";
import logo from "../../Assets/images/logo.svg";



function Menu(props) {
    return (
        <>
            <div className="menu bg-black ">
                <div className="menu-container">
                    <img src={logo} alt="Blogr logo" />
                    <div className="flex flex-col">
                        <a href="#" className="open">Product <img src={arrowLight} alt="arrow" /></a>
                        <div className="drop">
                            <span className="dropText">
                                <a href="#">Overview</a>
                                <a href="#">Pricing</a>
                                <a href="#">Marketplace</a>
                                <a href="#">Features</a>
                                <a href="#">Integrations</a>
                            </span>
                        </div>
                    </div>
                </div>



            </div>

        </>

    );
}

export default Menu;