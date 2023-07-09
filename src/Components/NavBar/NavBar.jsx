import React from 'react';
import "./NavBar.scss"
import hamburger from "../../Assets/images/icon-hamburger.svg"
import logo from "../../Assets/images/logo.svg";



function NavBar(props) {





    return (
        <header className='body rounded-bl-[5rem]'>
            <nav className='pt-2'>
                <div className='flex flex-row justify-between items-center pl-6 pr-6 pt-6 pb-14'>
                    <img className='logo' src={logo} alt='logo' />
                    {/* <p className='text-3xl text-white font-semibold'>Blogr</p> */}
                    <img className='h-6 w-8' src={hamburger} alt='hamburger' />
                </div>

            </nav>
            <hero className='space-y-4'>
                <div className='flex flex-col flex-wrap mt-5'>
                    <p className='text-white text-3xl font-bold'>A modern</p>
                    <p className='text-white text-3xl font-bold'>publishing platform</p>
                </div>
                <div className='flex flex-col flex-wrap'>
                    <p className='text-white text-sm'>Grow your audience and build your</p>
                    <p className='text-white text-sm'>online brand</p>

                </div>
                <div className='flex flex-row justify-center gap-3 pb-36 pt-5'>
                    <button className='text-[#FF525D] font-bold rounded-full bg-white h-10 w-24  text-xs'>Start for Free</button>
                    <button className='text-white outline outline-white-500 rounded-full h-10 w-24 text-xs'>Learn More</button>
                </div>
            </hero>


        </header>

    );
}

export default NavBar;