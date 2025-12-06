import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'
import emailjs from "emailjs-com";
import { useState } from "react";
export default function Contact(){

    const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required.";
    if (!form.email.trim()) return "Email is required.";

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) return "Enter a valid email address.";

    if (!form.message.trim()) return "Message cannot be empty.";
    return null; // valid
  };

    const sendMail = (e) => {
        e.preventDefault();

        const error = validate();
        if (error) {
            alert(error);
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        emailjs
            .send(
                serviceId,
                templateId,
                {
                    user_name: form.name,
                    user_email: form.email,
                    message: form.message,
                },
                publicKey
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully");
                    setForm({ name: "", email: "", message: "" });
                },
                (err) => {
                    console.log(err.text);
                    alert("Failed to send message. Please try again later.");
                }
            );
    };

    return (
        <div className="bg-black text-white py-20" id="contact">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
                <div className="flex flex-col md:flex-row items-center md:space-x-12">
                    <div className="flex-1">
                        <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'>Let's discuss</h3>
                        <p>I'm open to discussions on web development projects or partnership opportunities</p>
                        <div className="m-4">
                            <FaEnvelope className="inline-block text-green-400 mr-2" />
                            <a href="mailto:hanofialabi18@gmail.com" className="hover:underline">EasyDev@gmail.com</a>
                        </div>
                        <div className="m-4">
                            <FaPhone className="inline-block text-green-400 mr-2" />
                            <span>+2348146669533</span>
                        </div>
                        <div className="m-4">
                            <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
                            <span>Block M8, Naf Base Ikeja, Lagos, Nigeria</span>
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <form onSubmit={sendMail} className="space-y-4">
                            <div>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                                    rows="5"
                                    placeholder="Enter your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="bg-gradient-to-r from-green-400 to-blue-500 cursor-pointer text-white md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}