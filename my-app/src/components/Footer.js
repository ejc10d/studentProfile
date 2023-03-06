import React from 'react';

function Footer() {
    return (
        <footer className=''>
            <div>
                <p  className='display: flex space-x-10 justify-center'>
                    <a href='https://github.com/ejc10d' className='m-1'>
                        GitHub Profile
                    </a> 
                    <div>|</div>
                    <a href='https://www.linkedin.com/in/eliot-crandall-3b8a3669/' className='m-1'>
                         LinkedIn Profile
                    </a> <div>|</div>
                    <a href='http://twitter.com/eliot_jay' className='m-1'>
                        Twitter Profile
                    </a>
                </p>
                <div className='text-center m-1'>Site Created by Eliot Crandall</div>
            </div>
        </footer>
    );
}

export default Footer;