import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navigation() {
    return (
        <nav className='main-header-menu m-2'>
            <section className='display: flex space-x-10 justify-center m-1'>
                <div className='navbutton'>
                    <NavLink to='/about'
                    activeClass={"bg-lime-300"}
                    >About</NavLink>
                </div>
                <div className='navbutton'>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </div>
                <div className='navbutton'>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                <div className='navbutton'>
                    <NavLink to='/resume'>Resume</NavLink>
                </div>
            </section>
            <hr />
        </nav>
      
    );
}

