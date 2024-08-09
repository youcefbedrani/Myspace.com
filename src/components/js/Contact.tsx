import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../../styles/contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    to_name: "Mohammed Adel",
    message: "",
    from_email: "", // Changed to from_email to match EmailJS template
  });

  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_k1ofvgf", // Replace with your EmailJS service ID
        "template_74c314m", // Replace with your EmailJS template ID
        formData,
        "p45xu_CwDIP5AkZVj" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // Reset the form data after submission
    setFormData({
      from_name: "",
      to_name: "Mohammed Adel",
      message: "",
      from_email: "", // Reset this field too
    });
  };

  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: "97px" }}>
        <h2 className="text-3xl font-semibold mb-8">Let's Get in Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="from_email" // Updated to match EmailJS template
                value={formData.from_email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 bg-gray-800 text-white rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Send Message
            </button>
            {isSent && (
              <p className="text-green-500 mt-4">Your message has been sent!</p>
            )}
          </form>

          {/* Ko-fi Donation Button */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4">Support My Work</h3>
            <a
              href="https://ko-fi.com/bedranimohammedadel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
                alt="Buy Me a Coffee at ko-fi.com"
                className="w-48 hover:scale-105 transform transition-transform duration-300"
              />
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Your support helps me keep going!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
