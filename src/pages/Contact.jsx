// Contact.jsx
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center -mt-30">
      <h2 className="text-3xl font-bold text-green-900 text-center ">
          Contact Us
        </h2>
         <p className="text-gray-700 text-center mb-10">
          Reach out to us for any queries, support, or business opportunities.
        </p>
      <div className="w-full max-w-3xl bg-white/30 backdrop-blur-3xl rounded-2xl shadow-lg p-10">    

        <div className="space-y-6 text-green-900">
          {/* Address */}
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p>Medicaps University, Indore</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>+91 12345 12345</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-2xl" />
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>support@agropal.com</p>
            </div>
          </div>
        </div>

        {/* Optional Social Links */}
        <div className="mt-10 flex justify-center space-x-6 text-green-700 text-2xl">
          {/* Replace with your social links */}
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
