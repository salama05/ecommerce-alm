import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-16 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link> 
          <span className="mx-2">/</span> 
          <span className="text-gray-900">Contact</span>
        </div>

        <div className="flex flex-row items-start gap-16">
          {/* Left Side - Contact Information */}
          <div className="w-1/3 max-w-sm">
            <div className="space-y-8">
           

              {/* Contact Info */}
              <div className="space-y-8">
                {/* Call Us Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ef4444' }}>
                      <span className="text-red-500 text-xl font-bold" style={{ color: '#ef4444', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>📞</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Call Us</h3>
                  </div>
                  <div className="pl-13 space-y-2">
                    <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
                    <p className="font-medium text-gray-900">Phone: +880 6111 22222</p>
                  </div>
                </div>

                <hr className="border-gray-200" />

                {/* Write To Us Section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg" style={{ backgroundColor: '#ef4444' }}>
                      <span className="text-red-500 text-xl font-bold" style={{ color: '#ef4444', textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white' }}>✉️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Write To Us</h3>
                  </div>
                  <div className="pl-13 space-y-2">
                    <p className="text-gray-600">Fill out our form and we will contact <br /> you within 24 hours.</p>
                    <p className="font-medium text-gray-900">customer@exclusive.com</p>
                    <p className="font-medium text-gray-900">support@exclusive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-2/3 max-w-4xl">
            <div className="bg-white rounded-lg shadow-sm border p-8">
              <form className="space-y-6">
                {/* Name, Email, Phone Row */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name *"
                      className="w-full p-3 border border-transparent rounded-lg bg-gray-50/30 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email *"
                      className="w-full p-3 border border-transparent rounded-lg bg-gray-50/30 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone *"
                      className="w-full p-3 border border-transparent rounded-lg bg-gray-50/30 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full p-4 border border-gray-100/50 rounded-lg bg-gray-50/20 text-gray-900 placeholder-gray-400 focus:border-black focus:ring-2 focus:ring-black focus:ring-opacity-20 focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-12 rounded transition-colors duration-200"
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '16px 48px',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'inline-block',
                      textAlign: 'center',
                      minWidth: '180px',
                      height: '56px',
                      lineHeight: '1'
                    }}
                  >
                    Send Massage
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
