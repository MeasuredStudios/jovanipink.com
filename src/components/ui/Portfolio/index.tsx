import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

export const PortfolioCard = () => {
  return (
    <div className="flex flex-wrap items-center justify-center w-screen text-gray-500 min-h-screen bg-gray-50 p-10">
      <div className="space-y-10 m-5">
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-full bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-full"
            src="https://images.generated.photos/m44TfgxWw8bkJQuXTH4uLYKNTyuNjeYPNcEKcRb9Kdo/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMjg5NzcuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio One
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-8 h-8 rounded-full shadow-lg top-0 right-0 -mt-1 -mr-1 bg-red-400">
            <svg
              className="w-5 h-5 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Component End  */}
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-full bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-full"
            src="https://images.generated.photos/e3_04t3P2byp0fOtpG31rUaVYokHCXDQgZLpQulwMjw/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NDg1ODMuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio 2
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-green-400 shadow-lg top-0 right-0 -mt-1 -mr-1">
            <svg
              className="w-5 h-5 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Component End  */}
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-full bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-full"
            src="https://images.generated.photos/0PFsqYp0XTiayISILkj5ILce1BZEkukUJyXyNza-S3o/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NTk2NjEuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio 3
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-8 h-8 rounded-full bg-purple-400 shadow-lg top-0 right-0 -mt-1 -mr-1">
            <svg
              className="w-5 h-5 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
          </div>
        </div>
        {/* Component End  */}
      </div>
      <div className="space-y-10 m-5">
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-lg"
            src="https://images.generated.photos/m44TfgxWw8bkJQuXTH4uLYKNTyuNjeYPNcEKcRb9Kdo/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMjg5NzcuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio 4
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-7 h-7 rounded-lg transform rotate-45 shadow-lg top-0 right-0 -mt-2 -mr-2 bg-red-400">
            <svg
              className="w-5 h-5 fill-current text-white transform -rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Component End  */}
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-lg"
            src="https://images.generated.photos/e3_04t3P2byp0fOtpG31rUaVYokHCXDQgZLpQulwMjw/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NDg1ODMuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio 5
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-7 h-7 rounded-lg transform rotate-45 shadow-lg top-0 right-0 -mt-2 -mr-2 bg-green-400">
            <svg
              className="w-5 h-5 fill-current text-white transform -rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {/* Component End  */}
        {/* Component Start */}
        <div className="relative flex items-center pl-2 pr-6 w-72 max-w-full h-20 rounded-xl bg-white shadow-lg hover:shadow-xl transition duration-100">
          <img
            className="w-16 h-16 rounded-lg"
            src="https://images.generated.photos/0PFsqYp0XTiayISILkj5ILce1BZEkukUJyXyNza-S3o/rs:fit:256:256/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NTk2NjEuanBn.jpg"
            alt=""
          />
          <p className="ml-4">
            <a
              href="#"
              className="text-blue-500 font-medium hover:underline hover:text-blue-600"
            >
              Portfolio 6
            </a>
          </p>
          <div className="absolute flex items-center justify-center w-7 h-7 rounded-lg transform rotate-45 shadow-lg top-0 right-0 -mt-2 -mr-2 bg-purple-400">
            <svg
              className="w-5 h-5 fill-current text-white transform -rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                clipRule="evenodd"
              />
              <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
            </svg>
          </div>
        </div>
        {/* Component End  */}
      </div>
    </div>
  );
};
