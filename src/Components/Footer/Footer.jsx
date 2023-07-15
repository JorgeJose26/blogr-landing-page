import React from 'react';
import "./Footer.scss";
import logo from "../../Assets/images/logo.svg"

function Footer(props) {
    return (
        <body className=' bg-[#25252D] rounded-tr-[5rem] dt:flex dt:flex-row  dt:justify-evenly pt-[5rem]'>
            <img src={logo} alt='logo' className='dt:inline dt:pb-[21rem] dt:pt-[1rem] dt:self-start hidden' />

            <section className='pt-[1rem] pb-[1rem] items-center dt:justify-evenly'>
                <img className='w-[30%] pb-[4rem] pt-[4rem] dt:hidden m-auto' src={logo} alt='logo' />
                <h4 className='text-white pb-[1rem] font-bold text-lg dt:text-start'>Product</h4>
                <ul className='dt:flex dt:flex-col dt:items-start dt:gap-[1rem]'>
                    <li className='text-[#C8C8CB] hover:underline'>Overview</li>
                    <li className='text-[#C8C8CB] hover:underline'>Pricing</li>
                    <li className='text-[#C8C8CB] hover:underline'>Marketplace</li>
                    <li className='text-[#C8C8CB] hover:underline'>Features</li>
                    <li className='text-[#C8C8CB] hover:underline'>Integrations</li>

                </ul>
            </section>
            <section className='flex flex-col pt-[1rem] pb-[1rem]'>
                <h4 className='text-white pb-[1rem] font-bold text-lg dt:self-start'>Company</h4>
                <ul className='dt:flex dt:flex-col dt:items-start dt:gap-[1rem]'>
                    <li className='text-[#C8C8CB] hover:underline'>About</li>
                    <li className='text-[#C8C8CB] hover:underline'>Team</li>
                    <li className='text-[#C8C8CB] hover:underline'>Blog</li>
                    <li className='text-[#C8C8CB] hover:underline'>Careers</li>
                </ul>

            </section>
            <section className='flex flex-col pt-[1rem] pb-[3rem]'>
                <h4 className='text-white pb-[1rem] font-bold text-lg dt:self-start'>Connect</h4>
                <ul className='dt:flex dt:flex-col dt:items-start dt:gap-[1rem]'>
                    <li className='text-[#C8C8CB] hover:underline'>Contact</li>
                    <li className='text-[#C8C8CB] hover:underline'>NewsLetter</li>
                    <li className='text-[#C8C8CB] hover:underline'>Linkedln</li>
                </ul>

            </section>


        </body>


    );
}

export default Footer;