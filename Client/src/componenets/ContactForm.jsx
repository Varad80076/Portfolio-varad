import { useForm, ValidationError } from '@formspree/react';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram   } from '@fortawesome/free-brands-svg-icons';
// import fetch from 'node-fetch';
import {  toast } from 'react-toastify';
import{saveContact} from '../utils/allapi.js'
import axios from "axios";

function ContactFormm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [click, setClick] = useState(false);

  const collectData = async (e) => {
    e.preventDefault();
    if(email === "" || name === "" || message === "") return;
    setClick(true);
    try {
        const response = await axios.post(saveContact, {
            name,
            email, 
            message 
        },
        {
          responseType: "text",
          transformResponse: [(data) => data],
          // Accept any status so that axios doesn't reject the promise
          validateStatus: () => true,
        }
      );
       
        if (response.status === 201||response.status === 204) {
          toast.success("Details sent successfully!");
          toast(response.data.message);
          setName("");
          setEmail("");
          setMessage("");
          setClick(false);
        } else {
          toast.warn(`Unexpected response status: ${response.status}`);
        }
    } catch (error) {
    // If error.response.status is 201, treat as success
    if (error.response && error.response.status === 201|| error.response.status === 204) {
      toast.success("Details sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  }
    };

  

  return (

    <article className="  rounded-2xl p-1 sm:p-6 w-[1000px]  shadow-md" data-page="contact">
    <header>
      <h2 className="text-3xl font-bold text-white border-b-4 w-28  border-[#af862c] flex justify-start pb-2 mb-4">Contact</h2>
    </header>

    <section className="mapbox mb-6 " data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238404.2020479688!2d75.41061267042319!3d20.99000507589057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa4a1eab90f%3A0x37f67bd21bff0a3c!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1732709895981!5m2!1sen!2sin"
          width="860"
          height="400"
          loading="lazy"
          title="Google Maps Location"
          className="rounded-md border filter grayscale invert  w-full flex flex-wrap xl:w-[900px] "
        ></iframe>
      </figure>
    </section>

    <section className="contact-form">
      <h3 className="text-2xl font-bold text-white  flex justify-start pb-2 mb-4">Contact Form</h3>

      <form onSubmit={collectData} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          <input
            type="text"
            name="fullname"
            className="form-input px-4 py-2  border-gray-700 rounded-md bg-transparent text-white border-[1px] shadow-[0.3px_0.3px_5px_2px_black,-0.9px_-0.9px_5px_0px_white]"
            placeholder="Full name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />

          <input
            type="email"
            name="email"
            className="form-input px-4 py-2  border-gray-700 rounded-md bg-transparent text-white border-[1px] shadow-[0.3px_0.3px_5px_2px_black,-0.9px_-0.9px_5px_0px_white]"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
        </div>

        <textarea
          name="message"
          className="form-input px-4 py-2  border-gray-700 rounded-md bg-transparent text-white w-full border-[1px] shadow-[0.3px_0.3px_5px_2px_black,-0.9px_-0.9px_5px_0px_white]"
          placeholder="Your Message"
          value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          required
        ></textarea>

        <button
          className="flex flex-wrap float-end bg-[#202022] shadow-[0.5px_0.5px_3px_2px_black,-0.8px_-0.8px_3px_0px_white]  justify-center  text-center  h-10 p-2 px-3 rounded-lg w-fit
          group hover:bg-gradient-to-br hover:from-[#ffdb708b]  transition-opacity duration-100 hover:to-[#4b474768]"
          type="submit"
          disabled ={click}
        >
          <FontAwesomeIcon icon={faTelegram } className='p-1  text-[#1e1b14]' />
          <span className='text-[#afa014]'> {(click ? "Sending..." : "Send Message")}</span>
        </button>
      </form>
    </section>
  </article>
  );
}
export default ContactFormm;