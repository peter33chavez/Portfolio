import React from 'react'
import './ConnectForm.css'
import CloseIcon from '../Images/Icon-close.svg'
import { db } from '../Firebase'
import { useState } from 'react'

const ConnectForm = ({ trigger, closeBtn }) => {
    //form state
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //form handler
    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('Connection').add({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            alert('Message was sent!');
        })
        .catch((error) => {
            alert(error.message);
        });
        setName('');
        setEmail('');
        setMessage('');
        closeBtn(false);
    };

    return (trigger) ?(
        <div className="popup-background">
            <div className='connect-form-container'>
                <form className='connect-form' onSubmit={handleSubmit}>
                    <h1>Connect</h1>
                    <hr />
                    <div className="name-input form-item">
                        <label className='form-label'>Name</label>
                        <input type="text"  className='form-input' value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="email-input form-item">
                        <label className='form-label'>Email</label>
                        <input type="email"  className='form-input' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="message-input form-item">
                        <label className='form-label'>Message</label>
                        <textarea type="textarea" className='form-input textarea' value={message} onChange={(e) => setMessage(e.target.value)}/>
                    </div>
                    <button type='submit' className='form-btn'>Send</button>
                </form>
                <h2 className='direct-contact'>Direct Contact</h2>
                <hr/>
                <p className='contact-item'>Email: Peter33chavez@gmail.com</p>
                <p className='contact-item'>Number: (408)960-5790</p>
                <button className="close-btn" onClick={() => closeBtn(false)}><img src={CloseIcon} alt='close button'/></button>
            </div>
        </div>
    ) : '';
}

export default ConnectForm
