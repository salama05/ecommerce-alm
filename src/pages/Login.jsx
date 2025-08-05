import React from "react";
import { Link } from "react-router-dom";
import ShoppingImg from "../assets/signup.jpg";

const Login = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumb */}
        <div className="mb-16 text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">Home</Link> 
          <span className="mx-2">/</span> 
          <span className="text-gray-900">Login</span>
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

          {/* Right Side - Login Form */}
          <div className="flex-1 max-w-md">
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">Log in to Exclusive</h1>
                <p className="text-gray-600">Enter your details below</p>
              </div>

              {/* Login Form */}
              <form className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <input
                      type="text"
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

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-12 rounded transition-colors duration-200"
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
                    Log In
                  </button>
                  <Link 
                    to="/forgot-password" 
                    className="text-red-500 hover:text-red-600 text-sm transition-colors duration-200"
                    style={{ color: '#ef4444' }}
                  >
                    Forgot Password?
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
