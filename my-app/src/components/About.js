import React from "react";


function About () {
    return (
        <div className="flex flex-col justify-center items-center m-10" >
            <h2 className="text-3xl m-2">About Me</h2>
            <img className=" max-w-xs rounded-3xl" alt="profile" src={require('../images/IMG_2542.jpg')} />
            <p className="content m-2 max-w-lg">
            Hello World! My name is Eliot and I'm an aspiring web developer. I have been intrigued by code for quite some time now. I always liked manipulating code and getting to see my results show up on a page. I learned some basic HTML to write some emails for a non-profit I worked with when I was younger. Currently, I'm finishing a coding bootcamp through UCF and hope to pursue a career in this exciting new career. The part that I've come to love about coding is that there is always something more to learn and some new technology to dive into and attempt to understand. 
            </p>
        </div>
    );
}

export default About;