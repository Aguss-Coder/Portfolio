import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('xkgwrwwr');

  if (state.succeeded) {
    return <p>Thanks for reaching out! I'll get back to you soon.</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-3 w-full max-w-2xl m-auto p-4 bg-eerie-black bg-opacity-50 rounded-lg border border-seasalt'
    >
      <label>Name</label>
      <input
        id='name'
        type='text'
        name='name'
        placeholder='Your Name'
        required
      />
      <label htmlFor='email'>Email</label>
      <input
        id='email'
        type='email'
        name='email'
        placeholder='email@example.com'
        required
      />
      <ValidationError
        prefix='Email'
        field='email'
        errors={state.errors}
      />
      <label>Message</label>
      <textarea
        className='flex flex-col w-10/12 border-2 border-delft-blue rounded-lg p-2 text-eerie-black'
        id='message'
        name='message'
        required
      />
      <ValidationError
        prefix='Message'
        field='message'
        errors={state.errors}
      />
      <button
        className='p-1 w-fit rounded-lg border border-seasalt'
        disabled={state.submitting}
        type='submit'
      >
        Send Message!
      </button>
    </form>
  );
}

export default ContactForm;
