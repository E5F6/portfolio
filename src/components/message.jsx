'use client'
import React, { useState } from 'react';

const Message = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'cd983054-7435-40e2-9c17-344402d4232c');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

  return (
    <section className="px-10 mb-10 flex justify-center items-center w-full" id="message">
      <div className="flex flex-col justify-center items-center gap-7 w-full lg:w-[80vw]">
        <h1 className="text-2xl md:text-3xl text-slate-200 font-medium self-start">Drop A Message</h1>
        <div className="flex justify-start items-center gap-3 px-5 py-5 rounded-md w-full card">
          <form onSubmit={onSubmit} className="w-full flex flex-col justify-start items-center gap-3">
            <label htmlFor="name" className="w-full text-xl font-medium text-slate-200 self-start">Name</label>
            <input type="text" name="name" id="name" className="w-full font-medium px-3 py-2 rounded-md outline-none text-slate-300 input" required autoComplete="off"/>
            <label htmlFor="email" className="w-full text-xl font-medium text-slate-200 self-start">Email</label>
            <input type="email" name="email" id="email" className="w-full font-medium text-slate-300 px-3 py-2 rounded-md outline-none input" required autoComplete="off"/>
            <label htmlFor="message" className="w-full text-xl font-medium text-slate-200 self-start">Message</label>
            <textarea name="message" id="message" cols="" rows="3" className="w-full font-medium text-slate-300 px-3 py-2 rounded-md outline-none input" required autoComplete="off"></textarea>
            <button type="submit" className="px-5 py-2 mt-2 text-slate-200 border-2 border-cyan-600 bg-transparent hover:bg-cyan-600 rounded-full font-medium transition ease-in">Submit</button>
          </form>
        </div>
        <span>{result}</span>
      </div>
    </section>
  );
};

export default Message;