import React from 'react';
import mobileImg from '../../Assets/images/illustration-editor-mobile.svg'
import phones from '../../Assets/images/illustration-phones.svg'
import "./Body.scss";
import laptop from "../../Assets/images/illustration-laptop-mobile.svg";

function Body(props) {
    return (
        <body>
            <div>
                <h2 className='text-[#1F3F5B] text-2xl pt-24 dt:text-[2rem] dt:pt-[8rem]'>Designed for the future</h2>
            </div>
            <div>
                <img src={mobileImg} className='pt-10 dt:float-right dt:absolute dt:w-[44rem] dt:left-[46rem] dt:top-[36rem]' alt='mobile' />
            </div>

            <section className='flex flex-col flex-wrap pt-12 justify-around dt:justify-start pl-6 pr-6 dt:pl-[10rem] dt:pr-[47rem] '>
                <h2 className='text-[#1F3F5B] text-2xl pb-6 leading-none pl-[2rem] pr-[2rem] dt:pl-[0rem] dt:self-start dt:text-left'>Introducing an extensible editor</h2>
                <p className='text-[16px] text-[#4B5862] dt:self-start dt:text-left '>Blogr feature an exceedingly intutive interface which lets you focus on one thing: creating content.
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
                    and Markdown. Extensiblity with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </p>
            </section>
            <section className='flex flex-col flex-wrap pt-12 justify-around dt:justify-start pl-6 pr-6 dt:pl-[10rem] dt:pr-[47rem]'>
                <h2 className='text-[#1F3F5B] text-2xl pb-6 leading-non pl-[2rem] pr-[2rem] dt:pl-[0rem] dt:self-start'>Robust content management</h2>
                <p className='text-[16px] text-[#4B5862] dt:self-start dt:text-left'>Flexible content mangement enables users to easly move through posts. increase the usablity of your blog by adding
                    customized categories, sections, format, or flow. With this functionality you're in full control.
                </p>


            </section>

            <section className='infrastructure flex flex-col flex-wrap pt-12 justify-around pt-[12rem] pl-6 pr-6 rounded-tr-[5rem]
                rounded-bl-[5rem] mt-[20rem] dt:mt-[12rem] pb-[15rem] dt:pt-[10rem] dt:pb-[10rem] dt:pl-[52rem] static items-center'>
                <img className='absolute top-[105rem] left-[0rem] w-[505] dt:top-[77rem] dt:left-[9rem] ' src={phones} alt='phones' />
                <h2 className='text-[#1F3F5B] text-[2.5rem] pb-6  text-white dt:self-start'>State of the Art Infrastructure</h2>
                <p className='text-[#C8C8CB] text-[16px] dt:text-left dt:text-lg'>With reliability and speed in mind, worldwide data centers provide the backbone for ultra
                    -fast connectivity. This ensures your site will load instantly. no matter where your readers are. keeping your site competitive.
                </p>

            </section>
            <section className='flex flex-col flex-wrap pt-12 justify-around pl-6 pr-6 dt:static dt:pl-[52rem] dt:pr-[8rem] dt:mt-[8rem]'>
                <img className='mt-[1rem] mb-[1rem] dt:float-left dt:absolute dt:w-[70%] dt:left-[-16rem] dt:top-[110rem]' src={laptop} alt='bleep' />
                <h2 className='text-[#1F3F5B] text-3xl pb-6 dt:self-start '>Free, open, simple </h2>
                <p className='text-[#4B5862] text-lg dt:text-left'>Blogr is free and open source application backed by a large community
                    of helpful developers. it supports features such as code syntax highlighting, RSS, feeds, social media integration, third-part commenting tools,
                    and works seamlessly with goole Analytics. The architecture is clean and is relatively easy to learn.

                </p>
            </section>
            <section className='flex flex-col flex-wrap pt-12 justify-around pl-6 pr-6 mb-[6rem] dt:pl-[52rem] dt:pr-[8rem] dt:mb-[8rem]'>
                <h2 className='text-[#1F3F5B] text-3xl pb-6 dt:self-start '>Powerful tooling</h2>
                <p className='text-[#4B5862] text-lg  dt:text-left'>Batteries included. We built a simple and strightfoward CLI tool that makes
                    customization and development a breeze, but capable of producing even the most complicated sites.
                </p>

            </section>
        </body>
    );
}

export default Body;