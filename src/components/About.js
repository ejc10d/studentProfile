import React from "react";


function About () {
    return (
        <div className="outline rounded flex flex-col justify-center items-center m-10 p-6" >
            <h2 className="text-3xl m-2">About Me</h2>
            <img className="profile" alt="profile" src={require('../assets/images/headshot.png')} />
            <p className="content m-2 max-w-sm text-center">
            Hello World! < br />
            My name is Eliot and I'm a junior web developer. <br />
            </p>
            <p className='content m-2 max-w-md'>
            I recetly completed a full-stack coding bootcamp through UCF and hope to pursue a career in this exciting new career. The part that I've come to love about coding is that there is always something more to learn and some new technology to dive into and attempt to understand. 
            <br/> <br/>
            I have been intrigued by code for quite some time. I always liked manipulating the code of my MySpace page and getting to see my results show up on the front-end. I discovered HTML's usefulness when I learned some HTML to write some emails for a non-profit when I was younger. And now, I've found an appreciation for the back-end that give web applications purpose.
            </p>
        </div>
    );
}

export default About;