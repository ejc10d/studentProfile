import React, { useRef } from 'react';
import emailjs from "emailjs-com";

function Contact() {
const form = useRef();

const sendMessage = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_qjmagad",
        "templage_utd1ajn",
        form.current,
        "-0fBDvvdgcSeYE7uC"
    )
    .then(
        (result) => {
            console.log(result.text);
        },
        (error) => {
            console.log(error.text);
        }
    )
    .then(alert("Your message was delivered!"))
    .then(e.target.reset());
};

return (
    <section id='contact'className='w-96'>
        <h2 className='text-3xl m-2'>Contact Me</h2>
        <form className='flex flex-col' ref={form} onSubmit={sendMessage}>
            <input
            className='form_input p-2 m-2 rounded bg-transparent outline focus:outline-gray-400' type='text' name='name' placeholder='Name' required>
            </input>
            <input
            className='form_input p-2 m-2 rounded bg-transparent outline focus:outline-gray-400' type='email' name='email' placeholder='Email' required>
            </input>
            <textarea
            className='form_text p-2 m-2 rounded bg-transparent outline focus:outline-gray-400 text-justify' name='message' rows='6' placeholder='Message' required>
            </textarea>
            <button type='submit' className='p-2 m-2 bg-transparent hover:bg-lime-300  hover:text-slate-900 rounded outline'>Send Message</button>
        </form>
    </section>
)
}

export default Contact;