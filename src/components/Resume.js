import React from "react";
const myResume = require('../assets/Resume-EliotCrandall.pdf')

function Resume() {
    return (
        <>
            <div className="text-center m-10 p-3 grid grid-cols-6">
                <h2 className="text-3xl m-2 col-span-6">Skill Set</h2>
                <div className="col-span-2 outline rounded p-3 m-4">
                    <h3 className="text-2xl m-3">Front End:</h3>
                    <ul className="text-xl">
                        <li>HTML</li>
                        <li>CSS - Bootstrap & Tailwinds</li>
                        <li>Javascript</li>
                    </ul>
                </div>
                <div className="col-span-2 outline rounded p-3 m-4">
                    <h3 className="text-2xl m-3">Back End:</h3>
                    <ul className="text-xl">
                        <li>Web-based, Third-party, and Sever-side APIs</li>
                        <li>Node.js, Express, MongoDB</li>
                        <li>MySQL and Object-Relational Mapping</li>
                    </ul>
                </div>
                <div className="col-span-2 outline rounded p-3 m-4">
                    <h3 className="text-2xl m-3">Others:</h3>
                    <ul className="text-xl">
                        <li>Modle-View-Controller</li>
                        <li>React</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className="text-center m-10">
                <h2 className="text-3xl m-2">Resume</h2>
                <div className="content m-2">
                </div>
                <a href={myResume} download className='p-2 w-32 m-2 button'>Download Now</a>
            </div>
        </>
    );
}

export default Resume;