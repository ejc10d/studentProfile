import React from "react";

function Resume () {
    return (
        <div className="text-center m-10">
            <h2 className="text-3xl m-2">Resume</h2>
            {/* <img className="profilePhoto" src={process.env.PUBLIC_URL + '/img/profilePhoto.jpg'} alt="profile photo"/> */}
            <div className="content m-2"> 
            </div>
            <button type='submit' className='p-2 w-32 m-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded outline'>Download Now</button>
        </div>
    );
}

export default Resume;