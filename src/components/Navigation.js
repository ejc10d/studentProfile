import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Navigation() {
    return (
        <nav className='main-header-menu m-2'>
            <section className='display: flex space-x-10 justify-center m-1'>

                <NavLink to='/about' className={'navbutton'}
                    activeClassName="active">About</NavLink>

                <NavLink to='/portfolio' className={'navbutton'}
                    activeClassName="active">Portfolio</NavLink>

                <NavLink to='/contact' className={'navbutton'}
                    activeClassName="active">Contact</NavLink>

                <NavLink to='/resume' className={'navbutton'}
                    activeClassName="active">Resume</NavLink>

            </section>
            <hr />
        </nav>

    );
}

