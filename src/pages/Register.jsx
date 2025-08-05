import React from "react";
import { Link } from "react-router-dom";
import ShoppingImg from "../assets/signup.jpg";

const Register = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-16 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link> 
          <span className="mx-2">/</span> 
          <span className="text-gray-900">Sign Up</span>
        </div>

        <div className="flex flex-row items-center gap-16">
          {/* Left Side - Image */}
          <div className="flex-1">
            <div className="w-full max-w-2xl">
              <img
                src={ShoppingImg}
                alt="Shopping cart with mobile"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Side - Register Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-2">
                <h1 className="text-4xl font-medium text-gray-900">Create an account</h1>
                <p className="text-gray-600">Enter your details below</p>
              </div>

              {/* Register Form */}
              <form className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full pb-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email or Phone Number"
                      className="w-full pb-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className="w-full pb-3 border-0 border-b border-gray-300 bg-transparent text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-6 rounded"
                    style={{ 
                      display: 'block', 
                      minHeight: '50px', 
                      backgroundColor: '#ef4444',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded py-4 px-12 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
                    style={{
                      backgroundColor: 'white',
                      color: '#374151',
                      padding: '16px 48px',
                      borderRadius: '6px',
                      border: '1px solid #d1d5db',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '56px',
                      gap: '12px'
                    }}
                  >
                    <svg width="20" height="20" fill="currentColor" className="text-gray-500" viewBox="0 0 24 24">
                      <path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.383 0-6.148-2.805-6.148-6.273s2.765-6.273 6.148-6.273c1.93 0 3.227.82 3.969 1.523l2.715-2.648c-1.703-1.57-3.906-2.523-6.684-2.523-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.652-.07-1.148-.148-1.434z"/>
                    </svg>
                    Sign up with Google
                  </button>
                </div>
              </form>

              <p className="text-center text-gray-600 pt-4">
                Already have account?{' '}
                <Link to="/login" className="text-red-500 hover:text-red-600 font-medium transition-colors duration-200">Log in</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
