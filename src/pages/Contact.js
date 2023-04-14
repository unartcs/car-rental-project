import React from 'react'

export default function Contact() {
  return (
    <div className='contact-wrapper' id='contact-id'>
        <h1>Contact <span>Us</span></h1>
        <div className='contact-content'>
          <form className='contact-form'>
          <fieldset>
              <label htmlFor='fullname'>Full Name: </label>
              <input type='text' name='fullname'></input>
            </fieldset>
            <fieldset>
              <label htmlFor='email'>Email: </label>
              <input type='email' name='email'></input>
            </fieldset>
            <fieldset>
              <label htmlFor='phonenumber'>Phone number: </label>
              <input type='number' name='phonenumber'></input>
            </fieldset>
            <fieldset>
              <label htmlFor='message'>Message: </label>
              <textarea type='text' name='message'></textarea>
            </fieldset>
            <h3>Message us</h3>
          </form>
        </div>
    </div>
  )
}
