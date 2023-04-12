import React from 'react';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';



const Navbar = () => {
    const {pathname} = useLocation();
    console.log(pathname);

    const isActive = (iHash) => pathname === iHash;
    const activeStyle = { textShadow: '2px 2px 4px #000000'}

    return (
        <div className='h-[3.75rem] flex items-center justify-center space-x-2 rounded-b-lg border border-b-white text-sm font-semibold'>
            <div >
                <HashLink smooth to="/#about" style={ isActive('/#about') ? activeStyle : null}>
                    About
                </HashLink>

            </div>
            <div >
                <HashLink smooth to="/#projects">
                    Projects
                </HashLink>
            </div>
            <div >
                <HashLink smooth to="/#contact">Contact</HashLink>
            </div>
        </div>
    )
}

export default Navbar