import React from "react";
const myResume = require('../assets/Resume-EliotCrandall.pdf')

function Resume () {
    return (
        <div className="text-center m-10">
            <h2 className="text-3xl m-2">Resume</h2>
            {/* <img className="profilePhoto" src={process.env.PUBLIC_URL + '/img/profilePhoto.jpg'} alt="profile photo"/> */}
            <div className="content m-2"> 
            </div>
            <a href={myResume} download className='p-2 w-32 m-2 button'>Download Now</a>
        </div>
    );
}

export default Resume;