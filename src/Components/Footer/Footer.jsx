import React from 'react';
import "./Footer.scss";
import logo from "../../Assets/images/logo.svg"

function Footer(props) {
    return (
        <body className=' bg-[#25252D] rounded-tr-[5rem]'>

            <section className='flex flex-col pt-[1rem] pb-[1rem] items-center '>
                <img className='w-[30%] pb-[4rem] pt-[4rem]' src={logo} alt='logo' />
                <h4 className='text-white pb-[1rem] font-bold text-lg'>Product</h4>
                <ul>
                    <li className='text-[#C8C8CB]'>Overview</li>
                    <li className='text-[#C8C8CB]'>Pricing</li>
                    <li className='text-[#C8C8CB]'>Marketplace</li>
                    <li className='text-[#C8C8CB]'>Features</li>
                    <li className='text-[#C8C8CB]'>Integrations</li>

                </ul>
            </section>
            <section className='flex flex-col pt-[1rem] pb-[1rem]'>
                <h4 className='text-white pb-[1rem] font-bold text-lg'>Company</h4>
                <ul>
                    <li className='text-[#C8C8CB]'>About</li>
                    <li className='text-[#C8C8CB]'>Team</li>
                    <li className='text-[#C8C8CB]'>Blog</li>
                    <li className='text-[#C8C8CB]'>Careers</li>
                </ul>

            </section>
            <section className='flex flex-col pt-[1rem] pb-[3rem]'>
                <h4 className='text-white pb-[1rem] font-bold text-lg'>Connect</h4>
                <ul>
                    <li className='text-[#C8C8CB]'>Contact</li>
                    <li className='text-[#C8C8CB]'>NewsLetter</li>
                    <li className='text-[#C8C8CB]'>Linkedln</li>
                </ul>

            </section>


        </body>


    );
}

export default Footer;