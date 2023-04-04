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
            I recently completed a full-stack coding bootcamp through UCF and am pursuing a job in this exciting new career. I have come to understand that in web development there is always room to improve or grow, there will always be new technologies to attempt to implement, and there will always be a need for creative problem solving within the industry. 
           <br/> <br/>
            I have been intrigued by coding for quite some time. I always liked tweaking the code of my MySpace page and getting to see my results show up on the front-end. I discovered HTML's usefulness when I learned some HTML to write some emails for a non-profit when I was younger. And now, I've found an appreciation for the back-end that give web applications purpose. Now that I understand the “full-stack” I want to continue to learn and grow as a developer.
            </p>
        </div>
    );
}

export default About;