"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("It was unable to sent a message");
        }
      );
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col gap-6 p-12 justify-center sm:gap-12"
    >
      <h2 className="text-3xl font-bold">Contact</h2>
      <form
        className="flex flex-col sm:w-4/5 md:w-3/5 gap-4"
        autoComplete="on"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          className="px-3 py-2 rounded-md dark:bg-slate-950 focus:outline-slate-600"
          placeholder="Name"
          name="user_name"
          required
        ></input>
        <input
          type="email"
          className="px-3 py-2 rounded-md dark:bg-slate-950 focus:outline-slate-600"
          placeholder="E-mail"
          name="user_email"
          required
        ></input>
        <textarea
          rows="10"
          className="px-3 py-2 rounded-md dark:bg-slate-950 focus:outline-slate-600 resize-none"
          placeholder="Message"
          name="message"
          required
          autoComplete="off"
        ></textarea>
        <p>*All fields are required in order to submit form.</p>
        <input
          type="submit"
          className="bg-white px-3 py-2 rounded-md dark:bg-slate-950 cursor-pointer"
          value="Send"
        ></input>
      </form>
    </section>
  );
};
