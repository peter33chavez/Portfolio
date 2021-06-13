import React from 'react'

const ConnectForm = (e) => {
    return (
        <div className='connect-form-container'>
            <form className='connect-form' onSubmit=''>
                <label htmlFor="name" className='form-label'>Name</label>
                <input type="text" name='name' className='form-input'/>

                <label htmlFor="subject" className='form-label'>Subject</label>
                <input type="text" name='subject' className='form-input'/>

                <label htmlFor="message" className='form-label'>Message</label>
                <input type="text" name='message' className='form-input'/>

                <button type='submit' className='form-btn'></button>
            </form>
        </div>
    )
}

export default ConnectForm
