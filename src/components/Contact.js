import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div id='contact' className='mt-40 py-8'>
            <div className='flex flex-col space-y-2 md:space-y-0  md:flex-row items-center justify-between '>
                <div className='text-2xl text-white font-semibold'>Contact</div>
                <div className='flex items-center justify-center space-x-8'>
                    <div className='hover:scale-105'>
                        <a href="https://github.com/zeynep-dmrl" target={'_blank'}>
                            <FaGithub style={{ fontSize: 36 }} />
                        </a>
                    </div>
                    <div className='hover:scale-105'>
                        <a href="https://www.linkedin.com/in/zeynep-demirel/" target={'_blank'}>
                            <FaLinkedin style={{ fontSize: 36 }} />
                        </a>
                    </div>
                    <div className='hover:scale-105'>
                        <a href="mailto:zeynepdemirel081@gmail.com" target={'_blank'}>
                            <AiOutlineMail style={{ fontSize: 36 }} />
                        </a>
                    </div>
                    <div className='hover:scale-105'>
                        <a href="https://drive.google.com/file/d/1wo8QffbZTH27PrFVEsxDe8et3yQvh444/view?usp=sharing" className='text-sm text-white border p-1 rounded-lg' target={'_blank'}>
                            Resume
                        </a>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Contact