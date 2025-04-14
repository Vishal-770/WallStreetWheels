import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Animated Logo */}
      <div className="mb-8 animate-pulse">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>

      {/* Error Code */}
      <h1 className="text-6xl font-bold mb-4">{errorCode}</h1>

      {/* Error Message */}
      <h2 className="text-xl mb-8 uppercase tracking-wider">{errorMessage}</h2>

      {/* Description */}
      <p className="text-gray-400 mb-8 max-w-md text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleGoBack}
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-200 uppercase text-sm tracking-wider"
        >
          Go Back
        </button>
        <Link
          to="/"
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-200 uppercase text-sm tracking-wider text-center"
        >
          Home
        </Link>
        <Link
          to="/cars"
          className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-200 uppercase text-sm tracking-wider text-center"
        >
          Browse Cars
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
