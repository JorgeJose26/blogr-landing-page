import React from 'react';
import "./NavBar.scss"
import hamburger from "../../Assets/images/icon-hamburger.svg"
import logo from "../../Assets/images/logo.svg";
import arrow from "../../Assets/images/icon-arrow-light.svg"
import { useNavigate } from 'react-router-dom';



function NavBar(props) {
    const navigate = useNavigate();




    return (
        <header className='body rounded-bl-[5rem]'>
            <nav className='pt-2'>
                <div className='flex flex-row justify-between items-center pl-6 pr-6 pt-[3.5rem] pb-14 dt:justify-start
                dt:gap-[3rem] dt:pl-[5rem] dt:items-center dt:pl-[11rem]'>
                    <img className='logo w-[25%] dt:w-[10%] dt:pr-[1rem] ' src={logo} alt='logo' />
                    {/* These three buttons tags are dt only */}
                    <button className='hidden dt:inline text-white text-lg '>Product <img className='dt:inline dt:pl-[0.2rem] dt:pb-[1px]' src={arrow} alt='arrow' /></button>
                    <button className='hidden dt:inline text-white text-lg '>Company <img className='dt:inline dt:pl-[0.2rem] dt:pb-[1px]' src={arrow} alt='arrow' /></button>
                    <button className='hidden dt:inline text-white text-lg '>Connect <img className='dt:inline dt:pl-[0.2rem] dt:pb-[1px]' src={arrow} alt='arrow' /></button>
                    {/* this div and it's content is for dt only */}
                    <div className='hidden dt:flex dt:flex-row dt:gap-[2rem] dt:items-center dt:pl-[20rem]'>
                        <buttom className='dt:text-white dt:text-lg'>Login</buttom>
                        <buttom className='bg-white dt:rounded-full  text-[#FF525D] dt:text-lg pt-[0.5rem] pb-[0.5rem] pl-[2rem] 
                        pr-[2rem] font-bold '>Sign Up</buttom>
                    </div>

                    <img className='h-6 w-8 dt:hidden' src={hamburger} alt='hamburger' onClick={() => navigate(`/menu`)} />
                </div>

            </nav>
            <hero className='space-y-4'>
                <div className='flex flex-col flex-wrap mt-5'>
                    <p className='text-white text-3xl dt:text-[3rem] font-bold pl-[3rem] pr-[3rem]'>A modern publishing platform</p>




                </div>
                <div className='flex flex-col flex-wrap'>
                    <p className='text-white text-xm dt:text-[1rem] dt:font-thin pl-[3rem] pr-[3rem]'>Grow your audience and build your online brand</p>





                </div>
                <div className='flex flex-row justify-center gap-3 pb-36 pt-5'>
                    <button className='text-[#FF525D] font-bold rounded-full bg-white h-10 w-24  text-xs dt:h-12 dt:w-32 dt:text-sm'>Start for Free</button>
                    <button className='text-white outline outline-white-500 rounded-full h-10 w-24 text-xs dt:h-12 dt:w-32 dt:text-sm'>Learn More</button>
                </div>
            </hero>


        </header>

    );
}

export default NavBar;