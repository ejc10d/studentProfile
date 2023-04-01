import React from "react";
const Image1 = require('../assets/images/Image1-2.jpg');
const Image2 = require('../assets/images/Image2.jpg');
const Image3 = require('../assets/images/Image3.jpg');
const Image4 = require('../assets/images/Image4.jpg');
const Image5 = require('../assets/images/Image5.jpg');
const Image6 = require('../assets/images/Image6.jpg');
const Image7 = require('../assets/images/Image7.jpg');

const data = [
    {
        id: 1,
        image: Image1,
        title: "Out of this World Jokes",
        github: "https://github.com/ejc10d/outofthisworldjokes",
        demo: "https://marissa-a-darr.github.io/outofthisworldjokes/",
        description: "This was a first group project my team worked on together to build. We were required to access two web-based APIs. Our first API is the background - it will change everyday becasue it is coming from NASA's Photo of the Day. The other API is the joke API we found and chose to implement because we all need a good laugh.",
        
    },
    {
        id: 2,
        image: Image2,
        title: "Paws and Whiskers",
        github: "https://github.com/magmesser/pawsandwhiskers",
        demo: "https://pawsandwhiskers.herokuapp.com/",
        description: "This was the second group project and showcases our ability to put together Full Stack development. We had to build both the front end, back end, implement a new CSS library (Tailwinds), and create authentication to access different parts of the site.",
    },
    {
        id: 7,
        image: Image7,
        title: "Georgia Evergreens",
        github: "https://github.com/ejc10d/georgia-evergreens",
        demo: "https://georgia-evergreens.herokuapp.com/",
        description: "This project was our final class project. It is a functioning ecommerce website my team and I built for a smaller company, Georgia Evergreens. We wanted to be able to approach the company afterwards with an update, mobile compatible, responsive React website.",
    },
    {
        id: 3,
        image: Image3,
        title: "Tech Blog",
        github: "https://github.com/ejc10d/challenge_14",
        demo: "https://techblogapp.herokuapp.com/",
        description: "This project shows the implementation of the Model View Controller and is a simple way to show a blog style webstie.",
    },
    {
        id: 4,
        image: Image4,
        title: "Just Another Text Editor",
        github: "https://github.com/ejc10d/pwaTextEditor",
        demo: "https://just-another-text-editor1.herokuapp.com/",
        description: "This Progressive Web Application is a text editor application - because the world doesn't have enough. The challenging part of this was making the data available offline.",
    },
    {
        id: 5,
        image: Image5,
        title: "ReadMe Generator",
        github: "https://github.com/ejc10d/challenge_9",
        demo: "https://www.youtube.com/watch?v=1q8UdzCTYxo",
        description: "This is a ReadMe Generator that is useful for the developer who would like to get a ReadMe file out quickly. This is a great place to start for a ReadMe because it can be edited to meet your needs. ",
    },{
        id: 6,
        image: Image6,
        title: "Social Network API",
        github: "https://github.com/ejc10d/socialnetworkapi",
        demo: "https://www.youtube.com/watch?v=e4EPr7UKLyM",
        description: "This Social Network API shows the skills of building out the back-end of a very simple fake social network.",
    }
]

function Portfolio () {
    return (
        <div className="outline rounded text-center m-10 p-6">
            <h2 className="text-3xl m-2">My Work</h2>
            {/* <img className="profilePhoto" src={process.env.PUBLIC_URL + '/img/profilePhoto.jpg'} alt="profile photo"/> */}
            <div className="content grid grid-cols-1 md:grid-cols-2 sm:gird-cols-3 gap-6 mb-10">
            {data.map(({ id, image, title, github, demo, description }) => {
                return (
                    <article key={id} className="">
                        <div className="card">
                        <h3 className="text-center text-2xl">{title}</h3>
                        <div className="card-body grid place-items-center">
                            <img src={image} alt={title} className="mb-2 flex shrink"></img>
                        </div>
                        <div className="m-2">
                            <p className="m-4">{description}</p>
                            <a href={github} className='button m-2' target='_blank' rel='noreferrer'>GitHub</a>
                            <a href={demo} className="button m-2" target="_blank"
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