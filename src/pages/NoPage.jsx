import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
    
    
      {/* Breadcrumb */}
      <div className=" absolute top-48 left-24 text-sm text-gray-500">
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <span className="mx-2">/</span>
        <span>404 Error</span>
      </div>
    

      {/* Main Content */}
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Large 404 Text */}
        <h1 
          className="font-bold text-gray-900 leading-none"
          style={{
            fontSize: '6rem',
            fontWeight: '500',
            color: '#111111',
            lineHeight: '0.8',
            letterSpacing: '-0.03em',
            textAlign: 'center',
            margin: '0'
          }}
        >
          404 Not Found
        </h1>
      
        {/* Error Message */}
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Your visited page not found. You may go home page.
        </p>
        
        {/* Back to Home Button */}
        <Link 
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-4 px-8 rounded transition-colors duration-200"
          style={{
            backgroundColor: '#ef4444',
            color: 'white',
            padding: '16px 32px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
            minWidth: '200px',
            height: '56px',
            lineHeight: '24px',
            cursor: 'pointer'
          }}
        >
          Back to home page
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
