import React from 'react';

function Footer() {
    return (
        <footer className='m-16'>
            <hr />
            <div className='m-5'>
                <div  className='display: flex space-x-10 justify-center'>
                    <a href='https://github.com/ejc10d' className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                        GitHub Profile
                    </a> 
                    <section>|</section>
                    <a href='https://www.linkedin.com/in/eliot-crandall-3b8a3669/' className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                         LinkedIn Profile
                    </a> <section>|</section>
                    <a href='http://twitter.com/eliot_jay' className='p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded'>
                        Twitter Profile
                    </a>
                </div>
                <div className='text-center m-5 text-xs'>Created by Eliot Crandall</div>
            </div>
        </footer>
    );
}

export default Footer;