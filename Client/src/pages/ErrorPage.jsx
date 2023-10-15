import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! The page you are looking for could not be found.</p>
        <p className="text-lg text-gray-600">Return to <a href="/" className="text-blue-500 hover:underline">homepage</a>.</p>
      </div>
    </div>
  );
};

export default NotFound;
