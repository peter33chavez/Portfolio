import React from 'react'
import './ConnectForm.css'
import CloseIcon from '../Images/Icon-close.svg'

const ConnectForm = ({ trigger, closeBtn }) => {
    return (trigger) ?(
        <div className="popup-background">
            <div className='connect-form-container'>
                <form className='connect-form' onSubmit=''>
                    <label htmlFor="name" className='form-label'>Name</label>
                    <input type="text" name='name' className='form-input'/>

                    <label htmlFor="subject" className='form-label'>Subject</label>
                    <input type="text" name='subject' className='form-input'/>

                    <label htmlFor="message" className='form-label'>Message</label>
                    <input type="text" name='message' className='form-input'/>

                    <button type='submit' className='form-btn'>Send</button>
                </form>
                <button className="close-btn" onClick={() => closeBtn(false)}><img src={CloseIcon}/></button>
            </div>
        </div>
    ) : '';
}

export default ConnectForm
