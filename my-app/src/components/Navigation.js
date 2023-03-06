import React from 'react';
// import { link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="">
<ul className='display: flex space-x-10 justify-center m-3'>
    <li>
        <a className='p-2 bg-transparent hover:bg-lime-300 hover:text-slate-900 rounded'href='#about'>About</a>
    </li>
    <li>
        <a className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'href='#portfolio'>Portfolio</a>
    </li>
    <li>
        <a className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'href='#contact'>Contact</a>
    </li>
    <li>
        <a className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'href='#resume'>Resume</a>
    </li>
</ul>
<hr />
        </nav>
    )
}

export default Navigation;