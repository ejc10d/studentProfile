import React from 'react';


export default function Navigation() {
    return (
        <nav className='main-header-menu m-2'>
            <section className='display: flex space-x-10 justify-center m-1'>
                <div className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                    <a href='#about'>About</a>
                </div>
                <div className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                    <a href='#portfolio'>Portfolio</a>
                </div>
                <div className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                    <a href='#contact'>Contact</a>
                </div>
                <div className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                    <a href='#resume'>Resume</a>
                </div>
            </section>
            <hr />
        </nav>
      
    );
}

