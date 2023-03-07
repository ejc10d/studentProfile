import React from 'react';
// import { link } from 'react-router-dom';

function Navigation(props) {
    const { currentTab, setCurrentTab } = props
    return (
        <nav className="">
            <ul className='display: flex space-x-10 justify-center m-3'>
                <li className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab('about')}>About</span>
                </li>
                <li className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded' href='#portfolio'>
                    <span onClick={() => setCurrentTab('portfolio')}>Portfolio</span>
                </li>
                <li className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded' href='#contact'>
                    <span onClick={() => setCurrentTab('contact')}>Contact</span>
                </li>
                <li className='p-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded' href='#resume'>
                    <span onClick={() => setCurrentTab('resume')}>Resume</span>
                </li>
            </ul>
            <hr />
        </nav>
    )
}

export default Navigation;