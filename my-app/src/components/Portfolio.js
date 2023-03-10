import React from "react";
const Image1 = require('../assets/images/Image1.jpg');
const Image2 = require('../assets/images/Image2.jpg');
const Image3 = require('../assets/images/Image3.jpg');
const Image4 = require('../assets/images/Image4.jpg');
const Image5 = require('../assets/images/Image5.jpg');
const Image6 = require('../assets/images/Image6.jpg');

const data = [
    {
        id: 1,
        image: Image1,
        title: "Out of this World Jokes",
        github: "https://github.com/ejc10d/outofthisworldjokes",
        demo: "https://marissa-a-darr.github.io/outofthisworldjokes/",
    },
    {
        id: 2,
        image: Image2,
        title: "Paws and Whiskers",
        github: "https://github.com/magmesser/pawsandwhiskers",
        demo: "https://pawsandwhiskers.herokuapp.com/",
    },
    {
        id: 3,
        image: Image3,
        title: "Tech Blog",
        github: "https://github.com/ejc10d/challenge_14",
        demo: "https://techblogapp.herokuapp.com/",
    },
    {
        id: 4,
        image: Image4,
        title: "Just Another Text Editor",
        github: "https://github.com/ejc10d/pwaTextEditor",
        demo: "https://just-another-text-editor1.herokuapp.com/",
    },
    {
        id: 5,
        image: Image5,
        title: "ReadMe Generator",
        github: "https://github.com/ejc10d/challenge_9",
        demo: "https://www.youtube.com/watch?v=1q8UdzCTYxo",
    },{
        id: 6,
        image: Image6,
        title: "Social Network API",
        github: "https://github.com/ejc10d/socialnetworkapi",
        demo: "https://www.youtube.com/watch?v=e4EPr7UKLyM",
    },
]

function Portfolio () {
    return (
        <div className="outline rounded text-center m-10 p-6">
            <h2 className="text-3xl m-2">My Work</h2>
            {/* <img className="profilePhoto" src={process.env.PUBLIC_URL + '/img/profilePhoto.jpg'} alt="profile photo"/> */}
            <div className="content grid grid-cols-1 md:grid-cols-2 sm:gird-cols-3 gap-6 mb-10">
            {data.map(({ id, image, title, github, demo }) => {
                return (
                    <article key={id} className="">
                        <div className="card">
                        <h3 className="text-center text-2xl">{title}</h3>
                        <div className="card-body grid place-items-center">
                            <img src={image} alt={title} className="max-w-sm mb-2"></img>
                        </div>
                        <div className="m-2">
                            <a href={github} className='outline p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded m-3' target='_blank' rel='noreferrer'>GitHub</a>
                            <a href={demo} className="outline p-1 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded m-3" target="_blank"
                            rel='noreferrer'>
                                Demo
                            </a>
                        </div>
                        </div>
                    </article>
                );
            })}
            </div>
        </div>
    );
}

export default Portfolio;