import React from 'react'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/WhatsApp Görsel 2023-08-08 saat 23.01.46.jpg'
import { SiTailwindcss, SiReact, SiJavascript, SiDjango, SiNodedotjs, SiBootstrap,SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

const About = () => {
    return (
        <div id='about' className='mt-40 mb-20'>
            <div className='relative text-center px-8 pt-12 pb-24 flex-col md:flex items-center justify-center space-x-10'>

                <div className='xl:absolute inset-y-0 md:left-28 rounded-full w-40 h-40 lg:w-52 lg:h-52 outline shadow-md shadow-sky-500 order-1'>
                    <img src={logo} alt="my-photo" className='w-full h-full object-cover rounded-full animate-around' />
                </div>

                <div className='flex flex-col items-center justify-center space-y-5 order-2  md:mt-0'>
                    <div className='text-2xl'>
                        Nice to meet you!
                    </div>
                    <div className='text-2xl'>
                        I'am  <span className='underline decoration-sky-500'> Zeynep Demirel</span>
                    </div>
                    <div className='line-clamp-10 md:line-clamp-4 lg:line-clamp-1 overflow-visible'>
                        I'am front-end developer passionate about bulding accessible web apps that users love.
                    </div>
                    <div className='underline decoration-sky-500 font-semibold'>
                        <HashLink smooth to="/#contact">CONTACT ME</HashLink>
                    </div>
                </div>
            </div>
            <div className='border-t-2 border-white py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-4 place-content-evenly place-items-center'>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <SiReact style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>React.js</div>
                    </div>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <SiTypescript style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>TypeScript</div>
                    </div>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <SiJavascript style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>Javascript</div>
                    </div>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <TbBrandNextjs style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>Next.js</div>
                    </div>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <SiTailwindcss style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>Tailwind.css</div>
                    </div>
                    <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                        <SiBootstrap style={{ fontSize: 24 }} className="animate-bounce"/>
                        <div>MaterialUI</div>
                    </div>
                    
                    // <div className='font-semibold text-lg flex items-center justify-around space-x-4'>
                    //     <SiNodedotjs style={{ fontSize: 24 }} className="animate-bounce"/>
                    //     <div>Node.js</div>
                    // </div>
                    
                    
                    
                </div>

            </div>
        </div>
    )
}

export default About
