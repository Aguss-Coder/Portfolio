import React, { useState } from 'react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    const form = e.target as HTMLFormElement;
    const formValues = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setSuccessMessage('');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      });

      setLoading(false);
      setSuccessMessage('Message sent!');

      form.reset();
    } catch (err) {
      console.error(err);
      alert('An error occurred. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex flex-col items-center gap-3 w-full max-w-2xl m-auto p-4 bg-eerie-black bg-opacity-50 rounded-lg border border-seasalt'
    >
      <label>
        <span>Name</span>
        <input
          type='text'
          name='name'
          required
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type='email'
          name='email'
          required
        />
      </label>
      <label>
        <span>Message</span>
        <textarea
          className='border-2 border-delft-blue rounded-lg p-2 text-eerie-black'
          name='message'
          required
        />
      </label>
      <button
        className='p-1 w-fit rounded-lg border border-seasalt'
        disabled={loading}
        type='submit'
      >
        Send Message!
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default ContactForm;
