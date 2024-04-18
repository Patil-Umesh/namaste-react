import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notify = () =>
    toast("Thanks for the message. I'll get back to you soon!");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_0zf1wb2";
    const templateId = "template_wooyjs1";
    const publicKey = "uX8zpV2VeL1MKk-5p";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Umesh Patil",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  return (
    <div className="text-center pt-[120px] pb-[120px] ">
      <h1 className="font-bold text-gray-700 text-2xl">CONTACT US</h1>
      <div className=" bg-pink-100 mx-[500px] text-left rounded-2xl px-10">
        <p className="font-semibold text-lg text-gray-600 m-2 p-2 text-center">
          Tell us more and we will find best solution for you!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex my-5">
            <div className="w-28">
              <label className="text-gray-600  px-2">Name :</label>
            </div>
            <div>
              <input
                className="border border-black rounded-md ps-1 w-[22rem]"
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex my-5">
            <div className="w-28">
              <label className="text-gray-600 px-2">Email :</label>
            </div>
            <div>
              <input
                className="border border-black rounded-md ps-1 w-[22rem]"
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="flex">
            <div className="w-28">
              <label className="text-gray-600 px-2">Message :</label>
            </div>
            <div>
              <textarea
                className="border border-black rounded-md ps-1 w-[22rem]"
                cols="30"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="items-center content-center text-center">
            <button
              type="submit"
              onClick={notify}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm mx-5 my-10 px-10 py-3 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              // onClick={handleClearCart}
            >
              Submit
            </button>
            <ToastContainer autoClose={2000} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
