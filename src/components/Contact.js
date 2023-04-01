import React, { useRef } from 'react';
import emailjs from "emailjs-com";

function Contact() {
const form = useRef();

const sendMessage = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
        "service_ddd1xbj",
        "template_0flyste",
        form.current,
        "Tfm-EBi_ikLONiSWD"
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
    <section id='contact'className="flex flex-col justify-center items-center m-10 p-6">
        <h2 className='text-3xl'>Contact Me</h2>
        <form className='flex flex-col w-96 m-10 p-6' ref={form} onSubmit={sendMessage}>
            <input
            className='form_input p-2 m-2 rounded bg-transparent outline focus:outline-gray-400' type='text' name='name' placeholder='Name' required>
            </input>
            <input
            className='form_input p-2 m-2 rounded bg-transparent outline focus:outline-gray-400' type='email' name='email' placeholder='Email' required>
            </input>
            <textarea
            className='form_text p-2 m-2 rounded bg-transparent outline focus:outline-gray-400 text-justify' name='message' rows='6' placeholder='Message' required>
            </textarea>
            <button type='submit' className='p-2 w-32 m-2 button'>Send Message</button>
        </form>
    </section>
)
}

export default Contact;