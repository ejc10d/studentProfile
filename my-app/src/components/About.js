import React from "react";

function About () {
    return (
        <div>
            <h2 className="text-3xl m-2">About Me</h2>
            {/* <img className="profilePhoto" src={process.env.PUBLIC_URL + '/img/profilePhoto.jpg'} alt="profile photo"/> */}
            <p className="content m-2">
            This is the place where my "about me" will go. 
            </p>
        </div>
    );
}

export default About;