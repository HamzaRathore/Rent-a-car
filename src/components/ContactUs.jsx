import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail, MdDialpad } from "react-icons/md";

const ContactUs = () => {

    
  return (
    <section className="py-20 bg-gray-100 pt-36 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-y-10 lg:gap-x-10">
          {/* Company Address */}
          <div className="w-full lg:w-5/12 bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <CiLocationOn className="text-red-600 text-xl mr-2" />
                  <h2 className="text-xl font-bold uppercase">Location</h2>
                </div>
                <p className="ml-4">
                  Johar Town, Near University of Central Punjab, Lahore.
                </p>
                <iframe
                  className="w-full h-64 mt-4 rounded-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MdOutlineMail className="text-red-600 text-xl mr-2" />
                  <h2 className="text-lg font-bold uppercase">Email</h2>
                </div>
                <p className="ml-4">autorental@gmail.com</p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <MdDialpad className="text-red-600 text-xl mr-2" />
                  <h2 className="text-lg font-bold uppercase">Contact</h2>
                </div>
                <p className="ml-4">0322-4435789</p>
                <p className="ml-4">0300-9988777</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-5/12 bg-white rounded-lg shadow-lg">
            <form className="p-6">
              <h2 className="text-xl font-bold mb-4 border-b-4 border-red-500 pb-2">
                Contact Us
              </h2>
              <p className="text-sm mb-6">
                Let us know your questions, suggestions, and concerns by filling
                out the contact form.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="userName"
                  className="block font-bold mb-1 text-gray-700"
                >
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="Enter username"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-bold mb-1 text-gray-700"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block font-bold mb-1 text-gray-700"
                >
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="+92300-0000000"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-bold mb-1 text-gray-700"
                >
                  Enter your Selected Car Name and ID{' '}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Description"
                  rows="4"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
