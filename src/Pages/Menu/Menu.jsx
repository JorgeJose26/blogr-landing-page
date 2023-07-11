import React, { useState } from 'react';
import "./Menu.scss";
import logo from "../../Assets/images/logo.svg";
import close from "../../Assets/images/icon-close.svg";
import arrow from "../../Assets/images/icon-arrow-dark.svg"
import { useNavigate } from "react-router-dom"






function Menu(props) {
    const navigate = useNavigate();
    const connectList = document.getElementsByClassName("dropdown");
    console.log(connectList);

    const handleDropDown = () => {


        for (var i = 0; i < connectList.length; i += 1) {

            if (connectList[i].style.display == 'none') {
                connectList[i].style.display = 'flex';
            } else {
                connectList[i].style.display = 'none';
            }


        }

    }
    return (
        <body className='bg-slate-100 h-screen'>
            <div className='menu h-[35rem] rounded-bl-[5rem] '>
                <div className='flex flex-row justify-between items-center pl-6 pr-6 pt-6'>
                    <img className='' onClick={() => navigate(`/`)} src={logo} alt='logo' />
                    <img src={close} alt='close' onClick={() => navigate(`/`)} />
                </div>

                <div className='absolute bg-white h-[22rem] w-[21rem] rounded-lg flex flex-col items-center top-[6rem] left-[1.2rem] '>

                    <button>Product <img className='inline' src={arrow} /></button>
                    <button>Company <img className='inline' src={arrow} /></button>
                    <button onClick={handleDropDown}>Connect <img className='inline ' src={arrow} /></button>
                    <div className='dropdown flex-col bg-slate-200 w-[17rem] h-[10rem]'>
                        <a>Contact</a>
                        <a>Newletter</a>
                        <a>Linkedln</a>
                    </div>

                    <div className='flex flex-col'>
                        <button>Login</button>
                        <button className='signup rounded-full p-[0.5rem]'>Sign Up</button>
                    </div>







                </div>

            </div>

        </body>

    );
}

export default Menu;