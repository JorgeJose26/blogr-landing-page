import React from 'react';
import "./Footer.scss";

function Footer(props) {
    return (
        <body className=' bg-[#25252D] rounded-tr-[5rem]'>
            <h2 className='text-white text-4xl pb-[3rem] pt-[3rem]'>Blogr</h2>
            <section className='flex flex-col pt-[1rem] pb-[1rem]'>
                <h4 className='text-white pb-[1rem]'>Product</h4>
                <ul>
                    <li className='text-white'>Overview</li>
                    <li className='text-white'>Pricing</li>
                    <li className='text-white'>Marketplace</li>
                    <li className='text-white'>Features</li>
                    <li className='text-white'>Integrations</li>

                </ul>
            </section>
            <section className='flex flex-col pt-[1rem] pb-[1rem]'>
                <h4 className='text-white pb-[1rem]'>Company</h4>
                <ul>
                    <li className='text-white'>About</li>
                    <li className='text-white'>Team</li>
                    <li className='text-white'>Blog</li>
                    <li className='text-white'>Careers</li>
                </ul>

            </section>
            <section className='flex flex-col pt-[1rem] pb-[1rem]'>
                <h4 className='text-white pb-[1rem]'>Connect</h4>
                <ul>
                    <li className='text-white'>Contact</li>
                    <li className='text-white'>NewsLetter</li>
                    <li className='text-white'>Linkedln</li>
                </ul>

            </section>


        </body>


    );
}

export default Footer;