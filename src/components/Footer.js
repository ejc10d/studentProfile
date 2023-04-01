import React from 'react';

function Footer() {
    return (
        <footer className='m-16'>
            <hr />
            <div className='m-5'>
                <div  className='display: flex space-x-10 justify-center'>
                    <a 
                    href='https://github.com/ejc10d' 
                    target="_blank"
                    rel="noreferrer"
                    className='navbutton'>
                        GitHub Profile
                    </a> 
                    <section>|</section>
                    <a 
                    href='https://www.linkedin.com/in/eliot-crandall-3b8a3669/' 
                    target="_blank"
                    rel="noreferrer"
                    className='navbutton'>
                         LinkedIn Profile
                    </a> 
                    {/* <section>|</section>
                    <a href='http://twitter.com/eliot_jay' className='navbutton'>
                        Twitter Profile
                    </a> */}
                </div>
                <div className='text-center m-5 text-xs'>Created by Eliot Crandall</div>
            </div>
        </footer>
    );
}

export default Footer;