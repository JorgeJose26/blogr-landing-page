import React from 'react';
import mobileImg from '../../Assets/images/illustration-editor-mobile.svg'

function Body(props) {
    return (
        <body>
            <div>
                <h2 className='text-[#1F3F5B] text-2xl pt-24'>Designed for the future</h2>
            </div>
            <div>
                <img src={mobileImg} className='pt-10' />
            </div>
            <section className='flex flex-col flex-wrap'>
                <h2>Introducing an extensible editor</h2>
                <p>Blogr feature an exceedingly intutive interface which lets you focus on one thing: creating content.
                    The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos,
                    and Markdown. Extensiblity with plugins and themes provide easy ways to add functionality or change the looks of a blog.
                </p>
            </section>
            <section className='flex flex-col flex-wrap'>
                <h2>Robust content</h2>
                <p>Flexible content mangement enables users to easly move through posts. increase the usablity of your blog by adding
                    customized categories, sections, format, or flow. With this functionality you're in full control.
                </p>

            </section>
        </body>
    );
}

export default Body;